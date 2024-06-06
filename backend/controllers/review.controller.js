import { createReview } from "../services/review.service.js";

export async function addReview(req, res) {
  const { title, message, rating, userId } = req.body;
  if (!title) {
    throw new Error("Title is required");
  }
  if (!message) {
    throw new Error("Message is required");
  }
  if (!rating) {
    throw new Error("Rating is required");
  }

  const reviewId = await createReview(title, message, rating, userId);

  res.send(JSON.stringify({ id: reviewId }));
}

import { getAllReviews } from "../services/review.service.js";

export async function getReviews(req, res) {
  const reviews = await getAllReviews();

  res.send(JSON.stringify(reviews));
}

import { deleteOneReview } from "../services/review.service.js";
export async function deleteReview(req, res) {
  const { reviewId } = req.body;
  if (!reviewId) {
    throw new Error("Review ID is required");
  }

  await deleteOneReview(reviewId);
  res.send("Review deleted");
}

import { updateReview } from "../services/review.service.js";
export async function editReview(req, res) {
  // const reviewId = req.body.data.reviewId;
  const { reviewId, title, message, rating } = req.body.data;
  console.log(
    req.body,
    "bodyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
  );
  if (!reviewId) {
    throw new Error("Review ID is required");
  }
  if (!title) {
    throw new Error("Title is required");
  }
  if (!message) {
    throw new Error("Message is required");
  }
  if (!rating) {
    throw new Error("Rating is required");
  }

  await updateReview(reviewId, title, message, rating);
  res.send("Review updated");
}
