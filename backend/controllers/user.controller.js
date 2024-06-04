import { createUser } from "../services/user.service.js";

export async function addUser(req, res) {
  const { username, password, customId } = req.body;
  if (!username) {
    throw new Error("Username is required");
  }
  if (!password) {
    throw new Error("Password is required");
  }

  const user = await createUser(username, password, customId);

  res.send(JSON.stringify(user));
}

import { getAllUsers } from "../services/user.service.js";

export async function getUsers(req, res) {
  const users = await getAllUsers();

  res.send(JSON.stringify(users));
}
