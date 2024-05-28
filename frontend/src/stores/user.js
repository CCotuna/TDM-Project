import { defineStore } from "pinia";
import axios from "axios";

export const userAuthStore = defineStore("user", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
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
  },
});
