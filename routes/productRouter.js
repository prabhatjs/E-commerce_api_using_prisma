import { Router } from "express";
import {createProduct, updateProduct ,getProductById, getAllProducts, deleteProduct} from "../Controller/productController.js";
import { authmidd } from '../middleware/auth.js';
const router=Router();

router.post("/",authmidd,createProduct);
router.get('/:id',authmidd,getProductById);
router.get('/',authmidd,getAllProducts);
router.put('/:id',authmidd,updateProduct);
router.delete('/:id',authmidd,deleteProduct);


export default router;