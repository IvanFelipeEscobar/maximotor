import mongoose from "mongoose";
import 'dotenv/config'
mongoose.connect(
    process.env.MONGODB_URI! 
    // || 'mongodb://127.0.0.1/maximotor'
)
export const db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongo connection error'))

