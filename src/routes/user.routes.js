import { Router } from "express";
import userControllers from "../controller/user.controllers.js";
import { validade } from "../middlewares/validation.middleware.js";
import { userSchema } from "../schema/users.schema.js";

const router = Router();


router.post('/users', validade(userSchema), userControllers.createUserController)

export default router