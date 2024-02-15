import styled from "styled-components";
import img from "@/../assets/image/fundo-home.png";

export const DivMain = styled.div`
  background: url(${img.src}) no-repeat;
  background-attachment: fixed;
  width: 100%;
  height: 85vh;
  background-size: cover;
  display: flex;
  align-items: center;
  @media (max-width: 450px) {
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
  @media (max-width: 450px){
    width: 45px;
    height: 35vh;
  }
`;
export const DivLogoMob = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    //display: none;
  }
`;

export const DivSubMain = styled.div`
  width: 100%;
  display: flex;  
  margin: 50px 0;
  align-items: flex-start;
  justify-content: center;
  min-height: 50vh;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const NewDivSub = styled.div`
  width: 45%;
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
  h1 {
    font-size: 22px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #555555;
    margin-bottom:10px;
    text-align: center;
    @media (max-width: 350px) {
      font-size: 18px;
    }
  }
  p {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
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
export const DivAbsolute = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -30vh;
  @media (max-width: 900px) {
    margin-bottom: 10vh;
  }
  @media (max-width: 450px) {
    margin: 0vh;
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
    @media (max-width: 450px) {
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