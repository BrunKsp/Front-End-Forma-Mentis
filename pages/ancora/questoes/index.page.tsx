import Header from "@/components/Header";
import Seo from "@/components/Seo";
import React, { useEffect, useState, useCallback, FC } from "react";

import {
  SubHeader,
  Main,
  DivContainerAviso,
  CardMainQuestion,
  ButtonAdicionar,
  MainFooter,
  DivButtons,
  DivButtonsReturn,
  DivAdicionar,
  Button,
  ButtonSelecione,
  TitleQuestion,
  DivConteinerTitle,
  DivInputs,
  DivRow,
} from "./styles";
import RangeSliderAncora from "@/components/RangeSliderAncora/RangeSliderAncora";
import Footer from "@/components/Footer/Footer";
import { useRange } from "../../../context/RangerContext/RangerContext";
import { getQuestionsAncora, postFormAncora } from "services/AncoraQuestion";
import { useSelector } from "react-redux";
import { selectUserState, setUserState } from "store/userSlice/userSlice";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { finished } from "stream";
import QuestionAncora from "@/components/QuestionAncora";
import { useRangeAncora } from "context/RangerContext/RangerContextAncora";
import ResponseAncora from "@/components/ResponseAncora/ResponseAncora";
import Resultado from "../resultado/[hash].page";

interface IQuestion {
  id: string;
  questaoAncora: string;
  numero: number;
  respondido: number;
  questao_extra?: boolean;
}
interface IAlternativa {
  id: string;
  pergunta: string;
  ordem: string;
}

interface RangerContext {
  number: number;
  state: boolean;
}
interface IResponse {
  id: string;
  valorResposta: number;
  questao_extra?: boolean;
}
interface IUser {
  idade: number;
  curso: number;
  semestre: number;
}
interface FormularioProps {
  questoes: IQuestion[];
}

