import styled, { css } from "styled-components";

import img from "../../../assets/image/fundo-home.png";

interface IButton {
  off?: boolean;
  retur?: boolean;
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

export const CardMainQuestions = styled.div`
  width: 80%;
  border: 1px solid none;
  border-radius: 9px;
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  margin-top: 4vh;
`;
export const DivInfoUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 650px) {
    flex-direction: column;
    margin-bottom: 0rem;
  }
`;

export const ImagemDesk = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`;
export const ImagemCell = styled.div`
  margin-bottom: 2rem;
  @media (min-width: 650px) {
    display: none;
  }
`;

export const DisplayName = styled.div`
  flex-direction: row;
  width: 100%;
  @media (max-width: 650px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const DivText = styled.div`
  margin: 3vh 0;
  h1 {
    color: #837c7c;
    font-size: 1.05em;
    font-family: "Montserrat";
    @media (max-width: 650px) {
      text-align: center;
    }
  }
  p {
    color: #686767;
    font-size: 1.25em;
    font-family: "Montserrat";
    font-weight: bold;
    margin-top: 0.25rem;
    @media (max-width: 650px) {
      text-align: center;
      padding: 0 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const Button = styled.a<IButton>`
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
  @media (max-width: 650px) {
    text-align: center;
  }
  ${(props) =>
    props.retur &&
    css`
      background-color: #fff;
      color: #969393;
      background: none;
    `};
  ${(props) =>
    props.off &&
    css`
      opacity: 0.5;
      cursor: default;
      &:hover {
        opacity: 0.5;
      }
    `};
`;

export const DivButtons = styled.div`
  display: flex;
  margin: 2.5rem 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    width: 20px;
    height: 10px;
    @media (max-width: 650px) {
      height: 5vh;
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
export const MainNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10vh 5vw;
  h1 {
    font-family: "Montserrat";
    font-size: 4rem;
    color: #ccc;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2vw;
    @media (max-width: 650px) {
      margin-bottom: 6vw;
      padding: 0 3vw;
    }
  }
  h2 {
    font-family: "Montserrat";
    font-size: 1.6rem;
    color: #666;
    font-weight: bold;
    margin-bottom: 2vw;
    text-align: center;
    @media (max-width: 650px) {
      margin-bottom: 6vw;
      padding: 0 3vw;
    }
  }
  p {
    font-family: "Montserrat";
    font-size: 1.1rem;
    text-align: center;
    color: #666;
    @media (max-width: 650px) {
      margin-bottom: 6vw;
      padding: 0 3vw;
    }
  }
`;