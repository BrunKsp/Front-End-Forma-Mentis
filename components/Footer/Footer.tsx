import React from "react";
import AmfLogo from "../../assets/image/footer/amf.svg";

import { Line, SubFooterLast } from "./style";

const Footer = () => {
  return (
    <div>
      <Line />
      <SubFooterLast>
        <p>Antonio Meneghetti Faculdade Ⓡ Todos os direitos reservados.</p>
        <AmfLogo />
      </SubFooterLast>
    </div>
  );
};
export default Footer;
