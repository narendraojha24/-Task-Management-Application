import express from "express";
import { registerUser, loginUser, logoutUser, getProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js"; // This is the auth middleware that checks the JWT token

const router = express.Router();

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerUser);

// @route   POST /api/users/login
// @desc    Login a user
// @access  Public
router.post("/login", loginUser);

// @route   POST /api/users/logout
// @desc    Logout a user (clear the token from cookies)
// @access  Private
router.post("/logout", logoutUser);

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get("/profile", protect, getProfile);

export default router;
