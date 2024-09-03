import React, { useState } from 'react';
import './ConferenceInvitation.scss';

const ConferenceInvitation = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div className="content">
        <h2 className="heading"><span>Invitation</span></h2>
        <h1>Welcome to the International Conference at United Institute of Management, Naini Prayagraj!</h1>
        <hr />
        <p>
          We are thrilled to invite you to the <strong>Global Innovative Practices in Sustenance of Modern Businesses</strong>, a prestigious event bringing together scholars, researchers, and industry professionals from around the globe. This year, the conference will be held at the United Institute of Management in Naini Prayagraj, a premier institution known for its commitment to excellence in education and research.
        </p>
        <p>
          Our conference aims to foster collaboration, innovation, and the exchange of ideas among participants. We have meticulously planned a series of sessions that will address the latest trends, challenges, and opportunities in various fields.
        </p>
        <p>
          Attendees will have the chance to engage with renowned experts, share their research findings, and participate in thought-provoking discussions. Whether you are an academic, a practitioner, or a student, this conference offers something for everyone.
        </p>
        <p>
          We believe that your presence will significantly contribute to the success of the conference and provide you with an enriching experience.
        </p>

        <h2><span>Why</span> to Attend?</h2>
        <ul>
          <li><strong>Engage with Leading Experts:</strong> Participate in keynote speeches and panel discussions led by distinguished speakers and thought leaders.</li>
          <li><strong>Present Your Research:</strong> Showcase your work to an international audience, receive valuable feedback, and collaborate on innovative projects.</li>
          <li><strong>Networking Opportunities:</strong> Connect with peers, establish new collaborations, and expand your professional network.</li>
          <li><strong>Workshops and Tutorials:</strong> Enhance your skills through hands-on sessions conducted by experts in various fields.</li>
        </ul>
        <h2>Event <span>Details</span></h2>
        <ul>
          <li><strong>Dates:</strong> [Insert Date]</li>
          <li><strong>Venue:</strong> United Institute of Management, Naini Prayagraj, India</li>
          <li><strong>Theme:</strong> [Insert Theme of the Conference]</li>
        </ul>
      </div>
    </div>
  );
};

export default ConferenceInvitation;
