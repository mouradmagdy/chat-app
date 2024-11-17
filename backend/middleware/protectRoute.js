import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    // have to import cookie parser to be able to do this
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized, you have to login first" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // token expired
    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized, you have to login again" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
