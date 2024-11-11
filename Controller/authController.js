
import { compareSync, hashSync } from "bcrypt";
import prisma from "../DB/db.config.js";
import jwt from 'jsonwebtoken';


export const signup=async (req,res)=>{
    const {name,email,password}=req.body;
    try {
        //check user exist write prisma query to check email in table 
        let user=await prisma.users.findUnique({where:{email}})
        console.log(user);
        if(user){
            return res.status(400).json({
                 message:"User Alerady Exists"
            })
        }
        //------------------------------------------------------------
        const newUser=await prisma.users.create({
            data:{
                name,
                email,
                password:hashSync(password,11)
            }
        })
        return res.status(200).json({
                data:newUser,
                message:"User Created Successfully..."
        })
    
    } catch (error) {
        return res.status(400).json({
                message:error
        })
    }   
}
 export const login=async (req,res)=>{
    const {email,password}=req.body;
    //----------------------------------
    const checkuser=await prisma.users.findFirst({where:{email}})
    console.log(checkuser);
    if(!checkuser){
        return res.status(400).json({
            message:"User Does not exists"
        })
    }
    if(!email||!password){
        return res.status(400).json({
            message:"Fields are requireds"
        })
    }
    //compare password------------------
    if(!compareSync(password,checkuser.password)){
        return res.status(400).json({
            message:"Please Check Email and Password"
        })
    }
    //genrate token----------------------
    const token=jwt.sign({
        userId:checkuser.id
    },"Secratekeyhere");

    return res.status(200).json({
        name:checkuser.name,
        email:checkuser.email,
        token,
        message:"Success"
    })
   
 }

 export const me=async (req,res)=>{
        res.json(req.user);
 }