import { defineStore } from "pinia";
import axios from "axios";

export const usePostsStore = defineStore("blog", {
  state: () => {
    return {
      posts: []
    };
  },
  actions: {
    async fetchPosts() {
      const response = await axios.get("http://localhost:3000/posts");
      this.posts = response.data;
    },
    async addPost(postData) {
        this.posts.push(postData);
        await axios.post("http://localhost:3000/posts", {
            title: postData.title,
            subtitle: postData.subtitle,
            description: postData.description,
            text: postData.text,
            userId: postData.userId
        }, {
            headers: {
            "Content-Type": "application/json"
            }
        });
    },
    async deletePost(postId) {
        this.posts = this.posts.filter(post => post.id !== postId);
        axios.delete("http://localhost:3000/posts", {
            headers: {
            "Content-Type": "application/json",
            },
            data: { postId },
        });
    }

  }
});
