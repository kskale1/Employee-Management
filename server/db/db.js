import mongoose from "mongoose";
import dotenv from "dotenv";
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to MongoDB database')
    } catch(error) {
        console.log("Error connecting to MongoDB database:", error)
    }
}

export default connectToDatabase