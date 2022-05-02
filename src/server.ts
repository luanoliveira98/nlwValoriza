import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { throwError } from "./middlewares/throwError";

import { router } from "./routes";

import "./database";

const app = express();

app.use(express.json());
app.use(router);

app.use(throwError);

app.listen(3000, () => console.log("Server is running"));