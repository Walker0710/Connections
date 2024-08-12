const express = require('express');
const { updateStats, checkCanPlay } = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/update-stats', authenticateToken, updateStats);
router.get('/check-can-play', authenticateToken, checkCanPlay);

module.exports = router;
