import { defineStore } from "pinia";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

export const userAuthStore = defineStore("user", {
  state: () => {
    return {
      user: {},
      usersArray: [],
      isAuthenticated : false,
    };
  },
  actions: {
    async fetchUsers() {
      const users = await axios.get("http://localhost:3000/user",)
      this.usersArray = users.data;
    },
    checkAuth() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        this.user = JSON.parse(storedUser)
        this.isAuthenticated = true
      } else {
        this.user = {}
        this.isAuthenticated = false
      }
    },
    async login(username, password) {

      await this.fetchUsers();
      const user = this.usersArray.find(user => user.username === username && user.password === password);
      this.usersArray = [];
      if (user) {
        this.user.username = user.username;
        this.user.password = user.password;
        this.user.userId = user.userId;
        this.isAuthenticated = true;
        
      } else {
        this.user = {}
        this.isAuthenticated = false
        
      }
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    logout() {
      this.user = {};
      this.isAuthenticated = false
      localStorage.removeItem("user");
    },
    async register(username, password) {

      const userId = uuidv4();
      const newUser = { userId, username, password }

      await axios.post("http://localhost:3000/user", newUser, {
        headers: {
          "Content-Type": "application/json"
        },
      })

    }
  },
});
