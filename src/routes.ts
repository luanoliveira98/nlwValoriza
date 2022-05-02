import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle)

const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);

const createTagController = new CreateTagController();
router.post("/tags", ensureAdmin, createTagController.handle)

export { router };