import React, { useEffect, useRef } from "react";
import Seo from "@/components/Seo";
import Image from "next/image";

import Footer from "@/components/Footer/Footer";

import LogoSVG from "../assets/image/logoFoilHome.svg";
import Duvidas from "../assets/image/duvidasimg.jpg";
import { Header, FooterHome } from "../components";
import {
  DivMain,
  DivAbsolute,
  NewDivSub,
  DivJpgLogo,
  DivLogoMob,
  Buttons,
  DivAsks,
  DivImg,
} from "./styles";
import Logo from "../assets/image/logoFoil.png";
import router from "next/router";
import SelectAsks from "@/components/SelectAsks/SelectAsks";

const Home = () => {
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
      <DivAbsolute>
        <NewDivSub>
          <p>
            O <b style={{ fontWeight: "bold" }}>Teste Forma Mentis</b> tem por
            objetivo analisar a mentalidade empreendedora do aluno por meio de
            questões relacionadas a situações práticas da vida profissional e de
            aspectos pessoais.
          </p>
          <p>
            Esse teste analisa cinco dimensões de desenvolvimentos em relação à
            <b style={{ fontStyle: "italic" }}> forma mentis</b>:<br></br> a
            responsabilidade, autonomia, vontade, o espírito de iniciativa,
            resolução problemas e a relação funcional no time de trabalho.
          </p>

          <Buttons onClick={() => router.push("/forma-mentis")}>
            <p>TESTE FORMA MENTIS</p>
          </Buttons>
        </NewDivSub>
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

          <Buttons onClick={() => router.push("/ancora")}>
            <p>TESTE ÂNCORA DE CARREIRA</p>
          </Buttons>
        </NewDivSub>
      </DivAbsolute>
      <DivAbsolute>
        <DivAsks>
          <DivImg>
            <h1>Dúvidas Frequentes</h1>
            <Image src={Duvidas} alt="ask" />
          </DivImg>
          <SelectAsks></SelectAsks>
        </DivAsks>
      </DivAbsolute>
      <FooterHome>
        <Footer />
      </FooterHome>
    </div>
  );
};
export default Home;
