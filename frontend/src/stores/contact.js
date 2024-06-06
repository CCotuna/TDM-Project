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
    async sendContactForm(name, email, phone, eventType, eventDate, eventLocation, message, currentUserId) {
        const newSubmission = { name, email, phone, eventType, eventDate, eventLocation, message, currentUserId }
        this.submissions.push(newSubmission)
        await axios.post("http://localhost:3000/contact", newSubmission, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    async fetchSubmissions() {
        const response = await axios.get("http://localhost:3000/contact")
        this.submissions = response.data
    },
    async deleteSubmission(submissionId) {
        this.submissions = this.submissions.filter(submission => submission.id !== submissionId)
        axios.delete("http://localhost:3000/contact", {
            headers: {
                "Content-Type": "application/json",
            },
            data: { submissionId },
        });
    }
  }
});
