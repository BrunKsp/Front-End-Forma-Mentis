import styled, { css } from "styled-components";

import img from "@/../assets/image/fundo-home.png";

interface ButtonProps {
  turnBack?: boolean;
  off?: boolean;
}

interface TitleQuestionProps {
  red?: boolean;
}

export const SubHeader = styled.div`
  min-height: 10vh;
  background: url(${img.src}) no-repeat;
  width: 100%;
  background-size: cover;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  margin: 10vh 0;
`;
export const DivConteinerTitle = styled.div`
  width: 100%;
  display: flex;
  gap: 10;
  align-items: center;
  justify-content: center;
  margin: 5vh 0;
  p {
    color: #c61132;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
    width: 70%;
    @media (max-width: 450px) {
      font-size: 1rem;
      width: 90%;
    }
  }
  h1 {
    color: #c61132;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    width: 70%;
    line-height: 25px;
    @media (max-width: 450px) {
      font-size: 1rem;
      text-align: center;
      width: 90%;
    }
  }
`;
export const CardMainQuestions = styled.div`
  width: 80%;
  padding: 1rem 5vw;
  border: 1px solid none;
  border-radius: 9px;
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  margin-top: 4vh;
`;

export const CardMainQuestion = styled.div`
  width: 100%;
`;

export const DivQuestion = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 8vh;
`;

export const TitleQuestion = styled.p<TitleQuestionProps>`
  font-family: "Open Sans", sans-serif;
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-left: 5px;
  ${({red}) =>
    red &&
    css`
      color: #c61132;
    `};
`;
export const DivAlternative = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TextAlter = styled.p`
  width: 95%;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  text-align: start;
  margin-top: 2%;
  line-height: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.color};
`;
export const MainColorFooter = styled.div`
  background: linear-gradient(180deg, #c61132 0%, #aa374d 100%);
  padding-top: 2rem;
`;
export const DivButtons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 1rem;
  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    @media (max-width: 370px) {
      flex-direction: column;
    }
    div {
      width: 20px;
      height: 1vh;
    }
  }
`;
export const Button = styled.a<ButtonProps>`
  background: linear-gradient(267.89deg, #a24054 -13.95%, #ca0a2c 104.76%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 55.5px;
  padding: 0.75rem 2rem;
  font-family: "Montserrat";
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
  ${({turnBack}) =>
    turnBack &&
    css`
      background-color: #fff;
      color: #969393;
      background: none;
    `};
  ${({off}) =>
    off &&
    css`
      opacity: 0.5;
      cursor: default;
      &:hover {
        opacity: 0.5;
      }
    `};
`;

export const DivInputs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 5vh;
  margin-bottom: 5vh;
  align-items: center;
  label {
    color: #837c7c;
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    width: 80%;
    text-align: start;
    margin-top: 15px;
    @media (max-width: 350px) {
      font-size: 15.3px;
    }
  }
  input {
    border-color: #b1b1b1;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    padding: 10px 15px;
    margin: 4px 0;
    width: 77%;
    @media (max-width: 450px) {
    width: 70%;
    }
  }
  select {
    border-color: #b1b1b1;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    padding: 10px 15px;
    margin: 4px 0;
    width: 80%;
  }
`;
