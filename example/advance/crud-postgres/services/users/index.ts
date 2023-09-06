import { users } from "../../models";

async function getAll() {
  return await users.findAll({
    where: {
      deleted: false,
    },
  });
}

async function getById(id: number) {
  return await users.findOne({
    where: {
      id,
      deleted: false,
    },
  });
}

async function create(body: any) {
  return await users.create(body);
}

async function update(id: number, body: any) {
  return await users.update(body, { where: { id, deleted: false } });
}

async function deleteById(id: number) {
  return await users.update({ deleted: true }, { where: { id, deleted: false } });
}

export default { getAll, create, getById, update, deleteById };
