import styled, { css } from "styled-components";
import img from "../assets/image/fundo-home.png";

interface IParamsButton {
  primary?: boolean;
}

export const DivMain = styled.div`
  background: url(${img.src}) no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 85vh;
  background-size: cover;
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    justify-content: center;
    flex-direction: column;
    height: 50vh;
  }
  @media (max-width: 350px) {
    height: 35vh;
  }
`;

export const DivJpgLogo = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
export const DivLogoMob = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const DivSubMain = styled.div`
  width: 100%;
  display: flex;
  margin: 50px 0;
  align-items: center;
  justify-content: center;

  min-height: 80vh;
  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const NewDivSub = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  min-height: 70vh;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 650px) {
  }
  h1 {
    font-size: 22px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    color: #555555;
    margin-bottom: 10px;
    text-align: center;
    @media (max-width: 350px) {
      font-size: 18px;
    }
  }
  p {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    color: #555555;
    padding: 0 25px;
    line-height: 30px;
    text-align: center;
    @media (max-width: 900px) {
      text-align: center;
    }
    @media (max-width: 650px) {
      text-align: center;
    }
    @media (max-width: 350px) {
      font-size: 16px;
    }
  }
`;

export const DivAbsolute = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    margin-bottom: 0vh;
    flex-direction: column;
  }
`;

export const Buttons = styled.div<IParamsButton>`
  background: linear-gradient(267.89deg, #a24054 -13.95%, #ca0a2c 104.76%);
  border-radius: 55.5px;
  cursor: pointer;
  margin-top: 70px;
  margin-bottom: 190px;
  transition: all 0.3s ease;
  border: 4px solid transparent;
  width: 55%;

  padding: 0px 10px 0px;
  &:hover {
    background: transparent;
    border: 4px solid #ca0a2c;
    p {
      color: black;
    }
  }
  &:active {
    opacity: 0.7;
  }
  ${(props) =>
    props.primary &&
    css`
      opacity: 0.3;
      color: white;
      cursor: default;
      &:active {
        opacity: 0.3;
      }
    `};
  p {
    color: #fff;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    padding: 15px;
    @media (max-width: 650px) {
      font-size: 13px;
      padding: 2px 2px;
    }
  }
  @media (max-width: 650px) {
    padding: 10px;
  }
`;

export const DivAsks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
  text-align: center;
  @media (max-width: 650px) {
    flex-direction: column;
    min-height: 80vh;
  }
  @media (max-width: 500px) {
    height: 35vh;
    min-height: 80vh;
  }
`;

export const DivImg = styled.div`
  display: flex;
  //justify-content: space-around;
  align-items: center;
  flex-direction: column;
  align-items: center;
  h1 {
    color: black;
    font-size: 50px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    padding: 15px;
    text-align: center;
    margin-bottom: 10px;
    @media (max-width: 650px) {
      font-size: 30px;
    }
  }

  img {
    height: 40vh;
    width: 40vh;
    transform: none !important;
  }
  @media (max-width: 650px) {
    justify-content: center;
    flex-direction: column;
    img {
      height: 30vh;
      width: 30vh;
      transform: none !important;
    }
  }
`;

// Footer

export const DivFooter = styled.div`
  background: linear-gradient(180deg, #c61132 0%, #aa374d 100%);
  min-height: 70vh;
`;
export const DivSemiFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 11vw;
`;

export const DivSubFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20vh;
  p {
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 17px;
    margin: 0 0 60px 7vw;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #aaa;
    }
  }
`;

export const DivSecondFooter = styled.div`
  max-width: 35%;
  p {
    color: #fff;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
`;

export const DivItensFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 25px;
  p {
    color: #fff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    margin-left: 15px;
    max-width: 300px;
    margin-top: 5px;
  }
  div {
    width: 5px;
    height: 5px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: #fff;
`;

export const SubFooterLast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 3vh 11vw;
  p {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    @media (max-width: 500px) {
      font-size: 8px;
      max-width: 75%;
      text-align: center;
    }
  }
`;

export const Main = styled.div`
  background: linear-gradient(
    254.87deg,
    #420000 -1.13%,
    #9d0101 50.04%,
    #440000 103.11%
  );
  flex: 1;
  padding: 75px 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
  // CELULAR
  @media (max-width: 768px) {
    padding: 25px 30px;
  }
`;
export const Viewimage = styled.div`
  width: 55%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
`;
