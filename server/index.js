import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import UserModel from "./Models/UserModel.js";

const app = express();

app.use(express.json());
app.use(cors());

const connectString = "mongodb+srv://aladawi12reem6_db_user:reem123@studystreak.ru3bmvp.mongodb.net/Studystreak?appName=Studystreak";

mongoose.connect(connectString)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.post("")
