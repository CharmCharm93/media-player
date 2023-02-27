import { useContext } from "react";
import { MusicPlayerContext } from "../context/MusicPlayerContext";

const useMusicPlayer = () => {
  const { state, setState } = useContext(MusicPlayerContext);
  const trackList = state.tracks;
  const isPlaying = state.isPlaying;
  const currentTrackIndex = state.currentTrackIndex;
  const currentTrackName =
    currentTrackIndex !== null && trackList[currentTrackIndex].name;

  // Play a specific track
  function playTrack(index) {
    if (index === currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(trackList[index].file);
      state.audioPlayer.play();
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  }

  // Toggle play or pause
  function togglePlay() {
    if (isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState((state) => ({ ...state, isPlaying: !isPlaying }));
  }

  // Play the previous track in the tracks array
  function playPreviousTrack() {
    const newIndex =
      (((currentTrackIndex + -1) % trackList.length) + trackList.length) %
      trackList.length;
    playTrack(newIndex);
  }

  // Play the next track in the tracks array
  function playNextTrack() {
    const newIndex = (currentTrackIndex + 1) % trackList.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName,
    trackList,
    isPlaying,
    currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
