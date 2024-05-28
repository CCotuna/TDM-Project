import { Sequelize } from "sequelize";

const db = {
  NAME: "sweetlikehoney",
  USERNAME: "sweetlikehoney",
  PASSWORD: "sweetlikehoney",

  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.sweetlikehoney",
    port: 3306,
    logging: function (str) {
      console.log(str);
    },
  },
};

export const sequelize = new Sequelize(
  db.NAME,
  db.USERNAME,
  db.PASSWORD,
  db.options
);