const Ancora = ({ questoes }: FormularioProps) => {
  const userState = useSelector(selectUserState);
  const { editRangeAncora, ranger } = useRangeAncora();
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

  const checkQuestionResponse = useCallback(() => {
    setAlwaysResponses(true);
    renderQuestion.map((questaoAncora: IQuestion) => {
      if (!questaoAncora.respondido) {
        setAlwaysResponses(false);
      }
    });
  }, [renderQuestion]);

  useEffect(() => {
    checkQuestionResponse();
  }, [checkQuestionResponse, renderQuestion]);

  const setQuestionsRender = (number: number) => {
    let y = number * 10;
    setNumbers(y);
    let x = questoes.slice(y + 0, y + 10);
    setRenderQuestion(x);
  };

  useEffect(() => {
    console.warn(questoes);
    const x = questoes.slice(0, 10);
    setRenderQuestion(x);
  }, [questoes]);

  const countTrue = () => {
    let cont = 0;
    for (let x = 0; x < ranger.length; x++) {
      if (ranger[x]?.state === true) {
        cont++;
      }
    }
    return cont;
  };
  const setQuestionResponse = (questaoAncora: IQuestion, alter: number) => {
    questaoAncora.respondido = alter;
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

  const [maioresNotas, setMaioresNotas] = useState<IQuestion[]>([]);
  const [final, setFinal] = useState(false);
  const tamanho = 15;

  const MaisVotados = (num: number) => {
    const MaiorNota = questoes.filter((question) => {
      if (question.respondido >= num) {
        return question;
      }
    });
    if (MaiorNota.length <= 3) {
      MaisVotados(num - 1);
    } else {
      const maiorNotaOrd = MaiorNota.sort((a, b) => a.numero - b.numero);
      setMaioresNotas(maiorNotaOrd);
      setFinal(true);
    }
  };

  const [selecionados, setSelecionados] = useState(0);

  const selectQuestion = (question: IQuestion) => {
  
    if (!question.questao_extra) {
      if (selecionados >= 3) {
        return;
      }
      setSelecionados(selecionados + 1);
      question.questao_extra = true;
    } else {
      question.questao_extra = !question.questao_extra;
      setSelecionados(selecionados - 1);
    }
    
    const removerId = maioresNotas?.filter((maior) => {
      if (maior.id !== question.id) {
        return maior;
      }
    });

    const OrdenarLista = [...removerId, question];

    const ordenado = OrdenarLista.sort((a, b) => a.numero - b.numero);

    setMaioresNotas(ordenado);
  };

  const postAncora = useCallback(async () => {
    let respostas: IResponse[] = [];
    questoes.map((questaoAncora) => {
      let answer = {
        id: questaoAncora.id,
        valorResposta: questaoAncora.respondido,
        questao_extra:questaoAncora.questao_extra
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
      const { data } = await postFormAncora(post);
      
      router.push(`/ancora/resultado/${data.hash}`);

    } catch (err) {
      
      x = 1;
    } finally {
      if (x === 0) {
      }
    }
  }, [
    lastUser.curso,
    lastUser.idade,
    lastUser.semestre,
    questoes,
    router,
    userState.email,
    userState.nome,
  ]);

  let contador = 0;

  return (
    <div>
      <Seo title="Âncora de Carreira" description="Teste Âncora de Carreira" />
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
            <RangeSliderAncora />
          </div>
          <DivContainerAviso>
            {final === false ?(
                <>
                  <h1>
                    Leia atentamente as questões abaixo e marque a alternativa que melhor descreve a sua visão da situação exposta em cada questão. Escolha uma alternativa de cada questão correspondente.
                  </h1>
                  <h3>
                    1 — A afirmação nunca é verdadeira para mim.<br/>
                    2 a 3 — Ocasionalmente é verdadeira para mim. <br/>
                    4 a 5 — Frequentemente é verdadeira para mim. <br/>
                    6 — Sempre é verdadeira para mim.<br/>
                  </h3>
                </>
              ):(
                <>
                   <h1>
                    Analise suas respostas e SELECIONE TRÊS ITENS que lhe pareçam mais verdadeiros e dê a cada um destes itens um adicional de quatro (4) pontos.
                  </h1>
                </>
              )}
          </DivContainerAviso>
          {final === true ? (
            <>
              <CardMainQuestion>
                {maioresNotas.map((question) => (
                  <>
                  <DivRow>
                    <DivAdicionar>
                      <ButtonAdicionar
                        ativo={question.questao_extra === true ? true : false}
                        tam={tamanho}
                        onClick={() => selectQuestion(question)}
                        >
                        <div></div>
                      </ButtonAdicionar>
                    </DivAdicionar>
                    <div>
                      <TitleQuestion>{question.questaoAncora}</TitleQuestion>
                    </div>
                        </DivRow>
                  </>
                ))}
                <DivButtonsReturn>
                  <Button
                    onClick={() => {
                      setFinal(false);
                    }}
                    turnBack
                  >
                    VOLTAR
                  </Button>
                  <Button
                    onClick={() => {
                      postAncora();
                    }}
                  >
                    FINALIZAR
                  </Button>
                </DivButtonsReturn>
              </CardMainQuestion>
            </>
          ) : (
            <CardMainQuestion>
              {finished === false ? (
                <>
                  {renderQuestion?.map((questaoAncora) => {
                    contador += 1;

                    return (
                      <QuestionAncora
                        contador={contador}
                        numbers={numbers}
                        questaoAncora={questaoAncora}
                        setNewAnswer={setQuestionResponse}
                        key={questaoAncora.id}
                        check={checkQuestionResponse}
                        selected={questaoAncora.respondido}
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
                            prox("rem");
                          }}
                          turnBack
                        >
                          VOLTAR
                        </Button>
                      )}
                      <div />
                      {countTrue() === 4 ? (
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
                              href="#container"
                              onClick={() => {
                                prox("add");
                                checkQuestionResponse();
                              }}
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
                      <option value={5}>Ciências Contábeis</option>
                      <option value={6}>Pedagogia</option>
                    </select>
                  </DivInputs>
                  <DivInputs>
                    <label htmlFor="semestre">Semestre ou Módulo</label>
                    <select
                      value={lastUser.semestre}
                      onChange={(e) => {
                        setLastUser({
                          ...lastUser,
                          semestre: +e.target.value,
                        });
                      }}
                    >
                      <option value={1}>1º semestre/Módulo</option>
                      <option value={2}>2º semestre/Módulo</option>
                      <option value={3}>3º semestre/Módulo</option>
                      <option value={4}>4º semestre/Módulo</option>
                      <option value={5}>5º semestre/Módulo</option>
                      <option value={6}>6º semestre/Módulo</option>
                      <option value={7}>7º semestre</option>
                      <option value={8}>8º semestre</option>
                      <option value={9}>9º semestre</option>
                      <option value={10}>10º semestre</option>
                    </select>
                  </DivInputs>
                  <DivButtons>
                    <div>
                      <Button
                        href="#conatiner"
                        onClick={() => setFinished(false)}
                        turnBack
                      >
                        VOLTAR
                      </Button>
                    </div>
                    {lastUser.idade ? (
                      <Button
                        onClick={() => {
                          MaisVotados(6);
                        }}
                      >
                        FINALIZAR
                      </Button>
                    ) : (
                      <Button off>FINALIZAR</Button>
                    )}
                  </DivButtons>
                </>
              )}
            </CardMainQuestion>
          )}
        </Main>
      </div>
      <MainFooter>
        <Footer />
      </MainFooter>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const data = await getQuestionsAncora();
    return {
      props: {
        questoes: data,
      },
    };
  } catch (err) {
    return {
      props: {
        questoes: [],
      },
    };
  }
};

export default Ancora;
