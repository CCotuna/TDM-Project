import { Router } from "express";

const router = Router();

const sessionBookingRecords = [
  {
    id: 1,
    firstname: "Montes Scelerisque",
    lastname: "4.9",
    typeOfShooting: "807",
    subject: "65",
    email: "332",
    phone: "332",
    message: "332",
  },
];

router.get("/", function (req, res) {
  res.send(JSON.stringify(sessionBookingRecords));
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
  sessionBookingRecords.push(req.body);
  res.send("Added date to the database");
});

export default router;
