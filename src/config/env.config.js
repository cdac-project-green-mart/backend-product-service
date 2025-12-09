import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/products",
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "dev",
  MONGO_USERNAME: process.env.MONGO_USERNAME || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "password",
};
