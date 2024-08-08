// src/components/CategoryGroup.js
import React from 'react';

const CategoryGroup = ({ group, onRemoveWord }) => {
  return (
    <div className="category-group">
      {group.map((word, index) => (
        <span key={index} onClick={() => onRemoveWord(word)} className="grouped-word">
          {word}
        </span>
      ))}
    </div>
  );
};

export default CategoryGroup;
