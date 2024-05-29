import { sequelize } from "../db.js";

import { User } from "../models/user.model.js";

export async function getAllUsers() {
  return await User.findAll({
    attributes: ["id", "username", "password"],
  });
}

export async function createUser(username, password, userId) {
  // LOGICA => SERVICE + REPOSITORTY
  const transaction = await sequelize.transaction();

  try {
    const userRec = await User.create(
      { userId, username, password },
      { transaction }
    );
    // await Description.create(
    //   {
    //     text: description,
    //     author,
    //     TaskId: taskRow.id,
    //   },
    //   { transaction }
    // );

    // await transaction.commit();

    return userRec.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }

  return "error";
}
