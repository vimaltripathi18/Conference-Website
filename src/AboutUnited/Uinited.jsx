import React from "react";
import './United.scss';

const United = () => {
  return (
    <div className="About">
      <div className="section">
        <div className="inner-section">
          <img src="UGI.jpg" alt="United Group" className="image" />
          <div className="text">
            <h2><span>United</span> Group of Institutions</h2>
            <p>
              The United Group was founded by late <b>Shri Shiv Ram Das Gulati in 1951.</b>
              United Group of Institutions (UGI) has excellence in imparting technical
              and management education services since its inception in 1989. It has
              more than 35 years the group is triumphing with 12 different educational
              Institutions located at Prayagraj and Delhi-NCR regions with 650+ highly
              qualified full-time faculty members and <b>26000+ </b> alumni globally.
            </p>
            <p>
              UGI is committed to providing the best quality education, NBA accredited courses,
              quality recognized by the World Bank with its world-class
              State-of-the-art Infrastructure, remarkable campus placements and robust
              academic ecosystem.
            </p>
            <p>
              The group runs UG, PG and professional courses in diverse areas of
              academic domains of science, technology, engineering, management,
              agriculture, social science, medical science, education, etc. The group
              is empowered with learned academicians, experts, professionals,
              trainers, in order to disseminate knowledge and skills to society
              and nation.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="inner-section">
          <div className="text">
            <h3>About United Institutes <span>of Management</span></h3>
            <p>
              United Institute of Management (UIM), is one of the leading management
              institute of United Group of Institutions, which was <b>established in
              1997</b>, has completed twenty-six glorious years of excellence in
              management education. The institute conducts MBA & MCA programs.
            </p>
            <p>
              It ranks amongst the top Management Institution under Dr. A. P. J Abdul
              Kalam Technical University, Uttar Pradesh. It has been constantly
              molding itself according to the fast-changing business and social
              environment.
            </p>
            <p>
              UIM has constantly endeavored in promoting research activities among the
              faculty members and students in the field of management and IT education
              with the primary aim of enhancing and enriching the quality of
              education.
            </p>
          </div>
          <img src="uim3.jpeg" alt="United Institute of Management" className="image" />
        </div>
      </div>
    </div>
  );
};

export default United;
