import express from "express";
import User from "../models/userModel.js";
import { createUser, deleteUserById } from "../controllers/userController.js";

export const userRouter = express.Router();
// Get a user by info
userRouter.get("/:id", async (req, res) => {
  // console.log(req.params.id);
  // const users=await User.find()
  // console.log(users);
  const user = await User.findById(req.params.id);
  // console.log(user);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.json(user);
});

//Create a new user
userRouter.post("/", createUser);

// Delete a user by ID
userRouter.delete("/:id", deleteUserById);
