import Contact from "../models/contactModel.js";

const createEntry = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newEntry = new Contact({ name, email, subject, message });

    await newEntry.save();

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getEntries = async (req, res) => {
  try {
    const entries = await Contact.find();

    res.status(200).json(entries);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { createEntry, getEntries };
