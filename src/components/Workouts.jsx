import React from 'react';
import './Workouts.css';
import Navbar from './Navbar';

const Workouts = () => {
  return (
    <div className="workouts-container">
      <h2>Workout Plans</h2>
      <div className="workout-grid">
        <div className="workout-card">
          <h3>Beginner</h3>
          <ul>
            <li>Jumping Jacks – 3×30s</li>
            <li>Bodyweight Squats – 3×15</li>
            <li>Push-ups – 3×10</li>
          </ul>
        </div>
        <div className="workout-card">
          <h3>Intermediate</h3>
          <ul>
            <li>Burpees – 3×12</li>
            <li>Lunges – 3×12/leg</li>
            <li>Push-ups – 4×12</li>
          </ul>
        </div>
        <div className="workout-card">
          <h3>Advanced</h3>
          <ul>
            <li>Pull-ups – 4×10</li>
            <li>Plank – 4×60s</li>
            <li>Sprint Intervals – 5×100m</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
