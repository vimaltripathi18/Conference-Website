import React from 'react';
import './App.scss';
import Navbar from './navbar/Navbar';
import ConferenceInvitation from './Invitation/ConferenceInvitation';
import RegistrationForm from './Registration/RegistrationForm';
import Speakers from './Speakers/speakers'
import ConferenceDetails from './Conference/ConferenceDetails';
import United from './AboutUnited/Uinited'
import HomePage from './navbar/Home/HomePage';
import { Element } from 'react-scroll';
import Organizers from './Organizers/Organizers';
import PaperSubmissionPolicy from './PaperPolicy/PaperSubmissionPolicy';
import ContactUs from './contact/ContactUs';


function App() {
  return (
    <div className="app">
    <Navbar />
    <main className="main-content">
      <Element name="home" className="section-style">
        <HomePage />
      </Element>
      <Element name="invitation" className="section-style">
        <ConferenceInvitation />
      </Element>
     <Element name="conference-details" className="section-style">
        <ConferenceDetails />
      </Element>
      <Element name="paper-policy" className="section-style">
       <PaperSubmissionPolicy/>
      </Element>
      <Element name="about-ugi" className="section-style">
        <United />
      </Element>
      <Element name="speakers" className="section-style">
        <Speakers/>
      </Element>
      <Element name="committee" className="section-style">
        <Organizers/>
      </Element>
      <Element name="contact" className="section-style">
       <ContactUs/>
      </Element>
      <Element name="register" className="section-style">
        <RegistrationForm />
      </Element>
    </main>
  </div>
  );
}

export default App;
