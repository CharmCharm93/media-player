import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import styled from "@emotion/styled";
import { Typography } from "@mui/material";

function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const StyleToggleBtn = styled("div")({
    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    display: "flex",

    padding: 5,
    border: "1px solid black",
    borderRadius: 30,
    cursor: "pointer",
  });
  return (
    <StyleToggleBtn onClick={toggleTheme}>
      <Typography
        sx={{ textAlign: "center", mr: 1, fontFamily: "Lucida Console" }}
      >
        Mode
      </Typography>
      {theme.isLightTheme ? <Brightness4Icon /> : <Brightness7Icon />}
    </StyleToggleBtn>
  );
}

export default ToggleTheme;
