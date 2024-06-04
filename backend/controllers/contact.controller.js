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
  console.log(
    req.body,
    "bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
  );
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
  console.log("Submission ID: ", submissionId);
  console.log("currentUserId: ", currentUserId);
  res.send(JSON.stringify({ id: submissionId }));
}

// import { getAllUsers } from "../services/user.service.js";

// export async function getUsers(req, res) {
//   const users = await getAllUsers();

//   res.send(JSON.stringify(users));
// }
