import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors";

dotenv.config();

const app = express();

// parse JSON body before route handlers
app.use(express.json());
app.use(cors());
app.use("/notes", notesRoutes)
const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})
