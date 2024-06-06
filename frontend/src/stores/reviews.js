import { defineStore } from "pinia";
import axios from "axios";

export const useReviewsStore = defineStore("reviews", {
  state: () => {
    return {
      reviews: []
    };
  },
  actions: {
    async fetchReviews() {
        const response = await axios.get("http://localhost:3000/reviews")
        this.reviews = response.data
    },
    async addReview(review) {
        this.reviews.push(review)
        await axios.post("http://localhost:3000/reviews", {
            title: review.title,
            message: review.message,
            rating: review.rating,
            userId: review.userId
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    async deleteReview(reviewId) {
        this.reviews = this.reviews.filter(review => review.id !== reviewId)
        axios.delete("http://localhost:3000/reviews", {
          headers: {
            "Content-Type": "application/json",
          },
          data: { reviewId },
        });
    },
    async editReview(reviewId, title, message, rating) {
      const reviewIndex = this.reviews.findIndex(review => review.id === reviewId);
      this.reviews[reviewIndex].title = title;
      this.reviews[reviewIndex].message = message;
      this.reviews[reviewIndex].rating = rating;

      console.log(reviewId, "review id in pinia")
      axios.put("http://localhost:3000/reviews", {
        headers: {
          "Content-Type": "application/json",
        },
        data: { reviewId, title, message, rating},
      });
    }
  }
});
