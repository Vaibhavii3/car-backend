import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access Denied" });

  token = token.startsWith("Bearer ") ? token.slice(7).trim() : token;
  
  try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      next();
  } catch (error) {
      res.status(401).json({ message: "Invalid Token" });
  }
};

export default authMiddleware;
