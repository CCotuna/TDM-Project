import { sequelize } from "../db.js";

import { Review } from "../models/review.model.js";

// export async function getAllUsers() {
//   return await User.findAll({
//     attributes: ["userId", "username", "password"],
//   });
// }

export async function createReview(title, message, rating, userId) {
  console.log("createReview", title, message, rating, userId);
  const transaction = await sequelize.transaction();
  try {
    const reviewRec = await Review.create(
      {
        title,
        message,
        rating,
        userId,
      },
      { transaction }
    );

    await transaction.commit();

    return reviewRec.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}

export async function getAllReviews() {
  return await Review.findAll();
}

export async function deleteOneReview(reviewId) {
  const transaction = await sequelize.transaction();
  try {
    await Review.destroy({ where: { id: reviewId } }, { transaction });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}

export async function updateReview(reviewId, title, message, rating) {
  const transaction = await sequelize.transaction();
  try {
    await Review.update(
      { title, message, rating },
      { where: { id: reviewId } }
    );
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
