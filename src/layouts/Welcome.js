import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const lineDivKR = keyframes`
0%   { background-color:red; left:20%; top:0px;}
100%  { background-color:yellow; left:80%; top:0px;}
`;

const textPKR = keyframes`
0% {opacity: 0}
100% {opacity: 1}
`;

const LineDiv = styled("div")({
  width: "30px",
  height: "30px",
  backgroundcolor: "transparent",
  position: "relative",
  animation: `${lineDivKR} 3s 1`,
});

const TextWC = styled("div")({
  opacity: 1,
  animation: `${textPKR} 5s 1`,
  textAlign: "center",
});

const StyleFooter = styled("div")({
  position: "absolute",
  width: "100vw",
  bottom: "10%",
  fontFamily: "Lucida Console",
  fontSize: "2rem",
});

export const Welcome = () => {
  return (
    <StyleFooter>
      <TextWC>Have a great ♬ time ♪</TextWC>
      <LineDiv />
    </StyleFooter>
  );
};
