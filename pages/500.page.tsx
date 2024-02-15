/* eslint-disable react-hooks/rules-of-hooks */
import Header from "@/components/Header";
import Seo from "@/components/Seo";
import { MainNotFound } from "pages/forma-mentis/resultado/styles";
import {
  CardMainQuestions,
  MainColorFooter,
  SubHeader,
  Main,
} from "pages/forma-mentis/questoes/styles";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer/Footer";

interface IMessage {
  title: string;
  message: string;
  subMessage: string;
}

const err = () => {
  return (
    <div>
      <Seo
        title="Resultado Forma Mentis"
        description="Resultado Forma Mentis"
      />
      <Header />
      <SubHeader />
      <div
        id="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Main>
          <CardMainQuestions>
            <MainNotFound>
              <h1>Ops!</h1>
              <h2>Erro interno!</h2>
              <p>Aguarde alguns minutos e tente novamente.</p>
            </MainNotFound>
          </CardMainQuestions>
        </Main>
      </div>
      <MainColorFooter>
        <Footer />
      </MainColorFooter>
    </div>
  );
};
export default err;
