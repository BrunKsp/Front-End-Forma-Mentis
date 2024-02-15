import styled, { css } from "styled-components";

interface IParamsButton {
  tam?: number;
  ativo?: boolean;
}

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;

export const Button = styled.div<IParamsButton>`
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
        width: ${(props) => (props.tam ? props.tam - 4 : 0)}px;
        height: ${(props) => (props.tam ? props.tam - 4 : 0)}px;
        border-radius: 60px;
        background-color: #f00;
      }
    `};
    @media (max-width: 800px) {
      margin: 1rem 2rem 0;
    }
  @media (max-width: 470px) {
    width: ${(props) => (props.tam ? props.tam : 0)}px;
    margin: 1rem 1.2rem 0;
  }
  @media (max-width: 335px) {
    margin: 1rem 0.8rem 0;
  }
`;
export const Ocult = styled.div`
  @media (max-width: 800px) {
    margin-left: 110px;
  }
  @media (min-width: 801px) {
    p {
      display: none;
    }
  }
`;

export const Aparecer = styled.div`
  @media (max-width: 800px) {
    p {
      display: none;
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
