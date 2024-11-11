 import prisma from "../DB/db.config.js";


export const createUser=async (req,res)=>{
//     const {name,email,password}=req.body;
//     try {
//         const newUser=await prisma.user.create({
//             data:{
//                 name,
//                 email,
//                 password
//             }
//         })
//         return res.status(200).json({
//             status:200,
//                 data:newUser,
//                 message:"User Created Successfully..."
//         })
        
//     } catch (error) {
//         return res.status(400).json({
//                 data:error,
//                 message:"User Created Successfully..."
//         })
//     }
   
}



// // export const createcontact = async (req,res)=>{
// //         const {phonenumber,email,linkedid,linkprecedence,createdat, updatedat, deletedat}=req.body;
// //         const findemailandphone=await prisma.contact.findUnique({
// //                     where:{
// //                        OR:[{email:email},
// //                         {phonenumber:phonenumber},
// //                        ]
// //                     }             
// //         })
// // if(findemailandphone){
// //     return res.json({
// //         status:400,message:"Already Exist"
// //     })
// // }
// //         const newContact=await prisma.contact.create({
// //             data:{
// //                 phonenumber:phonenumber,
// //                 email:email,
// //                 linkedid:linkedid,
// //                 linkprecedence:linkprecedence
// //             }
// //         })
// //         return res.json({
// //             status:200,
// //             data:newContact,
// //             message:"contact Created"
// //         })
// // }
