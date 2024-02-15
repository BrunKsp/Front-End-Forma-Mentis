import styled, { css } from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  aling-items: center;
  justify-content: center;
`;

export const MainRanger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Div = styled.div`
  height: 0.25rem;
  width: 4.5rem;
  background-color: ${(props) => props.color};
  trasition: all 5.5s ease;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  @media (max-width: 450px) {
    width: 1rem;
  }
`;
export const P = styled.p`
  border-radius: 360px;
  background-color: ${(props) => props.color};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
  color: #fff;
  margin: 0;
  trasition: all 0.3s ease;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 450px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
