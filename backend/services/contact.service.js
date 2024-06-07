import { sequelize } from "../db.js";

import { Submission } from "../models/contact.model.js";

export async function getAllSubmissions() {
  return await Submission.findAll();
}

export async function createSubmission(
  name,
  email,
  phone,
  eventType,
  eventDate,
  eventLocation,
  message,
  currentUserId
) {
  const transaction = await sequelize.transaction();
  try {
    const submissionRec = await Submission.create(
      {
        name,
        email,
        phone,
        eventType,
        eventDate,
        eventLocation,
        message,
        UserId: currentUserId,
      },
      { transaction }
    );

    await transaction.commit();

    return submissionRec.dataValues.id;
  } catch (error) {
    await transaction.rollback();
  }
  return "error";
}

export async function deleteOneSubmission(submissionId) {
  const transaction = await sequelize.transaction();
  try {
    await Submission.destroy({ where: { id: submissionId } }, { transaction });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}

export async function updateSubmission(
  submissionId,
  name,
  email,
  phone,
  eventType,
  eventDate,
  eventLocation,
  message
) {
  const transaction = await sequelize.transaction();
  try {
    await Submission.update(
      { name, email, phone, eventType, eventDate, eventLocation, message },
      { where: { id: submissionId } }
    );
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
  }
}
