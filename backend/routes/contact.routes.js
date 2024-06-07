import { Router } from "express";

import {
  addSubmission,
  getSubmissions,
  deleteSubmission,
  editSubmission,
} from "../controllers/contact.controller.js";

const router = Router();

router.post("/", addSubmission);
router.get("/", getSubmissions);
router.delete("/", deleteSubmission);
router.put("/", editSubmission);

export default router;
