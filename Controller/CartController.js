
import {CartSchema}  from "../Validation/cart_Validation.js"
import prisma from "../DB/db.config.js"
export const addItemCart = async(req,res)=>{
        const validateData=CartSchema.parse(req.body);
        let product;
        try{
            product=await prisma.products.findFirstOrThrow({
                where:{
                    id:validateData.productId
                }
            })
        }catch(error){
            return res.status(400).json({
                message:"Product Not Found"
            })
        }
        const cart=await prisma.cartitems.create({
            data:{
                userId:req.user.id,
                productId:product.id,
                quantity:validateData.quantity
            }
        })
        return res.status(200).json({
            cart
        })
}

export const deleteItemFromCart=async(req,res)=>{
        
}

export const changeQuantity=async (req,res)=>{

}

export const getCart=async (req,res)=>{

}