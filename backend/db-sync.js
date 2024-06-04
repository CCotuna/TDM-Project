import { sequelize } from "./db.js";

import { User } from "./models/user.model.js";

sequelize.sync({ force: true }).then(() => {
  console.log("FINISHED SUCCESS");
  process.exit(0);
});
