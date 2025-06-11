import React from 'react';
import './FitnessTips.css';

const FitnessTips = () => {
  const tips = [
    {
      title: "🧘‍♀️ Stretch Daily",
      content: "Stretching improves flexibility, reduces muscle tension, and helps prevent injuries.",
    },
    {
      title: "🥦 Eat Clean",
      content: "Focus on whole foods like vegetables, lean proteins, and complex carbs to fuel your body.",
    },
    {
      title: "💧 Stay Hydrated",
      content: "Drink at least 8 glasses of water a day to keep your body functioning at its best.",
    },
    {
      title: "🏋️‍♂️ Strength Training",
      content: "Incorporate strength training 2–3 times a week to build lean muscle and boost metabolism.",
    },
    {
      title: "😴 Prioritize Sleep",
      content: "Getting 7–9 hours of sleep is essential for muscle recovery and mental focus.",
    },
  ];

  return (
    <div className="tips-container">
      <h1>Fitness Tips & Articles</h1>
      <p className="intro">Simple and actionable tips to support your fitness journey.</p>
      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div className="tip-card" key={index}>
            <h3>{tip.title}</h3>
            <p>{tip.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessTips;
