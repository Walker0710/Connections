const User = require('../models/User');
const { gameData } = require('./gameController'); 

exports.updateStats = async (req, res) => {
    const userId = req.user.id;
    const { win } = req.body;

    try {
        const user = await User.findById(userId);

        user.completed += 1;
        user.lastSolved = new Date();

        if (win) {
            user.wins += 1;
            user.streak += 1;
            if (user.streak > user.maxStreak) {
                user.maxStreak = user.streak;
            }
        } else {
            user.streak = 1;
        }

        await user.save();

        res.json({
            streak: user.streak,
            maxStreak: user.maxStreak,
            completed: user.completed,
            wins: user.wins
        });
    } catch (error) {
        console.error('Error updating stats:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.checkCanPlay = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        const today = new Date().setHours(0, 0, 0, 0); // Set time to midnight

        if (user.lastSolved && new Date(user.lastSolved).setHours(0, 0, 0, 0) === today) {
            // User has already played today, return the solution grid
            return res.status(200).json({
                canPlay: false,
                words: gameData.words, // Unshuffled words (the solution grid)
                groups: gameData.groups
            });
        } else {
            // User can play the game today
            return res.status(200).json({ canPlay: true });
        }
    } catch (error) {
        console.error('Error checking play status:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};
