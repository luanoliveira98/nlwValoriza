import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";

const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const listUserControllers = new ListUsersController();
router.get("/users", ensureAuthenticated, listUserControllers.handle);

const listUserSendComplimentsController = new ListUserSendComplimentsController();
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);

const listReceiveSendComplimentsController = new ListUserReceiveComplimentsController();
router.get("/users/compliments/receive", ensureAuthenticated, listReceiveSendComplimentsController.handle);

const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);

const createTagController = new CreateTagController();
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);

const listTagsController = new ListTagsController();
router.get("/tags", ensureAuthenticated, listTagsController.handle);

const createComplimentController = new CreateComplimentController();
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

export { router };