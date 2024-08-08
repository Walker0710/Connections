// src/components/WordList.js
import React from 'react';

const WordList = ({ words, onWordClick }) => {
  return (
    <div className="word-list">
      {words.map((word, index) => (
        <button key={index} onClick={() => onWordClick(word)} className="word-button">
          {word}
        </button>
      ))}
    </div>
  );
};

export default WordList;
