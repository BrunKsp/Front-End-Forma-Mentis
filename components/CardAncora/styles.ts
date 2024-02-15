import styled, { css } from "styled-components";

interface IParamsButton {
  primary?: boolean;
}

export const MainCard = styled.div`
  width: 90%;
  max-width: 600px;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 50px;
  box-shadow: 2px 4px 5px #00000033;
  @media (max-width: 1285px) {
    width: 70%;
  }
  @media (max-width: 900px) {
    padding: 18px 23px;
  }
  @media (max-width: 450px) {
    padding: 40px 50px;
    border: none;
    box-shadow: none;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
  h1 {
    color: #555555;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    width: 100%;
    @media (max-width: 450px) {
      text-align: center;
    }
  }
`;
export const Divinputs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  label {
    color: #837c7c;
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    margin-top: 40px;
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
  }
`;
export const DivCheckBox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
  margin-top: 40px;
  label {
    color: #837c7c;
    font-size: 15px;
    font-family: "Montserrat", sans-serif;
    padding-left: 10px;
    @media (max-width: 350px) {
      text-align: center;
      font-size: 13px;
      padding: 0;
    }
  }
`;
export const DivButton = styled.div<IParamsButton>`
  background: linear-gradient(267.89deg, #a24054 -13.95%, #ca0a2c 104.76%);
  border-radius: 55.5px;
  margin-top: 40px;
  cursor: pointer;
  transition: all 0.1s ease;
  width: 90%;
  &:active {
    opacity: 0.7;
  }
  ${props =>
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
    font-size: 22px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    padding: 15px 0px;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 17px;
      padding: 15px 10px;
    }
  }
`;
