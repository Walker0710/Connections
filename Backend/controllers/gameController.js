const User = require('../models/User');

const gameData = {
    words: [
        "Apple", "Banana", "Cherry", "Grape",
        "Red", "Blue", "Green", "Yellow",
        "Dog", "Cat", "Rabbit", "Horse",
        "Car", "Bike", "Bus", "Train"
    ],
    groups: {
        "Fruits": ["Apple", "Banana", "Cherry", "Grape"],
        "Colors": ["Red", "Blue", "Green", "Yellow"],
        "Animals": ["Dog", "Cat", "Rabbit", "Horse"],
        "Vehicles": ["Car", "Bike", "Bus", "Train"]
    }
};

exports.getGameData = (req, res) => {
    res.json(gameData);
};

exports.gameData = gameData;
// exports.updateStreak = async (req, res) => {
//     try {
//         const user = await User.findById(req.user.userId);
//         const today = new Date().setHours(0, 0, 0, 0);
//         const lastSolved = new Date(user.lastSolved).setHours(0, 0, 0, 0);

//         if (lastSolved < today) {
//             const daysBetween = Math.floor((today - lastSolved) / (1000 * 60 * 60 * 24));
//             if (daysBetween === 1) {
//                 user.streak += 1;
//             } else {
//                 user.streak = 1;
//             }
//             user.lastSolved = new Date();
//             await user.save();
//         }
//         res.json({ streak: user.streak });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// exports.updateCompleted = async (req, res) => {
//     try {
//         const user = await User.findById(req.user.userId);
        
//         user.completed += 1;
//         await user.save();
//         res.json({ completed: user.completed });
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };
