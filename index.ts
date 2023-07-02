import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    data: [],
  });
});

app.get("/add", (req: Request, res: Response) => {
  res.status(200).json({
    data: [],
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
