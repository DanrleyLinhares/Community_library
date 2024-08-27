import { Router } from "express";
import userControllers from "../controller/user.controllers.js";
import { validade, validateUserId } from "../middlewares/validation.middleware.js";
import { userSchema } from "../schema/users.schema.js";

const router = Router();


router.post('/users', validade(userSchema), userControllers.createUserController)

router.get('/users', userControllers.findAllUserController);
router.get('/users/:id', validateUserId ,userControllers.findUserByIdController);
router.patch('/users/:id', validateUserId, userControllers.updateUserController);
router.delete('/users/:id', validateUserId, userControllers.deleteUserController);

export default router;