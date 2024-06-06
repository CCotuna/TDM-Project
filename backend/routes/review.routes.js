import { Router } from "express";
import {
  addReview,
  getReviews,
  deleteReview,
  editReview,
} from "../controllers/review.controller.js";

const router = Router();

router.post("/", addReview);
router.get("/", getReviews);
router.delete("/", deleteReview);
router.put("/", editReview);

export default router;
