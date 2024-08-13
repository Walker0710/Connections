const User = require('../models/User');

const gameData = {
    words: [
        "APPLE", "BANANA", "CHERRY", "GRAPE",
        "RED", "BLUE", "GREEN", "YELLOW",
        "DOG", "CAT", "RABBIT", "HORSE",
        "CAR", "BIKE", "BUS", "TRAIN"
    ],
    groups: {
        "Fruits": ["APPLE", "BANANA", "CHERRY", "GRAPE"],
        "Colors": ["RED", "BLUE", "GREEN", "YELLOW"],
        "Animals": ["DOG", "CAT", "RABBIT", "HORSE"],
        "Vehicles": ["CAR", "BIKE", "BUS", "TRAIN"]
    }
};

exports.getGameData = (req, res) => {
    res.json(gameData);
};

exports.gameData = gameData;
