import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
