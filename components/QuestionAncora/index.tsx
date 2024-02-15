import React, { FC, useState } from "react";
import {
  Button,
  CardMainQuestion,
  DivAlternative,
  DivQuestion,
  MainAlter,
  TextAlter,
  TitleQuestion,
  DivResponse,
} from "./styles";
import ResponseAncora from "../ResponseAncora/ResponseAncora";

interface IQuestion {
  id: string;
  questaoAncora: string;
  numero: number;
  respondido: number;
}

interface IProps {
  questaoAncora: IQuestion;
  contador: number;
  numbers: number;
  setNewAnswer?: (question: IQuestion, alter: number) => void;
  check: () => void;
  selected: number;
}

const QuestionAncora: FC<IProps> = ({
  questaoAncora,
  contador,
  numbers,
  setNewAnswer,
  check,
  selected,
}) => {
  const [valueButton, setValueButton] = useState(selected);
  const press = (value: number) => {
    setValueButton(value);
  };
  let cont = 0;
  const resposta = (value: number) => {
    if (setNewAnswer) {
      setNewAnswer(questaoAncora, value);
    }
    check();
  };
  return (
    <>
      <CardMainQuestion key={questaoAncora?.id}>
        <DivQuestion>
          <TitleQuestion red>{contador + numbers}.</TitleQuestion>
          <TitleQuestion>{questaoAncora?.questaoAncora}</TitleQuestion>
        </DivQuestion>
        <DivResponse>
          <ResponseAncora question={questaoAncora} setNewAnswer={resposta} />
        </DivResponse>
      </CardMainQuestion>
    </>
  );
};

export default QuestionAncora;
