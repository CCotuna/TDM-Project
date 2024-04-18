import { Router } from "express";

const router = Router();

const galleryPhotos = [
  {
    id: 1,
    title: "Photo 1",
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Funny-Random-Wallpaper-1.jpg",
  },
  {
    id: 2,
    title: "Photo 2",
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Funny-Random-Wallpaper-1.jpg",
  },
  {
    id: 3,
    title: "Photo 3",
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Funny-Random-Wallpaper-1.jpg",
  },
  {
    id: 4,
    title: "Photo 4",
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Funny-Random-Wallpaper-1.jpg",
  },
  {
    id: 5,
    title: "Photo 5",
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Funny-Random-Wallpaper-1.jpg",
  },
];

router.get("/", function (req, res) {
  res.send(galleryPhotos);
});

export default router;
