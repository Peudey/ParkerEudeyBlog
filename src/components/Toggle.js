import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

import MoonIcon from "./icons/moon.svg";
import SunIcon from "./icons/sun.svg";

console.log(MoonIcon);
const ToggleContainer = styled.button`
  background: white;
  border: 2px solid black;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.2rem 0.5rem;
  position: relative;
  top: 1rem;
  width: 3vw;
  min-width: 70px;
  height: 35px;

  img {
    position: relative;
    height: auto;
    width: 35%;
    top: 15%;
    min-width: 10px;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(0rem)" : "translateX(2.5rem)"};
      opacity: ${({ lightTheme }) => (lightTheme ? "100%" : "0%")};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateX(-2.5rem)" : "translateX(0rem)"};
      opacity: ${({ lightTheme }) => (lightTheme ? "0%" : "100%")};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <img src={SunIcon} />
      <img src={MoonIcon} />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
