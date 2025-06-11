import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FitnessHome from './components/FitnessHome';
import Workouts from './components/Workouts';
import Nutrition from './components/Nutrition';
import BMICalculator from './components/BMICalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FitnessTips from './components/FitnessTips';
import FitnessQuiz from './components/FitnessQuiz';

function App() {
  return (
    <Router>
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Page content changes here */}
      <Routes>
        <Route path="/" element={<FitnessHome />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/bmi" element={<BMICalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/tips" element={<FitnessTips />} />
        <Route path="/quiz" element={<FitnessQuiz />} />

        <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404 - Page Not Found</h2>} />
      </Routes>
      {/* {Adding Footer } */}
      <Footer />
      {/* { Adding Footer } */}
    </Router>
  );
}

export default App;
