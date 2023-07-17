const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const secretKey ='rishav';

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    // Extract the token from the Authorization header
    token = authHeader.split(" ")[1];
    jwt.verify(token,secretKey, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
      if (err) {
        res.status(401).json({message:"User is not authorized"});
        throw new Error("User is not authorized");
      }
      req.user = decoded.user;

      // Check if the user has the "admin" role.
      if (decoded.user.role !== "admin") {
        res.status(403).json({message:"Permission denied. User is not an admin."});
        throw new Error("Permission denied. User is not an admin.");
      }

      next();
    });
  } else {
    res.status(401);
    throw new Error("User is not authorized or token is missing");
  }
});

module.exports = validateToken;
