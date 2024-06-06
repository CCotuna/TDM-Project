import { Router } from "express";

import {
  addPost,
  getPosts,
  deletePost,
} from "../controllers/post.controller.js";

const router = Router();

router.post("/", addPost);
router.get("/", getPosts);
router.delete("/", deletePost);

export default router;
