import {Router} from 'express'
import {addItemCart,deleteItemFromCart,changeQuantity,getCart} from "../Controller/CartController.js"
import { authmidd } from '../middleware/auth.js';

const cartRouter=Router();

cartRouter.post('/',authmidd,addItemCart)
cartRouter.delete('/:id',authmidd,deleteItemFromCart)
cartRouter.put('/:id',authmidd,changeQuantity);
cartRouter.get("/",authmidd,getCart)

export default cartRouter;