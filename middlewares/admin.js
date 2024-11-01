const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.JWT_ADMIN_SECRET);

  if (decoded) {
    req.adminId = decoded.id;
    next();
  } else {
    res.status(403).json({
      message: "You're not signed in",
    });
  }
}

module.exports = { adminMiddleware };
