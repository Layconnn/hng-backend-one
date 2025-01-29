import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    email: process.env.EMAIL, // Set this in a .env file
    current_datetime: new Date().toISOString(),
    github_url: process.env.GITHUB,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
