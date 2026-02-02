import express from "express";
import "express-async-errors";
import cors from "cors";

import { routes } from "./routes";
import { errorHandling } from "./middlewares/error-handling";
import uploadConfig from "./configs/upload";

const app = express();

app.use("/uploads", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(
  cors({
    origin: ["http://localhost:5173", "https://refund-application.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use(express.json());

app.use(routes);
app.use(errorHandling);

export { app };
