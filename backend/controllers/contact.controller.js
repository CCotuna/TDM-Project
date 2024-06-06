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

import { getAllSubmissions } from "../services/contact.service.js";

export async function getSubmissions(req, res) {
  const submissions = await getAllSubmissions();
  res.send(JSON.stringify(submissions));
}

import { deleteOneSubmission } from "../services/contact.service.js";

export async function deleteSubmission(req, res) {
  const { submissionId } = req.body;
  if (!submissionId) {
    throw new Error("Submission ID is required");
  }

  await deleteOneSubmission(submissionId);
  res.send("Submission deleted");
}
