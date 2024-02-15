import styled from "styled-components";

export const Main = styled.div`
  align-items: center;
  /* padding: 3% 15% 0; */
  background-color: #fff;
  border-radius: 20px;
  /* margin: 50px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    min-height: 1vh;
    padding: 6% 2%;
  }
`;

export const ViewInputs = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0.5% 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextTitle = styled.p`
  color: #440000;
  font-size: 1.5rem;
  font-family: "Inter Tight", sans-serif;
  /* font-weight: bold; */
  text-align: center;
  margin: 2% 0;
`;
export const Input = styled.input`
  /* border: none; */
  background-color: #fff;
  padding: 0.2rem 0.5rem;
  font-size: 1.18rem;
  margin: 0 0.5rem 1rem;
  border: 1.5px solid #7d0101;
  border-radius: 55.5px;
  width: 30%;
  @media (max-width: 768px) {
    width: 70%;
  }
`;
export const NewButton = styled.input`
  font-size: 1.18rem;
  font-family: "Inter Tight", sans-serif;
  font-weight: 900;
  background: linear-gradient(
    267.89deg,
    #cb0000 -13.95%,
    #7d0101 46.64%,
    #d30000 104.76%
  );
  color: #fff;
  padding: 1rem 10%;
  margin-bottom: 2rem;
  border-radius: 55.5px;
  cursor: pointer;
  border: none;
  margin: 2% 0;
`;
export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    margin: 5% 0 0;
  }
`;
