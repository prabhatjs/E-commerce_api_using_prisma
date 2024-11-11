import { Router } from "express";
import {addAddress,deleteAddress,listAddress,updateAddress } from "../Controller/userAddressController.js";
import { authmidd } from '../middleware/auth.js';
const router=Router();

router.post("/",authmidd,addAddress);
router.put('/',authmidd,updateAddress);
router.get('/',authmidd,listAddress);
router.delete('/:id',authmidd,deleteAddress);


export default router;