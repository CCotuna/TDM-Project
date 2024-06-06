import { sequelize } from "../db.js";

import { Post } from "../models/post.model.js";

export async function getAllPosts() {
  return await Post.findAll({
    attributes: ["id", "title", "subtitle", "description", "text", "createdAt"],
  });
}

export async function createPost(title, subtitle, description, text, userId) {
  console.log("userId service post", userId);
  const transaction = await sequelize.transaction();
  try {
    const postRec = await Post.create(
      {
        title,
        subtitle,
        description,
        text,
        userId,
      },
      { transaction }
    );

    await transaction.commit();

    return postRec.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}

export async function deleteOnePost(postId) {
  const transaction = await sequelize.transaction();
  try {
    await Post.destroy({ where: { id: postId } }, { transaction });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
