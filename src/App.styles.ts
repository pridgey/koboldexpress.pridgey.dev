import styled from "styled-components";
import { generateSideNoise, randomNumInRange } from "./App.functions";
import { fonts } from "./App.fonts";

export const Container = styled.div`
  display: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-image: url("seemless-wood.jpg");
  background-repeat: repeat;
`;

export const SaveButton = styled.button`
  position: fixed;
  top: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  font-size: 30px;
  color: white;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #3f9563;
  padding: 0px;
  padding-bottom: 1px;
  padding-left: 1px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #2c6142;
  }
`;

export const StyledParchment = styled.main`
  background: rgb(242, 230, 215);
  background: linear-gradient(
    22deg,
    rgba(242, 230, 215, 1) 0%,
    rgba(219, 195, 162, 1) 35%,
    rgba(242, 230, 215, 1) 100%
  );
  padding: 40px 50px;
  -webkit-border-image: linear-gradient(
      22deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0)
    )
    5 repeat repeat;
  border-radius: 5px;
  transform: skew(0deg, ${randomNumInRange(-0.5, 0.5)}deg);
  width: 900px;
  aspect-ratio: 8.5 / 11;
  font-family: ${fonts[Math.round(randomNumInRange(0, fonts.length))]};
  font-size: 3em;
  font-weight: bold;
  box-sizing: border-box;
  clip-path: polygon(${generateSideNoise(randomNumInRange(150, 350))});
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;

  & div {
    text-indent: ${Math.round(randomNumInRange(0, 20))}px;
    text-shadow: 2px 2px #00000018;
  }
`;
