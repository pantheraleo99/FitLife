import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>FitLife 🔥</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/workouts">Workouts</Link></li>
      <li><Link to="/nutrition">Nutrition</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/tips">Fitness Tips</Link></li>
      <li><Link to="/bmi">BMI Calculator</Link></li>
      <li><Link to="/quiz">Quiz</Link></li>
      <li><Link to="/trainers">Trainers</Link></li>

    </ul>
  </nav>
);

export default Navbar;

