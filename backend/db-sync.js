import { sequelize } from "./db.js";

import { User } from "./models/user.model.js";
import { Submission } from "./models/contact.model.js";
import { Review } from "./models/review.model.js";
import { Post } from "./models/post.model.js";
import { Gallery } from "./models/gallery.model.js";

sequelize.sync({ alter: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
