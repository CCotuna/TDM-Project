import { Sequelize } from "sequelize";

const db = {
  NAME: "annualProject",
  USERNAME: "annualProject",
  PASSWORD: "annualProject",

  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.annualProject",
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
