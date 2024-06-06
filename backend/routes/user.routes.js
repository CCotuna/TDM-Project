import { Router } from "express";

import {
  addUser,
  getUsers,
  getUserById,
  deleteUser,
  editUser,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/", addUser);
router.get("/", getUsers);
router.get("/:userId", getUserById);
router.delete("/", deleteUser);
router.put("/", editUser);

export default router;
