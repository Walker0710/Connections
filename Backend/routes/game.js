const express = require('express');
const { getWords, submitGroups } = require('../controllers/gameController');
const router = express.Router();

router.get('/words', getWords);
router.post('/submit', submitGroups);

module.exports = router;
