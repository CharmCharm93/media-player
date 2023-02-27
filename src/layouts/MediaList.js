import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React, { useState } from "react";
import useMusicPlayer from "../components/useMusicPlayer";

function MediaList() {
  const { trackList, playTrack } = useMusicPlayer();
  const [selected, setSelected] = useState("");
  const StyleBox = styled("div")({
    border: "3px solid #dff9fb",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px 0",
    height: "30px",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    transition: "1s",

    "&:hover": {
      border: "3px solid red",
      cursor: "pointer",
    },
  });
  return (
    <Container>
      {trackList.map((track, index) => (
        <StyleBox
          key={index}
          style={{
            borderLeft: index === selected && " 7px outset red",
          }}
          onClick={() => {
            setSelected(index);
            playTrack(index);
          }}
        >
          {track.name}
        </StyleBox>
      ))}
    </Container>
  );
}

export default MediaList;
