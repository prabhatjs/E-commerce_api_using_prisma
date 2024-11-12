import prisma from "../DB/db.config.js"
import {AddressValidation,UpdateUserAddresSchema} from "../Validation/uservalid.js"
import users from '@prisma/client'

export const addAddress=async(req,res)=>{
        AddressValidation.parse(req.body);
        let users;
        const addrees=await prisma.address.create({
            data:{
                ...req.body,
                    userId:req.user.id
            }
        })
        res.status(200).json({
            addrees,
            message:"Create successfully"
        })
}

export const deleteAddress=async(req,res)=>{
try {
    await prisma.addrees.delete({
        where:{
            id:req.params.id      
        } 
    })
    return res.status(200).json({
        message:"Deleted Successfully"
    })} 
    catch (error) {
    return res.status(400).json({
        message:"Address Not Found"
    })}
}

export const listAddress=async(req,res)=>{
    const addres=await prisma.address.findMany({
        where:{
            userId:req.user.id
        }
    })
    return res.status(200).json({
        message:"success",
        data:addres
    })
}
//update User Address..
export const updateAddress=async(req,res)=>{
    const validateddata=UpdateUserAddresSchema.parse(req.body);
    let shipingAddress,billingaddress;
    if(validateddata.defaultshippingaddress){
        try {
            shipingAddress=await prisma.address.findFirstOrThrow({
                where:{
                    id:validateddata.defaultshippingaddress
                }
            })
        } catch (error) {
            return res.status(400).json({
                message:"Address not found",
                error:error
            })
        }
        if(shipingAddress.userId!=req.user.id){
            return res.status(400).json({
                message:"Address not belong to this user"
            })
        }
    }
    if(validateddata.defaultbillingaddress){
        try {
            billingaddress=await prisma.address.findFirstOrThrow({
                where:{
                    id:validateddata.defaultbillingaddress
                }
            })
        } catch (error) {
            return res.status(400).json({
                message:"Address not found",
                error:error
            })
        }
        if(billingaddress.userId!=req.user.id){
            return res.status(400).json({
                message:"Address not belong to this user"
            })
        }
    }
    const updateUser=await prisma.users.update({
        where:{
            id:req.user.id
        },
        data:validateddata
    })
    return res.status(200).json({
        message:"updated Successfull",
        updateUser
    })
}