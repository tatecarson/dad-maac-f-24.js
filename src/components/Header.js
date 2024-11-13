// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <div className="header">
    <div className="music-note note1">♪</div>
    <div className="music-note note2">♫</div>
    <div className="music-note note3">♩</div>
    <div className="music-note note4">♬</div>
    <h1>Digital Music Museum</h1>
    <br></br>
    <h2>Swipe for more music!</h2>
  </div>
);

export default Header;