import { json } from "express";
import prisma from "../DB/db.config.js"


 export const createProduct=async (req,res)=>{
    const {name,description,price,tags}=req.body;
    try {
        const product=await prisma.products.create({
            data:{
                name,
                description,
                price,
                tags:req.body.tags.join(',')
            }
        })
        return res.status(200).json({
            message:"Product Created"
        });
    } catch (error) {
        return res.status(400).json({
            message:"some errror",
            error:error
        });
    }
 }

    export const updateProduct=async (req,res)=>
    {
        const Id=req.params.id;
        const product =req.body;
       // check id is exist or not in product table
       if(product.tags){
        product.tags=product.tags.join(',');
       }
        const checkProduct=await prisma.products.findUnique({where:{id:+Id}});
        if(!checkProduct){
            return res.status(200).json({
                message:"Product is not in DB",
                status:false
            })
        }
            const updatedData=await prisma.products.update({
                where:{id:+Id},
                data:{name:product.name,description:product.description,tags:product.tags}
            })
            return res.status(200).json({
                message:"Changes Applied"
            });
    }

    export const deleteProduct=async (req,res)=>{
           try {
            const Id=req.params.id;
            console.log(Id);
            const deleteProduct=await prisma.products.delete({where:{id:+Id}});
            console.log(deleteProduct);
            return res.status(200).json({
                message:"You delete successfullu"
            })
           } catch (error) {
            return res.status(400).json({
                message:"Product is not found"
            })
           }
    }

    export const getAllProducts=async (req,res)=>{
        //send count and data count is use for pagination frontend
            try {
                // {
                 //     count:100
                 //     data:[]
                 //     localhost:5000/api/v1/product?skip=5
                // }

                const count=await prisma.products.count();
                console.log(count);
                const products=await prisma.products.findMany({
                    skip: +req.query.skip || 0,
                    take: 5
                })
                console.log(products);
                return res.status(200).json({
                    count,data:products
                })
            } catch (error) {
                return res.status(400).json({
                    message:"Product is not found"
                })
            }
    }

    export const getProductById=async(req,res)=>{
        try {
            const product=await prisma.products.findFirstOrThrow({
                where:{
                    id:+req.params.id
                }
            })
            return res.status(200).json({
                product
            })
        } catch (error) {
            return res.status(400).json({
                message:"Product is not found"
            })
        }
    }