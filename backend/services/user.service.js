import { sequelize } from "../db.js";

import { User } from "../models/user.model.js";

export async function getAllUsers() {
  return await User.findAll({
    attributes: ["id", "userId", "username", "password"],
  });
}

export async function createUser(username, password, userId) {
  // const transaction = await sequelize.transaction();

  try {
    const userRec = await User.create({ username, password, userId });
    // await Description.create(
    //   {
    //     text: description,
    //     author,
    //     TaskId: taskRow.id,
    //   },
    //   { transaction }
    // );
    return userRec.dataValues.userId;
  } catch (error) {
    console.log("Error: ", error);
    // await transaction.rollback();
  }

  return "error";
}
