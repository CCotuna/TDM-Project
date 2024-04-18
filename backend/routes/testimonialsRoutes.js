import { Router } from "express";

const router = Router();

const testimonialsArray = [
  {
    id: 1,
    title: "Hehhe",
    description: "This is a test review",
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
