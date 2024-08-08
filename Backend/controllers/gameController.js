const Word = require('../models/Word');
const validateGroups = require('../utils/validateGroups');

exports.getWords = async (req, res) => {
  try {
    const words = await Word.find({});
    res.json(words);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching words' });
  }
};

exports.submitGroups = async (req, res) => {
  const { groupedWords } = req.body;
  const isValid = validateGroups(groupedWords);

  if (isValid) {
    res.json({ success: true });
  } else {
    res.status(400).json({ message: 'Invalid groups' });
  }
};
