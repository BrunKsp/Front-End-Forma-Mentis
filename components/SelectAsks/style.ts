import React from "react";
import { Button, ButtonBaseProps, ButtonProps } from "@mui/material";
import styled, { css } from "styled-components";

export const DivSelect = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  //margin-top: 90px;
  //padding: 40px 50px;
`;

export const StyledButton = styled(Button)`
  && {
    background: linear-gradient(267.89deg, #a24054 -13.95%, #ca0a2c 104.76%);
    border-radius: 55.5px;
    cursor: pointer;
    margin-top: 40px;
    transition: all 0.3s ease;
    width: 90%;
    border: 4px solid transparent;
    padding:  0px 10px 0px;
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
    p {
      color: #fff;
      font-size: 18px;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      padding: 15px;
      text-align: center;
      @media (max-width: 450px) {
        font-size: 13px;
        padding: 2px 2px;
      }
    }
    @media (max-width: 450px) {
      padding:  10px;
    }

    .MuiButton-endIcon {
      margin-left: 14px;
      color: black;
    }
  }
`;

export const DivSub = styled.div`
  width: 97%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin-bottom: 10vh;
  }
  p {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    color: #555555;
    margin-top: 15px;
    padding: 0 25px;
    line-height: 30px;
    @media (max-width: 900px) {
      text-align: center;
    }
    @media (max-width: 450px) {
      text-align: center;
    }
    @media (max-width: 350px) {
      font-size: 16px;
    }
  }
`;