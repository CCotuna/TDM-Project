import { Router } from "express";

import {
  addPost,
  getPosts,
  deletePost,
  editPost,
} from "../controllers/post.controller.js";

const router = Router();

router.post("/", addPost);
router.get("/", getPosts);
router.delete("/", deletePost);
router.put("/", editPost);

export default router;
