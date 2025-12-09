import dotenv from "dotenv";
dotenv.config();

export const envConfig = {
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/products",
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "dev",
};
