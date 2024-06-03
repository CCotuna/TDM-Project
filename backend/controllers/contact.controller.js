import { createSubmission } from "../services/contact.service.js";

export async function addSubmission(req, res) {
  const {
    name,
    email,
    phone,
    eventType,
    eventDate,
    eventLocation,
    message,
    currentUserId,
  } = req.body;
  console.log(req.body);
  if (!email) {
    throw new Error("Email is required");
  }
  if (!phone) {
    throw new Error("Phone is required");
  }
  const submissionId = await createSubmission(
    name,
    email,
    phone,
    eventType,
    eventDate,
    eventLocation,
    message,
    currentUserId
  );
  res.send(JSON.stringify({ id: submissionId }));
}

// import { getAllUsers } from "../services/user.service.js";

// export async function getUsers(req, res) {
//   const users = await getAllUsers();

//   res.send(JSON.stringify(users));
// }
