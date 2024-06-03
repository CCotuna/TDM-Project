import { sequelize } from "../db.js";

import { Submission } from "../models/contact.model.js";

// export async function getAllUsers() {
//   return await User.findAll({
//     attributes: ["userId", "username", "password"],
//   });
// }

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
  // const transaction = await sequelize.transaction();

  try {
    const submissionRec = await Submission.create({
      name,
      email,
      phone,
      eventType,
      eventDate,
      eventLocation,
      message,
      currentUserId,
    });
    // await Description.create(
    //   {
    //     text: description,
    //     author,
    //     TaskId: taskRow.id,
    //   },
    //   { transaction }
    // );
    console.log("Submission: ", submissionRec.dataValues);
    return submissionRec.dataValues.id;
  } catch (error) {
    console.log("Error: ", error);
    // await transaction.rollback();
  }

  return "error";
}
