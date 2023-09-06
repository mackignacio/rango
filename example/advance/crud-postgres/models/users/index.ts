import { DataTypes } from "sequelize";
import { sequelize } from "../../db";
import { MODEL } from "../../constants";

const table = sequelize.define(MODEL.USERS, {
  firstName: DataTypes.TEXT,
  lastName: DataTypes.TEXT,
  deleted: DataTypes.BOOLEAN,
});

export default table;
