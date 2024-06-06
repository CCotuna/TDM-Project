import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { User } from "./user.model.js";

export const Review = sequelize.define(
  "Review",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    paranoid: false,
  }
);

Review.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Review, { foreignKey: "userId" });
