import React, { FC, useState } from "react";
import {
  Button,
  CardMainQuestion,
  DivAlternative,
  DivQuestion,
  MainAlter,
  TextAlter,
  TitleQuestion,
} from "./styles";

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

interface IProps {
  question: IQuestion;
  contador: number;
  numbers: number;
  setNewAnswer: (question: IQuestion, alter: IAlternativa) => void;
  check: () => void;
  selected: string;
}

const Question: FC<IProps> = ({
  question,
  contador,
  numbers,
  setNewAnswer,
  check,
  selected,
}) => {
  const [valueButton, setValueButton] = useState(selected);
  const press = (value: string) => {
    setValueButton(value);
  };
  let cont = 0;

  return (
    <>
      <CardMainQuestion key={question.id}>
        <DivQuestion>
          <TitleQuestion red>{contador + numbers}.</TitleQuestion>
          <TitleQuestion>{question?.questao}</TitleQuestion>
        </DivQuestion>
        <DivAlternative>
          {question.perguntas?.map((alter) => {
            return (
              <MainAlter
                key={alter.id}
                onClick={() => {
                  setNewAnswer(question, alter);
                  press(alter.id);
                  check();
                }}
              >
                <Button color={alter.id === valueButton ? "#C61132" : "#666"}>
                  {alter.id === valueButton ? <div /> : <></>}
                </Button>
                <TextAlter
                  color={alter.id === valueButton ? "#C61132" : "#000"}
                >
                  {alter.pergunta}
                </TextAlter>
              </MainAlter>
            );
          })}
        </DivAlternative>
      </CardMainQuestion>
    </>
  );
};

export default Question;
