import React, { FC } from "react";

import LogoFoilFooter from "../../assets/image/logofoilfooter.svg";
import Location from "../../assets/image/footer/location.svg";
import Phone from "../../assets/image/footer/phone.svg";
import Email from "../../assets/image/footer/email.svg";
import InstagramLogo from "../../assets/image/footer/instagram.svg";
import FacebookLogo from "../../assets/image/footer/facebook.svg";
import AmfLogo from "../../assets/image/footer/amf.svg";

import {
  DivFooter,
  DivItensFooter,
  DivSecondFooter,
  DivSemiFooter,
  DivSubFooter,
  Line,
  SubFooterLast,
} from "./styles";

interface IProps {
  children?: React.ReactNode;
}

const FooterHome: FC<IProps> = ({ children }) => {
  return (
    <DivFooter>
      <DivSemiFooter>
        <DivSubFooter>
          <div>
            <LogoFoilFooter />
          </div>
          <div>
            <a href="#top">Inicio</a>
            <a href="#sobre">Sobre</a>
            <p onClick={() => window.open("https://faculdadeam.edu.br/")}>
              Site AMF
            </p>
            <p
              onClick={() =>
                window.open("https://faculdadeam.edu.br/amf/metodologia-foil")
              }
            >
              Metodologia FOIL
            </p>
          </div>
        </DivSubFooter>
        <DivSecondFooter>
          <p>ENDEREÇO</p>
          <DivItensFooter>
            <Location />
            <p>
              Campus: Estrada Recanto Maestro, nº 338, Distrito Recanto Maestro,
              Restinga Sêca-RS Cep: 97200-000, Brasil
            </p>
          </DivItensFooter>
          <DivItensFooter>
            <Phone />
            <p>(55) 3289-1141 | (55) 99998-0696</p>
          </DivItensFooter>
          <DivItensFooter>
            <Email />
            <p>coordfoil@faculdadeam.edu.br</p>
          </DivItensFooter>
          <DivItensFooter>
            <InstagramLogo />
            <div />
            <FacebookLogo />
            <p>faculdadeam</p>
          </DivItensFooter>
        </DivSecondFooter>
      </DivSemiFooter>
      {children}
    </DivFooter>
  );
};

export default FooterHome;
