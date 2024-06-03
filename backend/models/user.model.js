import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Submission } from "./contact.model.js";

export const User = sequelize.define(
  "User",
  {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

User.hasMany(Submission);
Submission.belongsTo(User);
