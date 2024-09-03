// src/speakers/SpeakerCard.js
import React from 'react';
import './SpeakerCard.scss';

const SpeakerCard = ({ name, position, photo }) => {
  return (
    <div className="speaker-card">
      <img src={photo} alt={name} className="speaker-photo" />
      <div className="speaker-info">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;
