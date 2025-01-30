import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000; // Fallback port if not set

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    email: process.env.EMAIL, // Set this in a .env file
    current_datetime: new Date().toISOString(), // Dynamic timestamp
    github_url: process.env.GITHUB,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
