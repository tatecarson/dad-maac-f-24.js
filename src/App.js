import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Header from './components/Header';
import Exhibit from './components/Exhibit';
import './styles.css';

const exhibits = [
  {
    title: "Owen's Rock Album: Gecker",
    description: "Gecker is the 3rd independently released project by rock duo, Gecker. The album features 10 pieces composed, produced, mixed, and mastered by Evan Dingman (Guitar, Vocals) and Owen Elsen (Drums, Bass). The project takes inspiration from a plethora of musical influences including Nine Inch Nails, My Bloody Valentine, Alanis Morissette, and Radiohead to name a few.",
    embedType: "spotify",
    embedUrl: "https://open.spotify.com/embed/album/1o3o0DvOb5g9RvA1bVTH6P?utm_source=generator",
    links: [
      { href: 'https://www.youtube.com/@GeckerOfficial', text: 'Watch Music Videos' }
    ]
  },
  {
    title: "Martin Bailey: Complete Me",
    description: "Written by Austin Kaiser and produced by Martin Bailey, 'Complete Me' showcases collaborative musical artistry.",
    embedType: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/5MuK8YXnEQVAnCSMbhH0p4?utm_source=generator",
    links: []
  },
  {
    title: "DAD 222: Beats Project",
    description: "A collection of eight one-minute tracks showcasing student work in beat-making and sampling.",
    embedType: "soundcloud",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tate-carson-1/sets/dad-222-fall-24-sampling-beats-project&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    links: []
  },
  {
    title: "DAD 422: Binaural Project",
    description: "An exploration into binaural audio production and spatial sound design.",
    embedType: "soundcloud",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tate-carson-1/sets/binaural-project&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    links: []
  },
  {
    title: "Video Game Music Collection",
    description: "A curated playlist of original video game music compositions.",
    embedType: "soundcloud",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1906349987&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    links: []
  }
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % exhibits.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + exhibits.length) % exhibits.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers} className="swipe-container">
      <Header />
      <Exhibit {...exhibits[currentIndex]} />
    </div>
  );
};

export default App;
