import { Context } from "rango";
import { users } from "../../services";
import { IUser } from "../../interfaces/model";

async function getAll(context: Context): Promise<any> {
  try {
    const data = await users.getAll();
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
}

async function getById(context: Context): Promise<any> {
  try {
    const { id } = context.params;
    const data = await users.getById(Number(id));
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
}

async function create(context: Context): Promise<any> {
  try {
    const payload = context.body as IUser;
    const data = await users.create(payload);

    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
}

async function update(context: Context): Promise<any> {
  try {
    const { id } = context.params;
    const payload = context.body as IUser;
    const data = await users.update(Number(id), payload);
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
}

async function deleteById(context: Context): Promise<any> {
  try {
    const { id } = context.params;
    const data = await users.deleteById(Number(id));
    return context.res.json({ data: data, status: "success" });
  } catch (err: any) {
    return context.res.status(500).json({ error: err.message });
  }
}

export default { getAll, getById, create, update, deleteById };
