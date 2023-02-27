import React, { useState, createContext } from "react";
import track1 from "../songs/beautiful-time-lapse.mp3";
import track2 from "../songs/cinematic-ambient-piano.mp3";
import track3 from "../songs/slow-motion.mp3";

const MusicPlayerContext = createContext();

const MusicPlayerProvider = ({ children }) => {
  // setState for data
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Beautiful time lapse",
        file: track1,
      },
      {
        name: "Cinematic ambient piano",
        file: track2,
      },
      {
        name: "Slow motion",
        file: track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });

  // return provider
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};
export { MusicPlayerProvider, MusicPlayerContext };
