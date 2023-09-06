import { users } from "../../controllers";
import { PATH } from "../../constants";

export default {
  path: PATH.USERS,
  GET: users.getAll,
  POST: users.create,
  children: [
    {
      path: ":id",
      GET: users.getById,
      PUT: users.update,
      DELETE: users.deleteById,
    },
  ],
};
