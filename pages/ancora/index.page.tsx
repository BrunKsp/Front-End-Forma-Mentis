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
import CardAncora from "@/components/CardAncora/CardAncora";
import {
  DivAbsolute,
  DivJpgLogo,
  DivLogoMob,
  DivMain,
  DivSubMain,
  NewDivSub,
} from "./style";
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

const HomeAncora: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  return (
    <div>
      <Seo
        title="Âncoras de Carreira"
        description="Teste Âncoras de carreira"
      />
      <Header />
      <DivMain>
        <DivJpgLogo>
          <LogoSVG />
        </DivJpgLogo>
        <DivLogoMob>
          <Image src={Logo} alt="" height={50} />
        </DivLogoMob>
      </DivMain>
      <DivSubMain id="sobre">
        <NewDivSub>
          <p>
            As <b style={{ fontWeight: "bold" }}>Âncoras de carreira</b> são os
            princípios norteadores de uma trajetória profissional. São as
            motivações que levam as pessoas a escolher determinada profissão,
            mudar de trabalho, buscar uma nova oportunidade, uma recolocação no
            mercado, migrar para o empreendedorismo e assim por diante.
          </p>
          <p>
            A palavra <b style={{ fontStyle: "italic" }}>âncora</b>, nesse
            sentido, remete a sustentação, tal qual o objeto que prende as
            embarcações ao solo em meio a águas agitadas. As{" "}
            <b style={{ fontStyle: "italic" }}>Âncoras de carreira</b> têm o
            mesmo propósito: servir como uma base sólida para apoiar as tomadas
            de decisão profissionais.
          </p>
        </NewDivSub>
        <DivAbsolute>
          <CardAncora />
        </DivAbsolute>
      </DivSubMain>
      <FooterHome>
        <Footer />
      </FooterHome>
    </div>
  );
};

export default HomeAncora;
