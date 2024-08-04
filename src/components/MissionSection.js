import React from 'react';
import './MissionSection.css';
import photo from './random.jpeg'

const MissionSection = () => {
  return (
    
    
      <div>

      <section>
      <div className="mission-text">
        <div className='missionimg'>
        <img src={photo} alt="Sanjeev Singh" />

        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>Welcome to XXXXX, where we redefine the process of finding top-performing college graduates...</p>
          <p> <b>-- Sanjeev Singh, CEO & Founder </b></p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default MissionSection;
