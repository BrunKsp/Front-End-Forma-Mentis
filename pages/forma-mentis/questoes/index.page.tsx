/* eslint-disable react-hooks/rules-of-hooks */
import { CSSProperties, useCallback, useEffect, useState } from "react";
import Seo from "@/components/Seo";
import Nprogress from 'nprogress'
import { Header } from "../../../components";

import Question from "@/components/Question";

import PulseLoader from "react-spinners/PulseLoader";

import { getQuestions, postForm } from "services/Questions";
import RangeSlider from "@/components/RangeSlider/RangeSlider";
import {
  SubHeader,
  Main,
  DivConteinerTitle,
  CardMainQuestions,
  MainColorFooter,
  DivButtons,
  Button,
  DivInputs,
} from "./styles";
import Footer from "@/components/Footer/Footer";
import { selectUserState, setUserState } from "store/userSlice/userSlice";

import { useRange } from "../../../context/RangerContext/RangerContext";
import { useSelector } from "react-redux";
import { GetStaticProps } from "next";
import { useRouter } from 'next/router'

interface RangerContext {
  number: number;
  state: boolean;
}
interface IAlternativa {
  id: string;
  pergunta: string;
  ordem: string;
}
interface IQuestion {
  id: string;
  questao: string;
  dimensao: number;
  numero: number;
  perguntas: IAlternativa[];
  respondido: string;
}

interface IResponse {
  questaoId: string;
  respostaSelecionadaId: string;
}

interface FormularioProps {
  questoes: IQuestion[];
}

interface IUser {
  idade: number;
  curso: number;
  semestre: number;
}

const override: CSSProperties = {
  margin: "0 auto",
  borderColor: "red",
};

