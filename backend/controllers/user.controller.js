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

import { deleteOneUser } from "../services/user.service.js";

export async function deleteUser(req, res) {
  const { userId } = req.body;
  if (!userId) {
    throw new Error("User ID is required");
  }

  await deleteOneUser(userId.id);
  res.send("User deleted");
}

import { updateUser } from "../services/user.service.js";

export async function editUser(req, res) {
  const { userId, username, password } = req.body;
  if (!userId) {
    throw new Error("User ID is required");
  }
  if (!username) {
    throw new Error("Username is required");
  }
  if (!password) {
    throw new Error("Password is required");
  }

  await updateUser(userId, username, password);
  res.send("User updated");
}

import { findUserById } from "../services/user.service.js";
export async function getUserById(req, res) {
  try {
    const { userId } = req.params;
    if (!userId) {
      throw new Error("User ID is required");
    }

    const user = await findUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
