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
];

router.get("/", function (req, res) {
  res.send(JSON.stringify(testimonialsArray));
});

// router.delete("/", (req, res) => {
//   const { productId } = req.body;

//   const productIndex = products.findIndex(
//     (product) => product.id === productId
//   );
//   products.splice(productIndex, 1);
//   res.send("Deleted product from database");
// });

router.post("/", function (req, res) {
  testimonialsArray.push(req.body);
  console.log(testimonialsArray);
  res.send("Added another review to the database");
});

export default router;
