import styled from "styled-components";

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
    @media (max-width: 450px) {
      font-size: 8px;
      max-width: 75%;
      text-align: center;
    }
  }
`;
