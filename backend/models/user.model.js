import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

import { Submission } from "./contact.model.js";

export const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customId: {
      type: DataTypes.STRING,
      allowNull: false,
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
