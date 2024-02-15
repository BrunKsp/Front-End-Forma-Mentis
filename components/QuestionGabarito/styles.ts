import styled, { css } from "styled-components";

interface TitleQuestionProps {
  red?: boolean
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
  line-height: 1.5rem;
  border-radius: 5px;
  padding: 0 0.5rem 0.5rem;
  color: ${(props) => props.color};
  @media (max-width: 450px) {
    margin: 0 ;
  }
`;
