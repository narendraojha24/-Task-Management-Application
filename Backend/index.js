// index.js
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDb from "./src/config/connection.js";

dotenv.config({ path: "./.env" });




const PORT = process.env.PORT || 8000;

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(` Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error(" Database connection failed:", err);
    });
