import { Sequelize } from "sequelize";
import { DB_URL, DB_USERNAME, DB_PASSWORD } from "../env";

export const sequelize = new Sequelize(DB_URL, DB_USERNAME, DB_PASSWORD, {
  dialect: "postgres",
  dialectOptions: {},
});

const connect = () => {
  sequelize
    .authenticate()
    .then((_) => {
      console.log("Connection has been established successfully.");
    })
    .catch((_) => {
      console.error("Unable to connect to the database:", _);
    });
};

export default connect;
