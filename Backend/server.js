const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');
const { protect } = require('./middleware/authMiddleware');
const dbConfig = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

dbConfig();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/game', protect, gameRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
