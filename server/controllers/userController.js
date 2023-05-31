import bcrypt from  "bcryptjs"
import generateToken from "../config/generateToken.js";

import User from '../models/userModel.js';
// Create new user
const createUser = async (req, res) => {
    try {
      const { name, username, email, password, } = req.body;

      if (!req.body.name || !req.body.username || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Missing required field' });
      }
  
      // check if username or email already exists
      const existingUsername = await User.findOne({ username });
      if (existingUsername) return res.status(400).json({ message: 'Username already taken, please choose another username' });

      const existingEmail = await User.findOne({ email });
      if (existingEmail) return res.status(400).json({ message: 'User with this email already exists' });
  

      // hash password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      // create user
      const newUser = await User.create({ name, username, email, password : hashedPassword });
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong with server' });
      console.error(error);
    }
  };

// Delete user by id
const deleteUserById = async (req, res) => {
  try {
      let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await User.findByIdAndRemove(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }
};



export { createUser, deleteUserById}
