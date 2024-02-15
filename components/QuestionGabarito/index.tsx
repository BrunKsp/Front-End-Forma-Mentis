import React, { FC, useState } from "react";
import { Button, MainAlter } from "../Question/styles";
import {
  CardMainQuestion,
  DivAlternative,
  DivQuestion,
  TextAlter,
  TitleQuestion,
} from "./styles";

interface IAlternativa {
  pergunta: string;
  ordem: string;
  respostaSelecionada: boolean;
  respostaCorreta: boolean;
}
interface IQuestion {
  questao: string;
  dimensao: string;
  numero: number;
  perguntas: IAlternativa[];
}

interface IProps {
  question: IQuestion;
  contador: number;
  numbers: number;
}

const QuestionGabarito: FC<IProps> = ({ question, contador, numbers }) => {
  return (
    <>
      <CardMainQuestion>
        <DivQuestion>
          <TitleQuestion red>{contador + numbers}.</TitleQuestion>
          <TitleQuestion>{question?.questao}</TitleQuestion>
        </DivQuestion>
        <DivAlternative>
          {question.perguntas.map((alter) => {
            return (
              <>
                {alter.respostaSelecionada && alter.respostaCorreta ? (
                  <MainAlter>
                    <Button color={"#09772E"}>
                      <div />
                    </Button>
                    <TextAlter color={"#09772E"}>{alter.pergunta}</TextAlter>
                  </MainAlter>
                ) : (
                  <>
                    {alter.respostaSelecionada ? (
                      <MainAlter>
                        <Button
                          color={alter.respostaSelecionada ? "#C61132" : "#555"}
                        >
                          {alter.respostaSelecionada ? <div /> : <></>}
                        </Button>
                        <TextAlter
                          color={alter.respostaSelecionada ? "#C61132" : "#000"}
                        >
                          {alter.pergunta}
                        </TextAlter>
                      </MainAlter>
                    ) : (
                      <MainAlter>
                        <Button
                          color={alter.respostaCorreta ? "#09772E" : "#555"}
                        >
                        </Button>
                        <TextAlter
                          color={alter.respostaCorreta ? "#09772E" : "#000"}
                        >
                          {alter.pergunta}
                        </TextAlter>
                      </MainAlter>
                    )}
                  </>
                )}
              </>
            );
          })}
        </DivAlternative>
      </CardMainQuestion>
    </>
  );
};

export default QuestionGabarito;
