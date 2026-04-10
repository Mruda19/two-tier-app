import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 3000;

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API endpoint
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Backend 👋",
    status: "success"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});