import { Router } from "express";

import { addSubmission } from "../controllers/contact.controller.js";

const router = Router();

router.post("/", addSubmission);
// router.get("/", getSubmissions);

export default router;
