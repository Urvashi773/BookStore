import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from 'nodemailer';


import bookRoute from "./route/book.route.js"
import userRoute  from "./route/user.route.js"
import sendmailRoute from "./route/sendmail.route.js"
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI =process.env.mongoDBURI;

// connect to mongoDB
try{
    mongoose.connect(URI,{
         useNewUrlParser:true,
         useUnifiedTopology:true
        
    });
   console.log("connected to mongoDB")
}catch(error){
    console.log("error",error)

}

//defining routes

app.use("/book" , bookRoute)
app.use("/user",userRoute)
app.use('/email',sendmailRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
} )