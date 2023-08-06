import { RequestMethod, RouteCallback, RouteMethodObjectCallback, Middlewares } from "./types";
import { CreateRoute, Route, RouteEndpoint, RouteObject } from "./interfaces";
import RegEx from "./regex";

const routes = new Map<string, RouteObject>();
const reqMethods: RequestMethod[] = ["GET", "POST", "DELETE", "OPTIONS", "PUT", "PATCH"];

function createRouteMapper(route: Route): RouteObject {
  const paths = route.path.split("/");
  return mapRoutePaths(paths, route, routes);
}

function mapRoutePaths(paths: string[], route: Route, parent: Map<string, RouteObject>): RouteObject {
  const hasMorePaths = paths.length > 1;
  const path = paths.shift() as string;
  const routeObj: RouteObject = createRouteObject({ path }, parent);

  if (!hasMorePaths) {
    updateMiddlewares(route, routeObj);
    updateEndpoints(route, routeObj);
    updateChildren(route, routeObj);
  }

  if (hasMorePaths) {
    const childRouteObj = mapRoutePaths(paths, route, routeObj.children);
    routeObj.children.set(childRouteObj.path, childRouteObj);
  }

  parent.set(routeObj.path, routeObj);
  return routeObj;
}

function updateMiddlewares(route: Route, currentRoute: RouteObject) {
  const middlewares: Middlewares = route?.middlewares !== undefined ? route.middlewares : [];
  currentRoute.middlewares = [...currentRoute.middlewares, ...middlewares];
}

function updateEndpoints(route: Route, currentRoute: RouteObject) {
  const routeKeys = Object.keys(route) as RequestMethod[];
  const hasRouteMethods = routeKeys.some((e: any) => reqMethods.includes(e));

  if (hasRouteMethods) {
    currentRoute.endpoints = routeKeys.map(mapEndpoints(route)).filter((e) => e !== null) as RouteEndpoint[];
  }
}

function updateChildren(route: Route, currentRoute: RouteObject) {
  if (route?.children && route.children.length > 0) {
    route.children.forEach(mapRouteChildren(currentRoute));
  }
}

function mapRouteChildren(currentRoute: RouteObject) {
  return (childRoute: Route) => {
    const childRouteObj = createRouteMapper(childRoute);
    currentRoute.children.set(childRouteObj.path, childRouteObj);
  };
}

function mapEndpoints(route: Route) {
  return (method: RequestMethod): RouteEndpoint | null => {
    if (reqMethods.includes(method)) {
      const callback = (route[method] as RouteMethodObjectCallback)?.callback ?? (route[method] as RouteCallback);
      const middlewares = (route[method] as RouteMethodObjectCallback)?.middlewares ?? [];
      return { method, callback, middlewares };
    }

    return null;
  };
}

function createRouteObject(route: CreateRoute): RouteObject;
function createRouteObject(path: string, parent: Map<string, RouteObject>): RouteObject;
function createRouteObject(route: CreateRoute, parent: Map<string, RouteObject>): RouteObject;
function createRouteObject(route: CreateRoute | string, parent?: Map<string, RouteObject>): RouteObject {
  const isString = typeof route === "string";
  const routePath = isString ? route : route.path;
  const isExist = parent?.get(routePath);

  if (isExist || (isString && isExist)) return isExist;

  const { path, endpoints = [], middlewares = [], children = new Map<string, RouteObject>() } = route as CreateRoute;
  return { regex: RegEx(path), path, hasParam: path.includes(":"), endpoints, middlewares, children };
}

function checkRoutePathExist(pathname: string): RouteObject | undefined {
  const paths = pathname.split("/");
  let middlewares: Middlewares = [];
  let routeObj: RouteObject | undefined = undefined;

  // See https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/#arrayforeach-vs-for-and-forof
  // Why we use for-of instead of map, forEach or reduce
  for (const value of paths) {
    const prevRegex = routeObj?.regex ?? "";
    const childrenExists = (routeObj: RouteObject) => checkRouteChildrenPathExist(routeObj.children, value) ?? routeObj;
    routeObj = !routeObj ? createRouteObject(value, routes) : createRouteObject(childrenExists(routeObj));
    middlewares = [...middlewares, ...(routeObj?.middlewares ?? [])];

    if (routeObj !== undefined) {
      routeObj.regex = prevRegex + routeObj.regex;
    }
  }

  if (routeObj !== undefined) {
    routeObj.middlewares = middlewares;
  }

  return routeObj;
}

function checkRouteChildrenPathExist(children: Map<string, RouteObject>, path: string) {
  let routeObj: RouteObject | undefined = children.get(path);

  if (!routeObj) {
    for (const child of children.values()) {
      if (child.hasParam) {
        routeObj = child;
        break;
      }
    }
  }

  return routeObj;
}

function checkEndpointExist(routeObj: RouteObject, method: RequestMethod): RouteEndpoint | undefined {
  let endpoint: RouteEndpoint | undefined = undefined;

  routeObj.endpoints.some((e) => {
    const isExist = e.method === method;

    if (isExist) endpoint = e;

    return isExist;
  });

  return endpoint;
}

export { createRouteMapper, checkRoutePathExist, checkEndpointExist };
