// // import express, { json } from "express";
// // import cors from "cors";

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(json());

// // // Test route
// // app.get("/", (req, res) => {
// //   res.send("Backend server is running 🚀");
// // });

// // // Start server
// // app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });
// // server.js
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mysql from "mysql2";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // MySQL connection
// const db = mysql.createConnection();

// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err);
//   } else {
//     console.log("✅ Connected to MySQL Database");
//   }
// });

// // Example route
// app.get("/", (req, res) => {
//   res.send("Backend server is running 🚀");
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
