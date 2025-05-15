import React, { useState, useEffect } from 'react';
import './styles.css';

// Import images (place these in your src/images folder)
import facebookIcon from './images/icon-facebook.svg';
import pinterestIcon from './images/icon-pinterest.svg';
import instagramIcon from './images/icon-instagram.svg';
import favicon from './images/favicon-32x32.png';

const LaunchTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Set your launch date here
  const launchDate = new Date('2025-03-24T00:00:00');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate - now;

      if (difference <= 0) {
        // Launch complete - you could redirect or show main page here
        return;
      }

      setTimeLeft({
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Helmet for meta tags and links */}
      <Helmet />

      <main className="container">
        <section className="timer">
          <h1 className="timer__title">WE'RE LAUNCHING SOON</h1>
          
          <ul className="timer__list">
            <li className="timer__list-item">
              <span>{timeLeft.days}</span>DAYS
            </li>
            <li className="timer__list-item">
              <span>{timeLeft.hours}</span>HOURS
            </li>
            <li className="timer__list-item">
              <span>{timeLeft.minutes}</span>MINUTES
            </li>
            <li className="timer__list-item">
              <span>{timeLeft.seconds}</span>SECONDS
            </li>
          </ul>
        </section>

        <section className="social-media">
          {/* <div className="icon-container">
            <img className="social-media__icon" src={facebookIcon} alt="Facebook" />
            <img className="social-media__icon" src={pinterestIcon} alt="Pinterest" />
            <img className="social-media__icon" src={instagramIcon} alt="Instagram" />
          </div> */}

          {/* <div className="attribution">
            Challenge by{' '}
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a href="https://github.com/tonnysei" target="_blank" rel="noopener noreferrer">
              Seif Telmini
            </a>
            .
          </div> */}
        </section>
      </main>

      <div className="background__main"></div>
      <div className="background__mountains"></div>
    </>
  );
};

// Helmet component for head content
const Helmet = () => (
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect"和 rel="icon" type="image/png" sizes="32x32" href={favicon} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&family=Work+Sans:wght@100..900&display=swap"
      rel="stylesheet"
    />
    <title>Frontend Mentor | Launch countdown timer</title>
  </head>
);

export default LaunchTimer;
