// const jwt = require('jsonwebtoken');

// exports.authenticateToken = (req, res, next) => {
//     const token = req.headers['authorization'];
//     if (!token) return res.sendStatus(403);

//     jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     });
// };

const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }

    const token = authHeader.replace('Bearer ', '');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('Authentication Error:', err);
    res.status(401).json({ message: 'Authorization failed' });
  }
};
