import { defineStore } from "pinia";
import axios from "axios";

export const useGalleryStore = defineStore("gallery", {
  state: () => {
    return {
      gallery: []
    };
  },
  actions: {
   async fetchGallery() {
       const response = await axios.get("http://localhost:3000/gallery")
       this.gallery = response.data
   },
    async addImage(image) {
         this.gallery.push(image)
         await axios.post("http://localhost:3000/gallery", {
              title: image.title,
              url: image.url,
              description: image.description,
              userId: image.userId
         }, {
              headers: {
                "Content-Type": "application/json"
              }
         })
    },
    async deleteImage(imageId) {
        this.gallery = this.gallery.filter(image => image.id !== imageId)
        axios.delete("http://localhost:3000/gallery", {
          headers: {
            "Content-Type": "application/json",
          },
          data: { imageId },
        });
    },
    async editImage(imageId, title, url) {
      const imageIndex = this.gallery.findIndex(image => image.id === imageId);
      this.gallery[imageIndex].title = title;
      this.gallery[imageIndex].url = url;

      axios.put("http://localhost:3000/gallery", {
        headers: {
          "Content-Type": "application/json",
        },
        data: { imageId, title, url},
      });
    }
  }
});
