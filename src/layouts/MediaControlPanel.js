import styled from "@emotion/styled";
import React, { useContext } from "react";
import useMusicPlayer from "../components/useMusicPlayer";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { ThemeContext } from "../context/ThemeContext";
import { keyframes } from "@emotion/react";

function MediaControlPanel() {
  const { theme } = useContext(ThemeContext);

  const GradientBG = keyframes`
  0% {
    background: #ee6055;
  }
  25% {
    background: #60d394;
  }
  50% {
    background: #aaf683;
  }
  75% {
    background: #ffd97d;
  }
  100% {
    background: #ff9b85;
  }
  `;
  const StylePannel = styled("div")({
    display: "flex",
    flexDirection: "row",
    position: "relative",
    width: "100%",
  });

  const StyledChoosenSong = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "1px 3px 23px -6px rgba(0,0,0,0.87)",

    background: "#dff9fb",
    height: "10px",
    width: "110%",
    border: "3px solid #dff9fb",
    padding: "10px",
    margin: "5px 0",
    color: theme.isLightTheme ? "" : "black",

    animation: `${GradientBG} 10s infinite alternate `,
  });

  const StyleButton = styled("div")({
    backgroundColor: theme.isLightTheme ? "" : "white",
    color: "rgba(28, 110, 164, 0.75)",
    padding: "5px",
    margin: "0 auto",
    border: "2px solid rgba(28, 110, 164, 0.75)",
    borderRadius: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#dff9fb",
    },
  });

  const {
    currentTrackName,
    isPlaying,
    togglePlay,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  return (
    <>
      <StyledChoosenSong>
        {isPlaying ? currentTrackName : "Play your song"}
      </StyledChoosenSong>
      <StylePannel>
        <StyleButton onClick={playPreviousTrack}>
          <ArrowLeftIcon />
        </StyleButton>
        <StyleButton onClick={togglePlay}>
          {isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}
        </StyleButton>
        <StyleButton onClick={playNextTrack}>
          <ArrowRightIcon />
        </StyleButton>
      </StylePannel>
    </>
  );
}

export default MediaControlPanel;
