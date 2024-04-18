import { Router } from "express";

const router = Router();

const testimonialsArray = [
  {
    id: 1,
    firstname: "Montes Scelerisque",
    lastname: "4.9",
    description: "heheheh",
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
