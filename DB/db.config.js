import {PrismaClient} from "@prisma/client"
import { signupvalidation } from "../Validation/uservalid.js";

const prisma=new PrismaClient({
    log:["query"],
}).$extends({
    query:{
        users:{
            create({args,query}){
                args.data=signupvalidation.parse(args.data)
                return query(args);
            }
        }
    }
})

export default prisma;