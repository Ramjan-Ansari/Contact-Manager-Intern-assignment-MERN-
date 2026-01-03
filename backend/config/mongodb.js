import mongoose from "mongoose";

const connetDB = async () => {
    mongoose.connection.on('connected', ()=>{
        console.log("mongodb connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/contactDB`)
}

export default connetDB;