// src/speakers/Speakers.js
import React from 'react';
import SpeakerCard from './SpeakerCard';
import './Speakers.scss';

const speakers = [
  { id: 1, name: "Prof. Dr. Deep Bahadur Rawal ", position: "Dean, Graduate School of Management Mid-West University, Surkhet Nepal", photo: "Guest1.png"},
  { id: 2, name: "Dr. Madhvendra Misra", position: "Professor DOMS IIIT Allahabad, Prayagraj", photo: "Guest2.png" },
  { id: 3, name: "Dr. Ravindra Tripathi", position: "Associate Professor & Head Department of Humanities and Social Sciences MNNIT, Allahabad", photo: "Guest3.png" },
  { id: 4, name: "Prof. Vinod Kumar Pandey", position: "Dean Faculty of Commerce Nehru Gram Bharati Deemed to be University Kotwa, Jamunipur, Prayagraj", photo: "Guest4.png" },
  { id: 5, name: "Dr. Akhilesh Chandra Pandey", position: "Assistant Professor Department of Commerce & Business Administration University of Allahabad", photo: "Guest5.png" },
  { id: 6, name: "Mr.  Ashish Misra", position: "CEO, EXCAIN LLP Lucknow", photo: "Guest7.png" },
  { id: 7, name: "Dr. Mohammed Anam Akhtar", position: "Chairperson BBA Program IMT Business School Dubai International Academic City Dubai (UAE)", photo: "Guest8.png" },
  { id: 8, name: "Mr. Pushpendra Singh", position: "Test Manager Atos Syntel Towson, Maryland US", photo: "Guest9.png" },
  { id: 9, name: "Mr. Khurram Ajaz Khan", position: "Research Analyst Token Ventures S. R. O Prague Czech Republic", photo: "Guest11.png" },
  { id: 10, name: "Dr. Rubina Romanello", position: "University of Trieste (UniTS) ", photo: "Guest10.png" },
  { id: 11, name: "Dr. Pooja Chaturvedi", position: "Associate Professor Deputy Registrar Academics and Programme Executive Institute of Training Development and Policy Research -AGU Rabindranath Tagore University, Bhopal", photo: "Guest6.png" },
  { id: 12, name: "Speaker 12", position: "Position 12", photo: "speaker.png" },
];

const Speakers = () => {
  return (
    <div className="main">
        <h2> <span>Keynote</span> Speakers</h2>
    <div className="speakers-container">
      <div className="row">
        {speakers.slice(0, 5).map((speaker) => (
          <SpeakerCard key={speaker.id} name={speaker.name} position={speaker.position} photo={speaker.photo} />
        ))}
      </div>
      <div className="row">
        {speakers.slice(5, 9).map((speaker) => (
          <SpeakerCard key={speaker.id} name={speaker.name} position={speaker.position} photo={speaker.photo} />
        ))}
      </div>
      <div className="row">
        {speakers.slice(9, 11).map((speaker) => (
          <SpeakerCard key={speaker.id} name={speaker.name} position={speaker.position} photo={speaker.photo} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Speakers;
