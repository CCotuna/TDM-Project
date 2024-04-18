import { Router } from "express";

const router = Router();

const galleryPhotos = [
  {
    id: 1,
    title: "Photo 1",
    url: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Photo 2",
    url: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Photo 3",
    url: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Photo 4",
    url: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Photo 5",
    url: "https://via.placeholder.com/150",
  },
];

router.get("/", function (req, res) {
  res.send(galleryPhotos);
});

export default router;
