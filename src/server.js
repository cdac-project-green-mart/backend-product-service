import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { envConfig } from "./config/env.config.js";
// import connectDB from "./config/db.js";

// connectDB();
/**
 * Product Service API
 *
 * Basic Express server for Product Service (ecomm).
 * - In-memory product store (for demo)
 * - CRUD endpoints
 * - Health check
 * - JSON body parsing, CORS, helmet, morgan logging
 * - Graceful shutdown
 */

// const app = express();

// // Middleware
// app.use(helmet());
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// //for logging based on environment
// const mode = envConfig.NODE_ENV;
// if (mode === "dev") {
//   app.use(morgan("dev"));
// } else {
//   app.use(morgan("combined"));
// }

// // Simple in-memory store
// let nextId = 3;
// const products = [
//   {
//     id: 1,
//     name: "Sample Product A",
//     price: 9.99,
//     stock: 100,
//     category: "general",
//     description: "",
//   },
//   {
//     id: 2,
//     name: "Sample Product B",
//     price: 19.99,
//     stock: 50,
//     category: "general",
//     description: "",
//   },
// ];

// // Helper
// function findProduct(id) {
//   return products.find((p) => p.id === Number(id));
// }

// // Routes
// app.get("/health", (req, res) =>
//   res.json({ status: "ok", service: "product-service" })
// );

// app.get("/products", (req, res) => {
//   res.json(products);
// });

// app.get("/products/:id", (req, res) => {
//   const p = findProduct(req.params.id);
//   if (!p) return res.status(404).json({ error: "Product not found" });
//   res.json(p);
// });

// app.post("/products", (req, res) => {
//   const {
//     name,
//     price = 0,
//     stock = 0,
//     category = "uncategorized",
//     description = "",
//   } = req.body;
//   if (!name) return res.status(400).json({ error: "Name is required" });

//   const product = {
//     id: nextId++,
//     name,
//     price: Number(price),
//     stock: Number(stock),
//     category,
//     description,
//   };
//   products.push(product);
//   res.status(201).json(product);
// });

// app.put("/products/:id", (req, res) => {
//   const idx = products.findIndex((p) => p.id === Number(req.params.id));
//   if (idx === -1) return res.status(404).json({ error: "Product not found" });

//   const { name, price, stock, category, description } = req.body;
//   const updated = Object.assign(products[idx], {
//     ...(name !== undefined && { name }),
//     ...(price !== undefined && { price: Number(price) }),
//     ...(stock !== undefined && { stock: Number(stock) }),
//     ...(category !== undefined && { category }),
//     ...(description !== undefined && { description }),
//   });

//   res.json(updated);
// });

// app.delete("/products/:id", (req, res) => {
//   const idx = products.findIndex((p) => p.id === Number(req.params.id));
//   if (idx === -1) return res.status(404).json({ error: "Product not found" });
//   const [deleted] = products.splice(idx, 1);
//   res.json(deleted);
// });

// // 404 handler
// app.use((req, res) => res.status(404).json({ error: "Not found" }));

// // Error handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ error: "Internal server error" });
// });

// // Start server
// const PORT = envConfig.PORT || 3000;
// const server = app.listen(PORT, () => {
//   console.log(`Product service listening on port ${PORT}`);
// });

// // Graceful shutdown
// function shutdown() {
//   console.log("Shutting down product service...");
//   server.close(() => {
//     console.log("Server closed.");
//     process.exit(0);
//   });
//   // force exit after timeout
//   setTimeout(() => process.exit(1), 10000);
// }

// process.on("SIGINT", shutdown);
// process.on("SIGTERM", shutdown);

import app from "./app.js";
import connectDB from "./config/db.js";

connectDB();
const PORT = envConfig.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Products service running on port ${PORT}`);
});
