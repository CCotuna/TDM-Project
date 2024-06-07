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
    async fetchUserById(userId) {
      const user = await axios.get(`http://localhost:3000/user/${userId}`)
      return user.data;
    }
    ,
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
        console.log(user, "user login")
        this.user.username = user.username;
        this.user.password = user.password;
        this.user.id = user.id;
        this.isAuthenticated = true;
        
      } else {
        this.user = {}
        this.isAuthenticated = false
        alert("Invalid username or password")
      }
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    logout() {
      this.user = {};
      this.isAuthenticated = false
      localStorage.removeItem("user");
    },
    async register(username, password) {

      const customId = uuidv4();
      const newUser = { username, password, customId }

      await axios.post("http://localhost:3000/user", newUser, {
        headers: {
          "Content-Type": "application/json"
        },
      })

    },
    deleteUser(userId){

      const userIndex = this.usersArray.findIndex(user => user.id === userId);
      this.usersArray.splice(userIndex, 1);

      axios.delete("http://localhost:3000/user", {
        headers: {
          "Content-Type": "application/json",
        },
        data: { userId },
      });
    },

    editUser(userId, username, password) {
      const userIndex = this.usersArray.findIndex(user => user.id === userId);
      this.usersArray[userIndex].username = username;
      this.usersArray[userIndex].password = password;

      axios.put(
        "http://localhost:3000/user",
        { userId, username, password},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

  },
});
