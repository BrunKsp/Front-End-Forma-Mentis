import styled, { css } from "styled-components";

interface TitleQuestionProps {
  red?: boolean;
}

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
  @media (max-width: 450px) {
    margin: 0 0 0.25rem 0;
  }
  ${({ red }) =>
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

export const MainAlter = styled.div`
  justify-content: flex-start;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 2%;
  margin-left: 1rem;
`;
export const TextAlter = styled.p`
  width: 95%;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  text-align: start;
  line-height: 1.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.color};
  @media (max-width: 450px) {
    margin: 0  0 0 0.25rem;
  }
`;
export const Button = styled.div`
  margin-top: 0.3rem;
  border-radius: 360px;
  border-style: solid;
  border-color: ${(props) => props.color};;
  width: 0.65rem;
  height: 0.65rem;
  border-width: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  div {
    background-color: ${(props) => props.color};;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 360px;
  }
`;
