import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGO_URL;
console.log(connectionString);
export const db = await mongoose.connect(connectionString)
    .catch((error) => console.log("Connection failed"));

