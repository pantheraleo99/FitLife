import React, { useState } from 'react';
import FitnessQuiz from './FitnessQuiz';import { Link } from 'react-router-dom';
import './FitnessHome.css'; // Make sure this file exists and is linked
import Testimonials from './Testimonials'; // Already imported
import Trainers from './Trainers';


const FitnessHome = () => {

  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="home-container">
      {/* Banner Section */}
      <section className="banner">
        <img
          src="https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?w=1500"
          alt="Fitness Banner"
        />
        <div className="banner-text">
          <h1>Train Hard, Stay Fit</h1>
          <p>Your fitness journey starts here.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h3>💪 Workouts</h3>
          <p>Explore full-body routines designed by experts.</p>
          <Link to="/workouts">Start Training</Link>
        </div>
        <div className="feature-card">
          <h3>🥗 Nutrition</h3>
          <p>Get personalized meal plans & tips.</p>
          <Link to="/nutrition">Eat Smart</Link>
        </div>
        <div className="feature-card">
          <h3>📊 BMI Calculator</h3>
          <p>Know your body better with BMI tracking.</p>
          <Link to="/bmi">Check Now</Link>
        </div>
      </section>


{/* Trainers + Video Section */}
<section className="trainer-video-section">
  <h2 >💪 Meet Our Trainers & Try a Quick Workout</h2>
  <div className="trainer-video-grid">

    {/* Left - Trainers */}
    <div className="trainers-list">
      <div className="trainer-card">
        <img src="https://cbx-prod.b-cdn.net/COLOURBOX61711484.jpg?height=800&quality=70&width=800" alt="Alex Johnson" />
        <h3>Alex Johnson</h3>
        <p><strong>Strength & Conditioning</strong></p>
        <p>Helping clients get strong & stay motivated for 8+ years.</p>
      </div>
      <div className="trainer-card">
        <img src="https://i.pinimg.com/736x/4e/80/73/4e80730544b3b3d9d94332b96be2f486.jpg" alt="Maria Lopez" />
        <h3>Maria Lopez</h3>
        <p><strong>Yoga & Flexibility</strong></p>
        <p>Specialist in mobility, posture & mental relaxation training.</p>
      </div>
    </div>

    {/* Right - Video */}
    <div className="video-box">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/UBMk30rjy0o"
          title="5 Minute Full Body Workout"
          allowFullScreen
        ></iframe>
      </div>
      <p>🔥 Follow this energizing 5-minute fitness blast!</p>
    </div>

  </div>
</section>



{/* 
      <section className="video-highlight">
        <h2>Quick 5‑Minute Workout</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/exXly1KGEgM"
            title="5 MIN FULL BODY Workout"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <Trainers/> */}

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Transform?</h2>
        <p>Join us now and start your fitness journey today.</p>
        <Link to="/contact" className="cta-button">Contact Shivam Meghwal</Link>
      </section>

      {/* Quiz Section */}
      <section className="home-quiz-toggle">
        <button className="cta-button" onClick={() => setShowQuiz(!showQuiz)}>
          {showQuiz ? "Hide Quiz" : "Take the Fitness Quiz"}
        </button>
        {showQuiz && <FitnessQuiz />}
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      <section className="video-highlight"> … </section>

    </div>
  );
};

export default FitnessHome;
