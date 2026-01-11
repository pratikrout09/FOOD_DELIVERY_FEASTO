import mongoose from "mongoose";

export const connectDB = async () =>{
    //await mongoose.connect('mongodb+srv://Feasto:18192021@cluster0.wanruwg.mongodb.net/FOOD_DELIVERY').then(()=>console.log("DB Connected!"));
    await mongoose.connect(`${process.env.MONGODB_URI}/FOOD_DELIVERY`).then(()=>console.log("DB Connected!"));
}