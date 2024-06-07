import { Router } from "express";

import {
  addPhoto,
  getPhotos,
  deletePhoto,
  editPhoto,
} from "../controllers/gallery.controller.js";

const router = Router();

router.post("/", addPhoto);
router.get("/", getPhotos);
router.delete("/", deletePhoto);
router.put("/", editPhoto);

export default router;
