import { Router } from "express";
import userRouter from "./userRouter.js"
import authRoutes from '../routes/authRouter.js'
import productRouter from "./productRouter.js"
import userAddressRouter from "./userAddresRouter.js"
import cartRouter from "./cartRouter.js";
const  router=Router();

router.use("/",userRouter);
router.use("/auth",authRoutes)
router.use("/product",productRouter)
router.use("/address",userAddressRouter)
router.use('/cart',cartRouter)
export default router;