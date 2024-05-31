import { sequelize } from "../db.js";

import { User } from "../models/user.model.js";

export async function getAllUsers() {
  return await User.findAll({
    attributes: ["userId", "username", "password"],
  });
}

export async function createUser(userId, username, password) {
  // const transaction = await sequelize.transaction();

  try {
    const userRec = await User.create({ userId, username, password });
    // await Description.create(
    //   {
    //     text: description,
    //     author,
    //     TaskId: taskRow.id,
    //   },
    //   { transaction }
    // );
    return userRec.dataValues.id;
  } catch (error) {
    console.log("Error: ", error);
    // await transaction.rollback();
  }

  return "error";
}
