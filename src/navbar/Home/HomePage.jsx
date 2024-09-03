import React from 'react';
import { Link } from 'react-scroll';
import './HomePage.scss';

const images = [
  './uim1.jpg',
  './UGI.jpg',
  './uim3.jpeg',
  // Add more image paths as needed
];

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      timeRemaining: this.calculateTimeRemaining()
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextSlide, 3000); // Change slide every 3 seconds
    this.countdownInterval = setInterval(this.updateCountdown, 1000); // Update countdown every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.countdownInterval);
  }

  nextSlide = () => {
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
    }));
  };

  calculateTimeRemaining = () => {
    const eventDate = new Date('2024-11-22');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeRemaining = {};

    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    } else {
      timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeRemaining;
  };

  updateCountdown = () => {
    this.setState({
      timeRemaining: this.calculateTimeRemaining()
    });
  };

  render() {
    const { currentImageIndex, timeRemaining } = this.state;
    return (
      <div className="home-page">
        <div className="image-slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="text-content">
          <h1>United Institute of Management</h1>
          <h4>Naini, Prayagraj Uttar Pradesh</h4>
          <h4><strong>Presents</strong></h4>
          <h2>Global Innovative Practices in Sustenance of Modern Businesses (2024)</h2>
          <Link to="register" smooth={true} duration={500}>
            <button className="register-button">Register Now</button>
          </Link>
          <div className="countdown">
            <div className="countdown-timer">
              <div className="time-circle">
                <span className="time">{timeRemaining.days}</span>
                <span className="label">Days</span>
              </div>
              <div className="time-circle">
                <span className="time">{timeRemaining.hours}</span>
                <span className="label">Hours</span>
              </div>
              <div className="time-circle">
                <span className="time">{timeRemaining.minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <div className="time-circle">
                <span className="time">{timeRemaining.seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
