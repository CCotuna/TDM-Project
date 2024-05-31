import { Sequelize } from "sequelize";

const db = {
  NAME: "proiectAnual",
  USERNAME: "proiectAnual",
  PASSWORD: "proiectAnual",

  options: {
    dialect: "mysql",
    timezone: "+00:00",
    host: "mysql.proiectAnual",
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
