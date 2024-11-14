// src/components/LandingPage.js
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page">
    <h1>Welcome to Sound Design Student Music Exhibit</h1>
    <p>Scan the QR code below to explore the site on your mobile device:</p>
    <QRCodeCanvas className="qr-code" value="https://tatecarson.github.io/dad-maac-f-24.js/exhibits" size={256} />
    <p>Music and sound design from DAD Digital Sound Design Students: Jason Kaiser, Martin Bailey, Reiter Bodicker, Abbie Pillen, Owen Elsen, Tavone Keomanyvong, Levi Jaaks, Emmett Brown, David Provance, Karl Lexvold and Orlando Big Eagle</p>
  </div>
);

export default LandingPage;