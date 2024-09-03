import React from 'react';
import './Organizers.scss';

const organizingCommittee = {
  chiefPatrons: [
    { id: 1, name: "Mr. G G Gulati", position: "Chairman, UGI", photo: "GG.png" },
  ],
  patrons: [
    { id: 2, name: "Dr. Jagdish Gulati", position: "President, UGI", photo: "JG.png" },
    { id: 3, name: "Mr. Satpal Gulati", position: "Vice Chairman, UGI", photo: "SG2.png" },
  ],
  conferenceChair: [
    { id: 4, name: "Prof. K K Malviya", position: "Principal, UIM", photo: "KKM.png" },
  ],
  conveners: [
    { id: 5, name: "Dr. Rohit Kr Vishwakarma", position: "HoD-MBA, UIM", photo: "path/to/photo5.jpg" },
    { id: 6, name: "Dr. Manmohan Mishra", position: "HoD-MCA, UIM", photo: "path/to/photo6.jpg" },
  ],
  coConvener: [
    { id: 7, name: "Dr. Ajay Kumar Yadav", position: "Associate Professor, UIM", photo: "path/to/photo7.jpg" },
  ],
  organizingCommitteeMembers: {
    management: [
      { id: 8, name: "Mr. Prakash Kundnani", photo: "path/to/photo8.jpg" },
      { id: 9, name: "Dr. Anshul Pandey", photo: "path/to/photo9.jpg" },
      { id: 10, name: "Dr. Nidhi Tiwari", photo: "path/to/photo10.jpg" },
      { id: 11, name: "Mr. Rahul Srivastava", photo: "path/to/photo11.jpg" },
      { id: 12, name: "Mr. Atul S. Hermit", photo: "path/to/photo12.jpg" },
      { id: 13, name: "Ms. Humaira Khatoon", photo: "path/to/photo13.jpg" },
      { id: 14, name: "Ms. Akshita Pandey", photo: "path/to/photo14.jpg" },
      { id: 15, name: "Mr. Akshay Peter", photo: "path/to/photo15.jpg" },
      { id: 16, name: "Mr. Arpit Gupta", photo: "path/to/photo16.jpg" },
      { id: 17, name: "Dr. Arpita Gupta", photo: "path/to/photo17.jpg" },
      { id: 18, name: "Ms. Kriti Malviya", photo: "path/to/photo18.jpg" },
      { id: 19, name: "Ms. Nishi Singh", photo: "path/to/photo19.jpg" },
      { id: 20, name: "Ms. Shivangi Yadav", photo: "path/to/photo20.jpg" },
      { id: 21, name: "Mr. Vivek Srivastava", photo: "path/to/photo21.jpg" },
      { id: 22, name: "Dr. Subiya Rehman", photo: "path/to/photo22.jpg" },
    ],
    computerApplication: [
      { id: 23, name: "Mr. Dhananjay Kr Singh", photo: "path/to/photo23.jpg" },
      { id: 24, name: "Mr. Noor Ahmad", photo: "path/to/photo24.jpg" },
      { id: 25, name: "Mr. Ashutosh Pandey", photo: "path/to/photo25.jpg" },
      { id: 26, name: "Mr. Shivam Bhardwaj", photo: "path/to/photo26.jpg" },
    ],
    corporateRelations: [
      { id: 27, name: "Mr. Pranav Kr Singh", photo: "path/to/photo27.jpg" },
    ],
  }
};

const OrganizerCard = ({ name, position, photo }) => (
  <div className="organizer-card">
    <img src={photo} alt={name} />
    <h4>{name}</h4>
    {position && <p>{position}</p>}
  </div>
);

const Organizers = () => {
  return (
    <div className="organizers-container">
      <h2> <span>Organizing</span> Committee</h2>

      <div className="section">
        <h3> <span>Chief</span> Patrons</h3>
        <div className="row">
          {organizingCommittee.chiefPatrons.map((person) => (
            <OrganizerCard key={person.id} name={person.name} position={person.position} photo={person.photo} />
          ))}
        </div>
      </div>

      <div className="section">
        <h3><span>Patrons</span></h3>
        <div className="row">
          {organizingCommittee.patrons.map((person) => (
            <OrganizerCard key={person.id} name={person.name} position={person.position} photo={person.photo} />
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Conference <span>Chair</span> </h3>
        <div className="row">
          {organizingCommittee.conferenceChair.map((person) => (
            <OrganizerCard key={person.id} name={person.name} position={person.position} photo={person.photo} />
          ))}
        </div>
      </div>

      <div className="section">
        <h3><span>Conveners</span></h3>
        <div className="row">
          {organizingCommittee.conveners.map((person) => (
            <OrganizerCard key={person.id} name={person.name} position={person.position} photo={person.photo} />
          ))}
        </div>
      </div>

      <div className="section">
        <h3>co-<span>Convener</span></h3>
        <div className="row">
          {organizingCommittee.coConvener.map((person) => (
            <OrganizerCard key={person.id} name={person.name} position={person.position} photo={person.photo} />
          ))}
        </div>
      </div>

      <div className="section">
        <h3> <span>Organizing</span> Committee Members</h3>
        <div className="subsection">
          <h4>Management</h4>
          <div className="row">
            {organizingCommittee.organizingCommitteeMembers.management.map((person) => (
              <OrganizerCard key={person.id} name={person.name} photo={person.photo} />
            ))}
          </div>
        </div>
        <div className="subsection">
          <h4>Computer <span>Application</span></h4>
          <div className="row">
            {organizingCommittee.organizingCommitteeMembers.computerApplication.map((person) => (
              <OrganizerCard key={person.id} name={person.name} photo={person.photo} />
            ))}
          </div>
        </div>
        <div className="subsection">
          <h4> <span>Corporate</span> Relations</h4>
          <div className="row">
            {organizingCommittee.organizingCommitteeMembers.corporateRelations.map((person) => (
              <OrganizerCard key={person.id} name={person.name} photo={person.photo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
