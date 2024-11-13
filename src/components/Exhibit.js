// src/components/Exhibit.js
import React from 'react';
import './Exhibit.css';

const Exhibit = ({ title, description, embedType, embedUrl, links }) => (
  <div className="exhibit">

    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
      {embedType === "spotify" && (
        <iframe
          style={{ borderRadius: '12px' }}
          src={embedUrl}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
      {embedType === "soundcloud" && (
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedUrl}
        ></iframe>
      )}
      <div>
        {links.map((link, index) => (
          <a key={index} href={link.href} className="link" target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Exhibit;