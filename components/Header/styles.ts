import styled from "styled-components";

export const Main = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  height: 4.5rem;
  display: flex;
  @media (max-width: 450px) {
    height: 7rem;
    justify-content: space-around;
  }
`;

export const MainLimitedView = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

  img {
    margin-left: 160px;
  }

  @media (max-width: 650px) {
    img {
      margin-left: 50px;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const DivOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  min-width: 300px;
  a {
    color: #555555;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 15px;
    transition: all 0.3s ease;
    text-decoration: none;
    display: block;
    &:hover {
      color: #55555555;
      cursor: pointer;
    }
    @media (max-width: 350px) {
      font-size: 13px;
    }
  }
  p {
    color: #555555;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 15px;
    transition: all 0.3s ease;
    margin-left: 20px;
    &:hover {
      color: #55555555;
      cursor: pointer;
    }
    @media (max-width: 350px) {
      font-size: 13px;
    }
  }
`;
