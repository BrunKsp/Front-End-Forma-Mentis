import type { NextPage } from "next";
import React from "react";
import Seo from "@/components/Seo";
import Image from "next/image";

import Footer from "@/components/Footer/Footer";

import LogoSVG from "@/../assets/image/logoFoilHome.svg";
import Logo from "@/../assets/image/logoFoil.png";
import { wrapper } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { setUserState } from "store/userSlice/userSlice";
import Header from "@/components/Header";
import { FooterHome } from "@/components/index";
import { setAuthState, selectAuthState } from "store/authSlice/authSlice";
import CardFormaMentis from "@/components/CardFormaMentis/CardFormaMentis";
import {
  DivAbsolute,
  DivJpgLogo,
  DivLogoMob,
  DivMain,
  DivSubMain,
  NewDivSub,
} from "./styles";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(setUserState({ nome: "", email: "" }));
      await store.dispatch(setAuthState(false));
      return {
        props: {
          authState: false,
          nome: "",
          email: "",
        },
      };
    }
);

const HomeFormaMentis: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div>
      <Seo title="Forma Mentis" description="Teste Forma Mentis" />
      <Header />
      <DivMain>
        <DivJpgLogo>
          <LogoSVG />
        </DivJpgLogo>
        <DivLogoMob>
          <Image src={Logo} alt="Picture of the author" height={50} />
        </DivLogoMob>
      </DivMain>
      <DivSubMain id="sobre">
        <NewDivSub>
          <p>
            O <b style={{ fontWeight: "bold" }}>Teste Forma Mentis</b> tem por
            objetivo analisar a mentalidade empreendedora do aluno por meio de
            questões relacionadas a situações práticas da vida profissional e de
            aspectos pessoais.
          </p>
          <p>
            Esse teste analisa cinco dimensões de desenvolvimentos em relação à
            <b style={{ fontStyle: "italic" }}> forma mentis</b>: a
            responsabilidade; a autonomia; a vontade; o espírito de iniciativa e
            resolução problemas e a relação funcional no time de trabalho.
          </p>
        </NewDivSub>
        <DivAbsolute>
          <CardFormaMentis />
        </DivAbsolute>
      </DivSubMain>
      <FooterHome>
        <Footer />
      </FooterHome>
    </div>
  );
};

export default HomeFormaMentis;
