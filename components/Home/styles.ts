import styled from "styled-components";

export const Main = styled.div`
  align-items: center;
  padding: 3% 15% 0;
  background-color: #fff;
  border-radius: 20px;
  /* margin: 50px; */
  @media (max-width: 768px) {
    padding: 3% 7% 0;
  }
`;
export const Text = styled.p`
  font-size: 2rem;
  font-family: "Inter Tight", sans-serif;
  font-weight: bold;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Text2 = styled(Text)`
  font-size: 1.18rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5rem;
  margin-top: 1.3rem;
  margin-bottom: 1.7rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const ViewButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.input`
  font-size: 1.18rem;
  font-family: "Inter Tight", sans-serif;
  background-color: #6c0302;
  color: #fff;
  padding: 0.7rem 0.5rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

export const ButtonOff = styled(Button)`
  background-color: #777;
  cursor: default;
`;

export const Input = styled.input`
  border: none;
  background-color: #ccc;
  padding: 0.5rem 0.3rem;
  font-size: 1.18rem;
  margin: 0 0.5rem 1rem;
`;
export const ViewInputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
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
  padding: 1rem 15%;
  margin-bottom: 2rem;
  border-radius: 55.5px;
  cursor: pointer;
  border: none;
`;
export const NewAllingCenter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
