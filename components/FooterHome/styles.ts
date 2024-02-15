import styled from "styled-components";

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
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0;
    width: 100%;
  }
`;

export const DivSubFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20vh;
  @media (max-width: 900px) {
    align-items: center;
    margin-top: 10vh;
  }
  a {
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-size: 17px;
    margin: 0 0 60px 7vw;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: block;
    &:hover {
      color: #aaa;
    }
    @media (max-width: 900px) {
      margin: 30px 0 30px 7vw;
    }
    @media (max-width: 350px) {
      font-size: 15px;
    }
  }
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
    @media (max-width: 900px) {
      margin: 30px 0 30px 7vw;
    }
    @media (max-width: 350px) {
      font-size: 15px;
    }
  }
`;

export const DivSecondFooter = styled.div`
  max-width: 35%;
  @media (max-width: 1285px) {
    max-width: 50%;
  }
  @media (max-width: 900px) {
    max-width: 100%;
    margin: 10vh 0;
  }
  p {
    color: #fff;
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    @media (max-width: 900px) {
      font-size: 18px;
      text-align: center;
    }
  }
`;

export const DivItensFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 25px;
  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    margin-left: 15px;
    max-width: 300px;
    margin-top: 5px;
    @media (max-width: 450px) {
      font-size: 12px;
      max-width: 70%;
    }
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
  }
`;
