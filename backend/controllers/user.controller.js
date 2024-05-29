import { createUser } from "../services/user.service.js";

export async function addUser(req, res) {
  // LUAREA DATELOR
  const { userId, username, password } = req.body;

  // VERIFICARI
  if (!username) {
    throw new Error("Username is required");
  }

  if (!password) {
    throw new Error("Password is required");
  }

  // LOGICA => SERVICE + REPOSITORTY
  const user = await createTask(userId, username, password);

  // RASPUNS
  res.send(JSON.stringify(user));
}
