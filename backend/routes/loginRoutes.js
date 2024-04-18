import { Router } from "express";

const router = Router();

const user = {
  username: "adminAccount",
  password: "pass",
};

let loggedIn = false;

router.post("/", function (req, res) {
  console.log(req.body);
  let User = req.body;
  console.log("USERUL", User);
  if (user.username == User.username && user.password == User.password) {
    loggedIn = true;
  }
  res.send("succesfully logged in");
});

router.post("/LogOut", function (req, res) {
  loggedIn = false;
  res.send("succesfully logged out");
});

export default router;
