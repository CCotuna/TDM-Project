import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    users: [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
    ],
    currentUser: null,
  }),
  actions: {
    login(username, password) {
      const user = this.users.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        this.currentUser = user;
        return true; 
      } else {
        return false; 
      }
    },
    logout() {
      this.currentUser = null;
    },
  },
});
