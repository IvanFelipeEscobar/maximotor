import mongoose from "mongoose";
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1/maximotor'
)
module.exports = mongoose.connection