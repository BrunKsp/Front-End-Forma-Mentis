import { Main, DivOptions, MainLimitedView } from "./styles";
import LogoHeader from "../../assets/image/logoheader.png";
import React, { FC } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div id="top">
      <Main>
        <MainLimitedView>
          <Image src={LogoHeader} alt="Picture of the author" quality={100} width={36} height={49}/>
          <DivOptions>
            <a href="/">Início</a>
            <p onClick={() => window.open("https://faculdadeam.edu.br/")}>
              Site AMF
            </p>
          </DivOptions>
        </MainLimitedView>
      </Main>
    </div>
  );
};
export default Header;
