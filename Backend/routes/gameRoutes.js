const express = require('express');
const { getGameData, updateStreak, updateCompleted } = require('../controllers/gameController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/game-data', getGameData);
// router.post('/update-streak', authenticateToken, updateStreak);
// router.post('/update-completed', authenticateToken, updateCompleted);

module.exports = router;
