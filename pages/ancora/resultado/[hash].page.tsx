/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import React, { CSSProperties, useRef, useState } from "react";
import Seo from "@/components/Seo";
import Header from "@/components/Header";

import LogoFoil from "../../../assets/image/logofoilred.svg";
import LogoFoilMin from "../../../assets/image/logofoilredmin.svg";

import ReactToPrint from "react-to-print";
import { getResultadoAncora } from "services/AncoraQuestion";
import PulseLoader from "react-spinners/PulseLoader";

import {
  SubHeader,
  Main,
  CardMainQuestions,
  DivInfoUser,
  DivText,
  Button,
  DivButtons,
  ImagemDesk,
  ImagemCell,
  MainNotFound,
} from "./styles";
import { MainColorFooter } from "../questoes/styles";
import Footer from "@/components/Footer/Footer";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import ResultadoAncora from "@/components/ResultCardAncora/ResultCardAncora";
import { useRangeAncora } from "context/RangerContext/RangerContextAncora";

interface ITotal {
  valorTotal: number;
}
interface IResponse {
  Autonomia: ITotal;
  CompetenciaTecnicoProfisional: ITotal;
  DesafioPuro: ITotal;
  Empreendorismo: ITotal;
  EstiloDeVida: ITotal;
  GerirPessoas: ITotal;
  Seguranca: ITotal;
  ServicoDedicacao: ITotal;
}

interface ICompleteResponse {
  resultado: IResponse;
  nome: string;
  idade: number;
  semestre: number;
  curso: number;
  email: string;
}

interface ResultadoProps {
  resultado: ICompleteResponse;
  hash: string;
}

const override: CSSProperties = {
  margin: "0 auto",
  borderColor: "red",
};

const Resultado = ({ hash, resultado }: ResultadoProps) => {
  let componentRef = useRef<any>();
  const router = useRouter();
  const {  zerar } = useRangeAncora();

  
  const calcPorcent = (question: number, correct: number) => {
    const porcent = (correct * 100) / question;
    return porcent;
  };

  const getCurso = () => {
    switch (resultado?.curso) {
      case 1:
        return "Administração";
      case 2:
        return "Sistemas de Informação";
      case 3:
        return "Ontopsicologia";
      case 4:
        return "Direito";
      case 5:
        return "Ciências Contábeis";
      case 6:
        return "Pedagogia";
    }
  };

  return (
    <div>
      <Seo
        title="Resultado Âncora de carreira"
        description="Resultado Âncora de carreira"
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
            {router.isFallback === true ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "8rem 0",
                }}
              >
                <PulseLoader
                  color={"#c61132"}
                  loading={router.isFallback}
                  cssOverride={override}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              <div style={{ width: "100%" }}>
                <div
                  style={{ width: "100%" }}
                  ref={(el: any) => (componentRef = el)}
                >
                  <DivInfoUser>
                    <ImagemDesk>
                      <LogoFoil />
                    </ImagemDesk>
                    <ImagemCell>
                      <LogoFoilMin />
                    </ImagemCell>
                    <div>
                      <DivText>
                        <h1>Nome</h1>
                        <p>{resultado?.nome}</p>
                      </DivText>
                      <DivText>
                        <h1>Idade</h1>
                        <p>{resultado?.idade} anos</p>
                      </DivText>
                    </div>
                    <div>
                      <DivText>
                        <h1>Curso</h1>
                        <p>{getCurso()}</p>
                      </DivText>
                      <DivText>
                        <h1>Semestre/Módulo</h1>
                        <p>
                          {resultado?.semestre}º Semestre
                          {resultado?.semestre > 6 ? <></> : "/Módulo"}
                        </p>
                      </DivText>
                    </div>
                  </DivInfoUser>
                  <ResultadoAncora resultado={resultado.resultado}/>
                </div>
                <DivButtons>
                  <ReactToPrint
                    trigger={() => <Button>SALVAR EM PDF</Button>}
                    content={() => componentRef as any}
                  />

                  <div />
                  <Link
                    onClick={()=>zerar()}
                    style={{ textDecoration: "none" }}
                    href={`/ancora/resultado/gabarito/${hash}`}
                    passHref
                  >
                    <Button>VER GABARITO</Button>
                  </Link>
                </DivButtons>
              </div>
            )}
          </CardMainQuestions>
        </Main>
      </div>
      <MainColorFooter>
        <Footer />
      </MainColorFooter>
    </div>
  );
};
export default Resultado;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hash = context?.params?.hash as string | undefined;
  if (!hash) {
    return {
      notFound: true,
    };
  }

  try {
    const { data } = await getResultadoAncora(hash);
    return {
      props: {
        hash,
        resultado: data,
      },
    };
  } catch (err: any) {
    if (err?.response?.status && err.response.status == 404) {
      return {
        redirect: {
          destination: "/err/404",
          statusCode: 303,
        },
      };
    }
    return {
      redirect: {
        destination: "/err/500",
        statusCode: 303,
      },
    };
  }
};
