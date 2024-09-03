// src/organizers/OrganizerCard.js
import React from 'react';
import './OrganizerCard.scss';

const OrganizerCard = ({ name, position, photo }) => (
  <div className="organizer-card">
    <img src={photo} alt={name} />
    <h4>{name}</h4>
    {position && <p>{position}</p>}
  </div>
);

export default OrganizerCard;
