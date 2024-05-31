import { Router } from "express";

import { addUser } from "../controllers/user.controller.js";
import { getUsers } from "../controllers/user.controller.js";

const router = Router();

router.post("/", addUser);
router.get("/", getUsers);

export default router;
