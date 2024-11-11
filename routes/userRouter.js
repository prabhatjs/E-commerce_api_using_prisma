import { Router } from "express";
import { createUser } from "../Controller/userController.js";
const router=Router();

router.post("/",createUser);

export default router;