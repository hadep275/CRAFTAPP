import express from "express";
import Contact from "../models/contactModel.js";
export const contactRouter = express.Router();



contactRouter.post("/", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
  
      const newEntry = new Contact({ name, email, subject, message });
  
      await newEntry.save();
  
      res.status(201).json(newEntry);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
});

contactRouter.get("/", (req, res) => {
  const name = req.body;
  if (name) {
    res.send("Hello World!");
  }
});
