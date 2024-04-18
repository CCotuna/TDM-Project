import { Router } from "express";

const router = Router();

let user = {
  username: "adminAccount",
  password: "pass",
};

const userAccounts = [user];

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
    res.send("succesfully logged in");
  } else {
    res.status(401).send("Unauthorized: Incorrect username or password");
  }
});

router.post("/logout", function (req, res) {
  loggedIn = false;
  res.send("succesfully logged out");
});

router.put("/editUser", function (req, res) {
  console.log(req.body);
  user = req.body;
  userAccounts.push(user);
  res.send("succesfully edited user");
});

export default router;
