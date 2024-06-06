import { Router } from "express";

import {
  addSubmission,
  getSubmissions,
  deleteSubmission,
} from "../controllers/contact.controller.js";

const router = Router();

router.post("/", addSubmission);
router.get("/", getSubmissions);
router.delete("/", deleteSubmission);

export default router;
