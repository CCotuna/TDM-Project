import { defineStore } from "pinia";
import axios from "axios";

export const useContactStore = defineStore("contactSubmissions", {
  state: () => {
    return {
      formData: {},
      submissions: []
    };
  },
  actions: {
    async sendContactForm(name, email, phone, eventType, eventDate, eventLocation, message) {
        const newSubmission = { name, email, phone, eventType, eventDate, eventLocation, message }
        this.submissions.push(newSubmission)

        // await axios.post("http://localhost:3000/contact", newSubmission, {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
    }
  }
});
