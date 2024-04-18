import { Router } from "express";

const router = Router();

const user = {
  username: "adminAccount",
  password: "pass",
};

let loggedIn = false;

router.get("/", function (req, res) {
  res.send(JSON.stringify(user));
});

router.get("/login", function (req, res) {
  res.send(loggedIn);
});

router.post("/login", function (req, res) {
  console.log(req.body);
  let User = req.body;
  console.log("USERUL", User);
  if (user.username == User.username && user.password == User.password) {
    loggedIn = true;
  }
  res.send("succesfully logged in");
});

router.post("/logout", function (req, res) {
  loggedIn = false;
  res.send("succesfully logged out");
});

export default router;