const Formulario = ({questoes}: FormularioProps) => {
  const userState = useSelector(selectUserState);
  const { editRange, ranger } = useRange();
  const [renderQuestion, setRenderQuestion] = useState<IQuestion[]>([]);
  const [numbers, setNumbers] = useState(0);
  const [alwaysResponses, setAlwaysResponses] = useState(false);
  const [finished, setFinished] = useState(false);
  const [lastUser, setLastUser] = useState<IUser>({
    curso: 1,
    idade: 0,
    semestre: 1,
  });
  const router = useRouter();

  const prox = (cas: string) => {
    let cont = countTrue();
    let edit = {
      number: cas === "add" ? cont + 1 : cont,
      state: cas === "add" ? true : false,
    };
    if (edit.number === 1) {
      return;
    }
    editRange(edit);
    let manda = cas === "add" ? cont : cont - 2;
    setQuestionsRender(manda);
  };

  const setQuestionsRender = (number: number) => {
    let y = number * 10;
    setNumbers(y);
    let x = questoes.slice(y + 0, y + 10);
    setRenderQuestion(x);
  };

  useEffect(() => {
    console.warn(questoes)
    const x = questoes.slice(0, 10);
    setRenderQuestion(x);
  }, [questoes]);

  const checkQuestionResponse = useCallback(() =>  {
    setAlwaysResponses(true);
    renderQuestion.map((question: IQuestion) => {
      if (!question.respondido) {
        setAlwaysResponses(false);
      }
    });
  }, [renderQuestion])

  useEffect(() => {
    checkQuestionResponse();
  }, [checkQuestionResponse, renderQuestion]);

  const countTrue = () => {
    let cont = 0;
    for (let x = 0; x < ranger.length; x++) {
      if (ranger[x]?.state === true) {
        cont++;
      }
    }
    return cont;
  };
  const setQuestionResponse = (question: IQuestion, alter: IAlternativa) => {
    question.respondido = alter.id;
  };

  const postFormaMentis = useCallback(async () => {
    let respostas: IResponse[] = [];
    questoes.map((question) => {
      let answer = {
        questaoId: question.id,
        respostaSelecionadaId: question.respondido,
      };
      respostas = [...respostas, answer];
    });
    const post = {
      nome: userState.nome,
      email: userState.email,
      idade: lastUser.idade,
      curso: lastUser.curso,
      semestre: lastUser.semestre,
      respostas: respostas,
    };
    let x = 0;
    try {
      const { data } = await postForm(post);
      router.push(`/forma-mentis/resultado/${data.hash}`);
    } catch (err) {
      
      x = 1;
    } finally {
      if (x === 0) {
      }
    }
  }, [lastUser.curso, lastUser.idade, lastUser.semestre, questoes, router, userState.email, userState.nome]);

  let contador = 0;

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
        <Main>
          <div>
            <RangeSlider />
          </div>
          <DivConteinerTitle>
            <h1>
              Leia atentamente as questões abaixo e marque a alternativa que
              melhor descreve a sua visão da situação exposta em cada questão.
              Escolha uma alternativa de cada questão correspondente.
            </h1>
          </DivConteinerTitle>
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
                {finished === false ? (
                  <>
                    {renderQuestion?.map((question) => {
                      contador = contador + 1;
                      return (
                        <Question
                          contador={contador}
                          numbers={numbers}
                          question={question}
                          setNewAnswer={setQuestionResponse}
                          key={question.id}
                          check={checkQuestionResponse}
                          selected={question.respondido}
                        />
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
                        {countTrue() === 7 ? (
                          <>
                            {alwaysResponses === true ? (
                              <Button
                                href="#container"
                                onClick={() => {
                                  setFinished(true);
                                }}
                              >
                                AVANÇAR
                              </Button>
                            ) : (
                              <Button off>AVANÇAR</Button>
                            )}
                          </>
                        ) : (
                          <>
                            {alwaysResponses === true ? (
                              <Button
                                onClick={() => {
                                  prox("add");
                                  checkQuestionResponse();
                                }}
                                href="#container"
                              >
                                AVANÇAR
                              </Button>
                            ) : (
                              <Button off>AVANÇAR</Button>
                            )}
                          </>
                        )}
                      </div>
                    </DivButtons>
                  </>
                ) : (
                  <>
                    <DivConteinerTitle>
                      <p>Estamos quase concluindo...</p>
                    </DivConteinerTitle>
                    <DivInputs>
                      <label htmlFor="idade">Idade</label>
                      <input
                        type="number"
                        id="idade"
                        name="idade"
                        value={lastUser.idade}
                        onChange={(e) => {
                          const inputValue = +e.target.value;
                          const nonNegativeValue = inputValue < 0 ? 0 : inputValue;
                          setLastUser({ ...lastUser, idade: nonNegativeValue });
                        }}
                        placeholder="Insira sua idade"
                      />
                    </DivInputs>
                    <DivInputs>
                      <label htmlFor="curso">Curso de Graduação</label>
                      <select
                        value={lastUser.curso}
                        onChange={(e) => {
                          setLastUser({ ...lastUser, curso: +e.target.value });
                        }}
                      >
                        <option value={1}>Administração</option>
                        <option value={2}>Sistemas de Informação</option>
                        <option value={3}>Ontopsicologia</option>
                        <option value={4}>Direito</option>
                        <option value={5}>Pedagogia</option>
                        <option value={6}>Ciências Contábeis</option>
                      </select>
                      {/* <input
                      type="text"
                      id="curso"
                      name="curso"
                      value={lastUser.curso}
                      placeholder="Selecione seu cursor de graduação"
                    /> */}
                    </DivInputs>
                    <DivInputs>
                      <label htmlFor="semestre">Semestre ou Módulo</label>
                      <select
                        value={lastUser.semestre}
                        onChange={(e) => {
                          setLastUser({
                            ...lastUser,
                            semestre:+ e.target.value,
                          });
                        }}
                      >
                        <option value={1}>1º semestre/módulo</option>
                        <option value={2}>2º semestre/módulo</option>
                        <option value={3}>3º semestre/módulo</option>
                        <option value={4}>4º semestre/módulo</option>
                        <option value={5}>5º semestre/módulo</option>
                        <option value={6}>6º semestre/módulo</option>
                        <option value={7}>7º semestre</option>
                        <option value={8}>8º semestre</option>
                        <option value={9}>9º semestre</option>
                        <option value={10}>10º semestre</option>
                      </select>
                      {/* <input
                      type="number"
                      id="semestre"
                      name="semestre"
                      value={lastUser.semestre}
                      placeholder="Selecione o seu modulo ou semestre"
                    /> */}
                    </DivInputs>
                    <DivButtons>
                      <div>
                        <Button
                          href="#container"
                          onClick={() => setFinished(false)}
                          turnBack
                        >
                          VOLTAR
                        </Button>
                        <div />
                        {lastUser.idade ? (
                          <Button
                            onClick={() => {
                              postFormaMentis();
                            }}
                          >
                            FINALIZAR
                          </Button>
                        ) : (
                          <Button off>FINALIZAR</Button>
                        )}
                      </div>
                    </DivButtons>
                  </>
                )}
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

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const data = await getQuestions();
    return {
      props: {
        questoes: data
      },
    }
  } catch (err) {
    return {
      props: {
        questoes: []
      }, 
    }
  } 
}

export default Formulario;
