// src/components/LandingPage.js
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page">
    <h1>Welcome to Digital Music Museum</h1>
    <p>Scan the QR code below to explore the site on your mobile device:</p>
    <QRCodeCanvas className="qr-code" value="https://tatecarson.github.io/dad-maac-f-24.js/exhibits" size={256} />
  </div>
);

export default LandingPage;