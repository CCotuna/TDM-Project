import { defineStore } from "pinia";
import axios from "axios";

export const userAuthStore = defineStore("user", {
  state: () => {
    return {
      user: {},
      loggedIn: false,
    };
  },
  actions: {
  },
});
