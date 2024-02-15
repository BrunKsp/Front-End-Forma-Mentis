import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import Question from "@/components/Question";

import RangeSlider from "@/components/RangeSlider/RangeSlider";
import Seo from "@/components/Seo";
import { useRange } from "context/RangerContext/RangerContext";
import { GetServerSideProps } from "next";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { PulseLoader } from "react-spinners";
import ReactToPrint from "react-to-print";
import { useRouter } from "next/router";
import LogoFoil from "../../../../assets/image/logofoilred.svg";
import {
  SubHeader,
  Main,
  DivConteinerTitle,
  CardMainQuestions,
  MainColorFooter,
  DivButtons,
  Button,
  ButtonSelecione,
  DivInputs,
  DivInfoUser,
  ImagemDesk,
  DivText,
  ColorGBack,
} from "./styles";
import { getGabaritoAncora } from "services/AncoraQuestion";
import QuestionGabaritoAncora from "@/components/QuestionGabaritoAncora";
import RangeSliderAncora from "@/components/RangeSliderAncora/RangeSliderAncora";
import ResponseAncora from "@/components/ResponseAncora/ResponseAncora";
import { useRangeAncora } from "context/RangerContext/RangerContextAncora";

const override: CSSProperties = {
  margin: "0 auto",
  borderColor: "red",
};

interface IAlternativa {
  pergunta: string;
  ordem: string;
  respostaSelecionada: boolean;
  respostaCorreta: boolean;
}
interface IQuestion {
  respostaSelecionada: any;
  questao: string;
  dimensao: string;
  numero: number;
  perguntas: IAlternativa[];
}
interface IComplete {
  nome: string;
  email: string;
  curso: number;
  semestre: number;
  idade: number;
  gabarito: IQuestion[];
}

interface GabaritoProps {
  gabarito: IComplete;
  hash: string;
}

const GabaritoAncora = ({ gabarito, hash }: GabaritoProps) => {
  const [renderQuestion, setRenderQuestion] = useState<IQuestion[]>([]);
  const [numbers, setNumbers] = useState(0);
  const { editRangeAncora, ranger, zerar } = useRangeAncora();
  let componentRef = useRef() as any;
  const router = useRouter();

  const getCurso = () => {
    switch (gabarito?.curso) {
      case 1:
        return "Administração";
      case 2:
        return "Sistemas de Informação";
      case 3:
        return "Ontopsicologia";
      case 4:
        return "Direito";
      case 5:
        return "Pedagogia";
      case 6:
        return "Ciências Contábeis";
    }
  };

  let contador = 0;
  let contadorDois = 0;

  useEffect(() => {
    zerar();
  }, []);

  useEffect(() => {
    editRangeAncora({ number: 1, state: true });
    let x = gabarito?.gabarito.slice(0, 10);
    setRenderQuestion(x);
  }, [gabarito?.gabarito]);

  const countTrue = () => {
    let cont = 0;
    for (let x = 0; x < ranger.length; x++) {
      if (ranger[x]?.state === true) {
        cont++;
      }
    }
    return cont;
  };

  const prox = (cas: string) => {
    let cont = countTrue();
    let edit = {
      number: cas === "add" ? cont + 1 : cont,
      state: cas === "add" ? true : false,
    };
    if (edit.number === 1) {
      return;
    }
    editRangeAncora(edit);
    let manda = cas === "add" ? cont : cont - 2;
    setQuestionsRender(manda);
  };

  const setQuestionsRender = (number: number) => {
    let y = number * 10;
    setNumbers(y);
    let x = gabarito?.gabarito.slice(y + 0, y + 10);
    setRenderQuestion(x);
  };

  return (
    <div>
      <Seo title="Forma Mentis" description="Teste Forma Mentis" />
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
        <div style={{ display: "none" }}>
          <div
            style={{ padding: "2rem 3rem" }}
            ref={(el) => (componentRef = el)}
          >
            <DivInfoUser>
              <ImagemDesk>
                <LogoFoil />
              </ImagemDesk>
              <div>
                <DivText>
                  <h1>Nome</h1>
                  <p>{gabarito?.nome}</p>
                </DivText>
                <DivText>
                  <h1>Idade</h1>
                  <p>{gabarito?.idade} anos</p>
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
                    {gabarito?.semestre}º Semestre
                    {gabarito?.semestre > 6 ? <></> : "/Módulo"}
                  </p>
                </DivText>
              </div>
            </DivInfoUser>
            <DivConteinerTitle>
              <h1>Gabarito</h1>
            </DivConteinerTitle>
            {gabarito?.gabarito?.map((question) => {
              contador = contador + 1;
              return (
                <>
                <ColorGBack color={question.respostaSelecionada[0].questao_extra}>
                  <QuestionGabaritoAncora
                    contador={contador}
                    numbers={0}
                    question={question}
                  />
                  <ButtonSelecione>
                    <ResponseAncora question={question} />
                  </ButtonSelecione>
                </ColorGBack>
                </>
              );
            })}
          </div>
        </div>
        <Main>
          <div>
            <RangeSliderAncora />
          </div>
          <DivConteinerTitle>
            <h1>Gabarito</h1>
          </DivConteinerTitle>
          <ReactToPrint
            trigger={() => <Button>SALVAR EM PDF</Button>}
            content={() => componentRef}
          />
          <CardMainQuestions>
            {router.isFallback === true ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "4rem 0",
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
              <>
                <>
                  {renderQuestion?.map((question) => {
                    contadorDois = contadorDois + 1;
                    return (
                      <>
                        <ColorGBack color={question.respostaSelecionada[0].questao_extra}>
                          <QuestionGabaritoAncora
                            contador={contadorDois}
                            numbers={numbers}
                            question={question}
                          />
                          <ButtonSelecione>
                            <ResponseAncora question={question} />
                          </ButtonSelecione>
                        </ColorGBack>
                      </>
                    );
                  })}

                  <DivButtons>
                    <div>
                      {countTrue() === 1 ? (
                        <></>
                      ) : (
                        <Button
                          href="#container"
                          onClick={() => {
                            // setFinaly(true);
                            prox("rem");
                            // setQuestionsRender();
                          }}
                          turnBack
                        >
                          VOLTAR
                        </Button>
                      )}
                      <div />
                      <>
                        {countTrue() === 4 ? (
                          <Button off>AVANÇAR</Button>
                        ) : (
                          <Button
                            onClick={() => {
                              prox("add");
                            }}
                            href="#container"
                          >
                            AVANÇAR
                          </Button>
                        )}
                      </>
                    </div>
                  </DivButtons>
                </>
              </>
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

export default GabaritoAncora;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hash = context?.params?.hash as string | undefined;
  if (!hash) {
    return {
      notFound: true,
    };
  }

  try {
    const { data } = await getGabaritoAncora(hash);

    return {
      props: {
        hash,
        gabarito: data,
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
