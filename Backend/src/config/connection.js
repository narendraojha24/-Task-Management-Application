// database/connection.js
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // Remove deprecated options
            // useNewUrlParser: true,   // No longer needed
            // useUnifiedTopology: true, // No longer needed
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit if the connection fails
    }
};
export default connectDb;
