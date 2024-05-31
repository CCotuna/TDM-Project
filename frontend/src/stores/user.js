import { defineStore } from "pinia";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

export const userAuthStore = defineStore("user", {
  state: () => {
    return {
      user: {},
      usersArray: [],
    };
  },
  actions: {
    async fetchUsers() {
      const users = await axios.get("http://localhost:3000/user",)
      console.log(users.data);
      this.usersArray = users.data;
    },
    checkAuth() {
      const storedUser = localStorage.getItem("user");
      if (localStorage.getItem("user")) {
        this.user = JSON.parse(storedUser)
      } else {
        this.user = {username: "nu merge", password: "nu merge"};
      }

      
    },
    login(username, password) {
      this.user.username = username;
      this.user.password = password;

      localStorage.setItem("user", JSON.stringify(this.user));
    },
    logout() {

    },
    async register(username, password) {

      const userId = uuidv4();
      const newUser = { userId, username, password }
      this.user = newUser;

      await axios.post("http://localhost:3000/user", newUser, {
        headers: {
          "Content-Type": "application/json"
        },
      })

    }
  },
});
