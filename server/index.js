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
  .catch(err => console.error("MongoDB connection error:", err));

app.post("/registerUser", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ user, msg: "User added." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }});

app.listen(3001, () => {
    console.log("Server running");
});