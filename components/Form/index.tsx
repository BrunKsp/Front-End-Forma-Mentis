import { Question } from "../index";
import { Main } from "./styles";
import React, { FC } from "react";
interface IProps {
  children: React.ReactNode;
}

const Form: FC<IProps> = ({ children }) => {
  return <Main>{children}</Main>;
};
export default Form;