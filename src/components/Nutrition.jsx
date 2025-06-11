import React from 'react';
import './Nutrition.css';

const Nutrition = () => {
  return (
    <div className="nutrition-container">
      <h2>Nutrition Tips</h2>
      <ul className="tips-list">
        <li>🍎 Eat more whole foods like fruits and vegetables.</li>
        <li>💧 Stay hydrated — drink 8+ glasses of water daily.</li>
        <li>🥦 Balance protein, carbs, and healthy fats.</li>
        <li>⏱ Avoid skipping meals. Eat every 3–4 hours.</li>
      </ul>
    </div>
  );
};

export default Nutrition;
