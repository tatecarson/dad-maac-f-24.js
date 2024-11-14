// src/components/Exhibit.js
import React from 'react';
import './Exhibit.css';

const Exhibit = ({ title, description, embedType, embedUrls = [], links = [] }) => {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      <p>{description}</p>
      {embedType === 'spotify' && embedUrls.map((url, index) => (
        <iframe
          key={index}
          src={url}
          width="300"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      ))}
      {embedType === "soundcloud" && (
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={embedUrls[0]}
        ></iframe>
      )}
      <div className="links">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Exhibit;