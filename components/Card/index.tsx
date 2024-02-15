import React, { FC } from "react";
import { ViewMain } from "./styles";
interface IProps {
  children: React.ReactNode;
}

const Card: FC<IProps> = ({ children }) => {
  return <ViewMain>{children}</ViewMain>;
};

export default Card;
