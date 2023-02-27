import * as React from "react";
import { styled } from "@mui/system";

import MediaControlPanel from "./MediaControlPanel";
import MediaList from "./MediaList";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function MediaContainer() {
  // style for this only
  const Container = styled("div")({
    padding: 15,
    borderRadius: 10,
    border: "1px solid black",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "40vh",
    width: 275,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  });

  // get theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const style = isLightTheme ? light : dark;

  return (
    <>
      <Container style={style}>
        <MediaList />
        <MediaControlPanel />
      </Container>
    </>
  );
}

export default MediaContainer;
