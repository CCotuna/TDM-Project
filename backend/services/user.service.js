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
    return userRec.dataValues.customId;
  } catch (error) {
    console.log("Error: ", error);
    await transaction.rollback();
  }

  return "error";
}

export async function deleteOneUser(userId) {
  const transaction = await sequelize.transaction();
  console.log("userId: ", userId);
  try {
    await User.destroy({ where: { id: userId } });
  } catch (error) {
    console.log("Error: ", error);
    await transaction.rollback();
  }
}

export async function updateUser(userId, username, password) {
  const transaction = await sequelize.transaction();
  try {
    await User.update({ username, password }, { where: { id: userId } });
  } catch (error) {
    console.log("Error: ", error);
    await transaction.rollback();
  }
}

export async function findUserById(userId) {
  return await User.findOne({ where: { id: userId } });
}
