import { Router } from "express";

const router = Router();

const testimonialsArray = [
  {
    id: 1,
    title: "Great photo",
    description: "This was a great photo",
    rating: 4,
  },
  {
    id: 2,
    title: "Awesome shot",
    description: "This was the best photo I've ever taken",
    rating: 5,
  },
  {
    id: 3,
    title: "Fantastic",
    description: "This was a fantastic photo",
    rating: 5,
  },
  {
    id: 4,
    title: "Amazing",
    description: "This was an amazing photo",
    rating: 5,
  },
  {
    id: 5,
    title: "Incredible",
    description: "This was an incredible photo",
    rating: 5,
  },
  {
    id: 6,
    title: "Unbelievable",
    description: "This was an unbelievable photo",
    rating: 5,
  },
  {
    id: 7,
    title: "Unreal",
    description: "This was an unreal photo",
    rating: 5,
  },
  {
    id: 8,
    title: "Mind-blowing",
    description: "This was a mind-blowing photo",
    rating: 5,
  },
  {
    id: 9,
    title: "Jaw-dropping",
    description: "This was a jaw-dropping photo",
    rating: 5,
  },
  {
    id: 10,
    title: "Spectacular",
    description: "This was a spectacular photo",
    rating: 5,
  },
  {
    id: 11,
    title: "Stunning",
    description: "This was a stunning photo",
    rating: 5,
  },
  {
    id: 12,
    title: "Breathtaking",
    description: "This was a breathtaking photo",
    rating: 5,
  },
  {
    id: 13,
    title: "Impressive",
    description: "This was an impressive photo",
    rating: 5,
  },
  {
    id: 14,
    title: "Magnificent",
    description: "This was a magnificent photo",
    rating: 5,
  },
  {
    id: 15,
    title: "Wonderful",
    description: "This was a wonderful photo",
    rating: 5,
  },
  {
    id: 16,
    title: "Excellent",
    description: "This was an excellent photo",
    rating: 5,
  },
  {
    id: 17,
    title: "Superb",
    description: "This was a superb photo",
    rating: 5,
  },
  {
    id: 18,
    title: "Outstanding",
    description: "This was an outstanding photo",
    rating: 5,
  },
  {
    id: 19,
    title: "Marvellous",
    description: "This was a marvellous photo",
    rating: 5,
  },
  {
    id: 20,
    title: "Terrific",
    description: "This was a terrific photo",
    rating: 5,
  },
];

router.get("/", function (req, res) {
  res.send(JSON.stringify(testimonialsArray));
});

router.post("/", function (req, res) {
  testimonialsArray.push(req.body);
  console.log(testimonialsArray);
  res.send("Added another review to the database");
});

router.delete("/", (req, res) => {
  const { testimonialId } = req.body;

  const testimonialIndex = testimonialsArray.findIndex(
    (testimonial) => testimonial.id === testimonialId
  );
  testimonialsArray.splice(testimonialIndex, 1);
  res.send("Deleted review from database");
});

export default router;
