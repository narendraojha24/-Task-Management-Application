import User from "../models/user.js";
import jwt from "jsonwebtoken";

// Utility function to create JWT Token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: "7d", // token valid for 7 days
    });
  };
  
  
  // @route   POST /api/users/register
  
  export const registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
      }
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const user = await User.create({ name, email, password });
  
      const token = generateToken(user._id);
  
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        .status(201)
        .json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  // @route   POST /api/users/login
  
  export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      const token = generateToken(user._id);
  
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  // @route   POST /api/users/logout
  
  export const logoutUser = (req, res) => {
    res
      .cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
      })
      .status(200)
      .json({ message: "Logged out successfully" });
  };
  
  
  // @route   GET /api/users/profile
 
  export const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(user);
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

