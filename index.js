import express from 'express'
import "dotenv/config"
import router from "./routes/index.js";

const app=express();
const PORT=process.env.PORT||3000;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send('hi');
})

app.use("/api/v1",router);

app.listen(PORT,()=>{
    console.log(`Server run on ${PORT}`);
})