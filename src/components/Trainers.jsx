import React from 'react';
import './Trainers.css';

const trainers = [
  {
    name: "Alex Johnson",
    specialty: "Strength & Conditioning",
    image: "https://cbx-prod.b-cdn.net/COLOURBOX61711484.jpg?height=800&quality=70&width=800",
    bio: "Certified trainer with 8+ years helping people build muscle & confidence."
  },
  {
    name: "Maria Lopez",
    specialty: "Yoga & Flexibility",
    image: "https://i.pinimg.com/736x/4e/80/73/4e80730544b3b3d9d94332b96be2f486.jpg",
    bio: "Expert in yoga therapy & mobility training for mental & physical health."
  }
];

const Trainers = () => (
  <section className="trainers-section">
    <h2>🏋️ Meet Our Trainers</h2>
    <div className="trainers-grid">
      {trainers.map((trainer, index) => (
        <div key={index} className="trainer-card">
          <img src={trainer.image} alt={trainer.name} />
          <h3>{trainer.name}</h3>
          <p><strong>{trainer.specialty}</strong></p>
          <p>{trainer.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Trainers;
