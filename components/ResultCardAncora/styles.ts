import styled, { css } from "styled-components";

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
`;

export const TextDim = styled.h1`
  color: ${params => params.color ? params.color : "#837c7c" };
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-family: "Montserrat";
  margin-top: 1rem;
  @media (max-width: 319px) {
    display: none;
  }
`;
export const TextDimNext = styled(TextDim)`
  text-align: center;
  font-weight: bold;
`;

export const MainItem = styled.div`
  display: grid;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  grid-template-columns: 5fr 1fr;
  margin: 2rem 0;
  @media (max-width: 319px) {
    grid-template-columns: 1fr 5fr;
  }
`;

export const DivResultCell = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 1.5rem;
  p {
    color: #686767;
    font-size: 1rem;
    font-family: "Montserrat";
    text-align: center;
  }
  div {
    padding: 0.5rem 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    p {
      color: #686767;
      font-size: 1.1rem;
      font-weight: bold;
      font-family: "Montserrat";
      text-align: center;
    }
    h1 {
      color: #686767;
      font-size: 0.9rem;
      font-family: "Montserrat";
      text-align: center;
      margin-top: 0.1rem;
    }
  }
  @media (min-width: 319px) {
    display: none;
  }
`;
export const MarginMain = styled.div`
  padding: 1rem 5vh;
  @media (max-width: 319px) {
    padding: 0 5vh;
  }
`;
export const TextCat = styled.h1`
  color: #c61132;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: "Montserrat";
`;
export const DivSubCat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  border-width: 0 0 0 0.001rem;
  border-style: solid;
  border-color: #b5b5b5;
  @media (max-width: 319px) {
    display: none;
  }
`;
export const TextSubCat = styled.h2`
  color: ${(params) => (params.color ? params.color :"#ccc")};
  font-size: 1.2rem;
  font-weight: bold;
  font-family: "Montserrat";
`;
export const TextSubCatLast = styled(TextSubCat)`
  font-size: 1.1rem;
`;

export const MinTextCat = styled.p`
  color: #535353;
  font-size: 0.85rem;
  font-family: "Montserrat";
  text-align: center;
  margin-left: 2px;
`;
export const NumB = styled.p`
  color: #b5b5b5;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  font-family: "Montserrat";
  height: 100%;
  border-width: 0 1px 0 0;
  border-style: solid;
  margin: 0 1rem 0 0;
`;
export const TextDescription = styled.p`
  color: #575757;
  font-family: "Montserrat";
  font-size: 0.9rem;
  line-height: 1.1rem;
  margin-top: 0.5rem;
  margin-right: 2rem;
  @media (max-width: 319px) {
    margin-right: 0rem;
  }
`;
export const ResultFooter = styled.div`
  background: linear-gradient(180deg, #c61132 0%, #aa374d 100%);
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem 5vw;
  @media (max-width: 319px) {
    grid-template-columns: 1fr;
  }
`;
export const ResultFooterSub = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
export const ResultSub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const TextFooterMin = styled.p`
  font-size: 1rem;
  font-family: "Montserrat";
  color: #fff;
  text-align: center;
`;

export const TextFooterMinTitle = styled(TextFooterMin)`
  text-align: start;
  margin-top: 3.5rem;
  font-size: 1.1rem;
  @media (max-width: 319px) {
    text-align: center;
    margin: 1.5rem 0;
  }
`;

export const TextFooterMax = styled(TextFooterMin)`
  font-weight: bold;
  font-size: 1.3rem;
  @media (max-width: 319px) {
    font-size: 1.2rem;
  }
`;
export const TextFooterMaxTop = styled(TextFooterMax)`
  font-weight: bold;
  padding: 0.5rem 0 1rem;
  font-size: 1.15rem;
  @media (max-width: 319px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;
export const DivMinFooter = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 3rem;
  border: solid #ccc;
  border-width: 0 0 0 1px;
  @media (max-width: 319px) {
    padding: 0.3rem 1rem;
    border: none;
  }
`;
export const SubTextPorcent = styled(TextFooterMin)`
  font-size: 0.8rem;
  margin-top: 0.45rem;
  @media (max-width: 319px) {
    margin-top: 0.35rem;
  }
`;
