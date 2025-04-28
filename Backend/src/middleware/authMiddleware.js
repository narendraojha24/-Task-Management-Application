import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // Check if the token is not provided
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user from the database
    const user = await User.findById(decoded.id).select("-password");

    // If user is not found
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Add the user to the request object to be used in the next middleware/route handler
    req.user = user;

    next();
  } catch (error) {
    // Handle expired token
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
