import { sequelize } from "../db.js";

import { User } from "../models/user.model.js";

export async function getAllUsers() {
  return await User.findAll({
    attributes: ["id", "username", "password", "customId"],
  });
}

export async function createUser(username, password, customId) {
  const transaction = await sequelize.transaction();
  try {
    const userRec = await User.create({ username, password, customId });
    // await Description.create(
    //   {
    //     text: description,
    //     author,
    //     TaskId: taskRow.id,
    //   },
    //   { transaction }
    // );
    return userRec.dataValues.customId;
  } catch (error) {
    console.log("Error: ", error);
    await transaction.rollback();
  }

  return "error";
}
