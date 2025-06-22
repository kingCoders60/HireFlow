import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import resumeRoutes from "./router/resume.routes.js"

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();
app.use('/api/resume',resumeRoutes);

const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Reverse Logistics API running.");
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is live at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err.message);
    process.exit(1);
  });
