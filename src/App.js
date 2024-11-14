import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Exhibit from './components/Exhibit';
import './styles.css';

const exhibits = [
  {
    title: "Reiter Boddicker: Warehouse Recording Studio",
    description: "I, Reiter Boddicker, worked at a recording studio in Sioux Falls for my internship. The Warehouse Recording Studio was a great place for me to learn lot about the recording process and work with professional musicians and use professional equipment. Mark (the owner of the studio) taught me a lot about recording and mixing with my time there. These are a few songs that I was able to help with while I was interning.",
    embedType: "spotify",
    embedUrls: [
      "https://open.spotify.com/embed/track/4vhm9pL6Jp0elWpwyUFi0p?utm_source=generator",
      "https://open.spotify.com/embed/track/7oSAYTYj9CRMvXHK9UX6mN?utm_source=generator",
      "https://open.spotify.com/embed/track/3YRE7aAsfqpAw8rMxifd76?utm_source=generator",
      "https://open.spotify.com/embed/track/2SNsjPAEC02SdErYe75Xj2?utm_source=generator"
    ]
  },
  {
    title: "Owen Elsen: Gecker",
    description: "Gecker is the 3rd independently released project by rock duo, Gecker. The album features 10 pieces composed, produced, mixed, and mastered by Evan Dingman (Guitar, Vocals) and Owen Elsen (Drums, Bass). The project takes inspiration from a plethora of musical influences including Nine Inch Nails, My Bloody Valentine, Alanis Morissette, and Radiohead to name a few.",
    embedType: "spotify",
    embedUrls: [
      "https://open.spotify.com/embed/album/1o3o0DvOb5g9RvA1bVTH6P?utm_source=generator"
    ],
    links: [
      { href: 'https://www.youtube.com/@GeckerOfficial', text: 'Watch Music Videos' }
    ]
  },
  {
    title: "Martin Bailey: Complete Me",
    description: "Written by Austin Kaiser and produced by Martin Bailey",
    embedType: "spotify",
    embedUrls: [
      "https://open.spotify.com/embed/track/5MuK8YXnEQVAnCSMbhH0p4?utm_source=generator"
    ],
    links: []
  },
  // {
  //   title: "DAD 222: Beats Project",
  //   description: "A collection of eight one-minute tracks showcasing student work in beat-making and sampling.",
  //   embedType: "soundcloud",
  //   embedUrls: [
  //     "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tate-carson-1/sets/dad-222-fall-24-sampling-beats-project&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  //   ],
  //   links: []
  // },
  {
    title: "DAD 422: Binaural Project",
    description: "Abbie Pillen and Hunter Knecht’s projects for DAD 422: Audio Production III are immersive one-minute soundscapes for binaural listening.",
    embedType: "soundcloud",
    embedUrls: [
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tate-carson-1/sets/binaural-project&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ],
    links: []
  },
  {
    title: "Video Game Music Collection",
    description: "This playlist features video game music compositions by Jason Kaiser and Karl Lexvold. Jason’s tracks—Rise of Boudica, Crows of Teutoburg, and The Migration—were created for an Age of Empires 2 mod.  Karl’s piece, Unto Thee…, originally composed for a Dungeons & Dragons campaign, serves as energetic combat music.",
    embedType: "soundcloud",
    embedUrls: [
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1906349987&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ],
    links: [
      {href: 'https://open.spotify.com/artist/2gSf3TWoq2FGlK3IKiR4JN?si=Imz8kmz1R9ez_2tjpWwcYg', text: "Listen to Jason Kaiser's music on Spotify"}
    ]
  }, 
  {
    title: "Abbie Pillen: Village Sound Walk",
    description: "My chosen environment for my soundwalk was supposed to be a cobblestone road in the middle of an open field that eventually leads to a small village. The narration of this soundwalk was supposed to be you, the listener, walking on this cobblestone path into the village, where you eventually enter your cottage and fall asleep listening to the hustle and bustle of the busy village. In my opinion, I feel like this was a little more difficult than having my setting be in a busy, modern day city. With my setting, I wasn’t able to use sounds such as cars, bicycles, trains, etc. Figuring out what sounds you might hear in an ancient village was a little bit difficult to come up with. I think I got there in the end, though.",
    embedType: "soundcloud",
    embedUrls: [
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1958379711&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ],
    links: []
  }
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledExhibits, setShuffledExhibits] = useState([]);

  useEffect(() => {
    setShuffledExhibits(shuffleArray([...exhibits]));
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledExhibits.length),
    onSwipedRight: () => setCurrentIndex((prevIndex) => (prevIndex - 1 + shuffledExhibits.length) % shuffledExhibits.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers} className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/exhibits" element={
          <div>
            <Header />
            <Exhibit {...shuffledExhibits[currentIndex]} />
          </div>
        } />
      </Routes>
    </div>
  );
};

export default App;
