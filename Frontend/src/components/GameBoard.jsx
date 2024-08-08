import React, { useContext, useEffect } from 'react';
import { GameContext } from '../context/GameContext';
import Word from './Word';
import '../styles/GameBoard.css';

const GameBoard = () => {
  const { words, fetchWords, handleWordClick } = useContext(GameContext);

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div className="game-board">
      {words.map(word => (
        <Word key={word} word={word} onClick={() => handleWordClick(word)} />
      ))}
    </div>
  );
};

export default GameBoard;
