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
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer/Footer";
import ResponseCode from "./response";

interface IMessage {
  title: string;
  message: string;
  subMessage: string;
}


const err = () => {
  const { query } = useRouter();
  const [message, setMessage] = useState<IMessage>();

  const resp =  useCallback(() => {
    if (query) {
      const re = ResponseCode(query.err);
      setMessage(re);
    }
  }, [query]);

  useEffect(() => {
    resp();
  }, [query.err, resp]);

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
              <h1>{message?.title}</h1>
              <h2>{message?.message}</h2>
              <p>{message?.subMessage}</p>
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
