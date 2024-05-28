import express from "express";
import bodyParser from "body-parser"; // Import body-parser

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

import authRoutes from "./routes/authRoutes.js";
app.use("/auth", authRoutes);

import galleryRoutes from "./routes/galleryRoutes.js";
app.use("/gallery", galleryRoutes);

import contactRoutes from "./routes/contactRoutes.js";
app.use("/contact", contactRoutes);

import testimonialsRoutes from "./routes/testimonialsRoutes.js";
app.use("/testimonials", testimonialsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
