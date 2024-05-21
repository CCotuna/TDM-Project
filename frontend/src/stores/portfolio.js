import { defineStore } from "pinia";
import axios from "axios";

export const portfolioStore = defineStore("portffolio", {
  state: () => {
    return {
      portfolio : [
        {
            id: 1,
            title: "Photo 1",
            url: "https://www.pixelstalk.net/wp-content/uploads/images6/PC-Wallpaper-Anime-Aesthetic-HD-620x342.jpg",
            },
            {
            id: 2,
            title: "Photo 2",
            url: "https://www.pixelstalk.net/wp-content/uploads/images6/PC-Wallpaper-Anime-Aesthetic-HD-620x342.jpg",
            },
            {
            id: 3,
            title: "Photo 3",
            url: "https://www.pixelstalk.net/wp-content/uploads/images6/PC-Wallpaper-Anime-Aesthetic-HD-620x342.jpg",
            },
            {
            id: 4,
            title: "Photo 4",
            url: "https://www.pixelstalk.net/wp-content/uploads/images6/PC-Wallpaper-Anime-Aesthetic-HD-620x342.jpg",
            },
            {
            id: 5,
            title: "Photo 5",
            url: "https://www.pixelstalk.net/wp-content/uploads/images6/PC-Wallpaper-Anime-Aesthetic-HD-620x342.jpg", 
        }
      ],
    };
  }
});
