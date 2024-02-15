import styled, { css } from "styled-components";

import img from "@/../assets/image/fundo-home.png";

interface IParamsButton {
  tam?: number;
  ativo?: boolean;
}

interface TitleQuestionProps {
  red?: boolean;
}
interface ButtonProps {
  turnBack?: boolean;
  off?: boolean;
}

export const SubHeader = styled.div`
  min-height: 10vh;
  background: url(${img.src}) no-repeat;
  width: 100%;
  background-size: cover;
  `

export const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
max-width: 1400px;
width: 100%;
margin: 10vh 0;
`;

export const DivContainerAviso = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
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
    @media (max-width: 450px) {
      font-size: 1rem;
      text-align: center;
      width: 90%;
    }
  }
  h3 {
    color: #c61132;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    width: 70%;
    margin-top: 2%;
    text-align: center;
    line-height: 25px;
    @media (max-width: 450px) {
      font-size: 0.8rem;
      text-align: center;
      width: 90%;
      margin-top: 2%;
    }
  }
`;

export const CardMainQuestion = styled.div`
    width: 80%;
  padding: 1rem 5vw;
  border: 1px solid none;
  border-radius: 9px;
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.21);
  margin-top: 4vh;
`;

export const MainFooter = styled.main`
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

export const DivConteinerTitle = styled.div`
  width: 100%;
  display: flex;
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
    @media (max-width: 450px) {
      font-size: 1rem;
      text-align: center;
      width: 90%;
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
  margin-left: 15px;
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

export const MainColorFooter = styled.div`
  background: linear-gradient(180deg, #c61132 0%, #aa374d 100%);
  padding-top: 2rem;
`;

export const TitleQuestion = styled.p<TitleQuestionProps>`
  font-family: "Open Sans", sans-serif;
  display: inline-block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 30px;
  margin-left: 5px;
  @media (max-width: 450px) {
    margin: 0 0 0.25rem 0;
  }
  ${({ red }) =>
    red &&
    css`
      color: #c61132;
    `};
`;

export const ButtonSelecione = styled.div`
  /* margin-top: 20px; */
`;

export const ButtonAdicionar = styled.div<IParamsButton>`
  width: ${(props) => (props.tam ? props.tam : 0)}px;
  height: ${(props) => (props.tam ? props.tam : 0)}px;
  border-radius: 60px;
  border: 3px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    border-color: #f00;
  }
  margin: 0 30px;
  ${(props) =>
    props.ativo === true &&
    css<IParamsButton>`
      border-color: #f00;
      cursor: default;
      &:active {
        opacity: 0.3;
      }
      div {
        width:  ${(props) => (props.tam ? props.tam - 4 : 0)}px;
        height:  ${(props) => (props.tam ? props.tam - 4 : 0)}px;
        border-radius: 60px;
        background-color: #f00;
      }
    `};
  
`;

export const DivAdicionar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;


export const DivButtonsReturn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
`;