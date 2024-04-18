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
  const { editUsername, editPassword } = req.body;

  const newUsername = editUsername._value;
  const newPassword = editPassword._value;

  user = {
    username: newUsername,
    password: newPassword,
  };
  userAccounts.push(user);
  res.send("succesfully edited user");
});

export default router;
