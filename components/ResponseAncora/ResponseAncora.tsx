import React, { FC, useEffect, useState } from "react";

import { Main, Button, Ocult, Aparecer, DivButton } from "./styles";

interface IParams {
  setNewAnswer?: (value: number) => void;
  question?: any;
}

const ResponseAncora: FC<IParams> = ({ setNewAnswer, question }) => {
  const tamanho = 15;
  const [valor, setValor] = useState(
    question.respostaSelecionada
      ? question.respostaSelecionada[0].valorResposta
      : question.respondido
  );

  useEffect(() => {
    setValor(
      question.respostaSelecionada
        ? question.respostaSelecionada[0].valorResposta
        : question.respondido
    );
  }, [question]);

  const alterarValor = (value: number) => {
    setValor(value);
    if (setNewAnswer) {
      setNewAnswer(value);
    }
  };
  return (
    <Main>
      <div>
        <p>Nunca é verdadeiro</p>
        <Ocult>
          <p>Sempre é verdadeiro</p>
        </Ocult>
        
      </div>
      {setNewAnswer ? (
        <DivButton>
          <Button
            onClick={() => alterarValor(1)}
            ativo={valor === 1}
            tam={tamanho}
          >
            <div />
          </Button>
          <Button
            onClick={() => alterarValor(2)}
            ativo={valor === 2}
            tam={tamanho - 2}
          >
            <div />
          </Button>
          <Button
            onClick={() => alterarValor(3)}
            ativo={valor === 3}
            tam={tamanho - 5}
          >
            <div />
          </Button>
          <Button
            onClick={() => alterarValor(4)}
            ativo={valor === 4}
            tam={tamanho - 5}
          >
            <div />
          </Button>
          <Button
            onClick={() => alterarValor(5)}
            ativo={valor === 5}
            tam={tamanho - 2}
          >
            <div />
          </Button>
          <Button
            onClick={() => alterarValor(6)}
            ativo={valor === 6}
            tam={tamanho}
          >
            <div />
          </Button>
        </DivButton>
      ) : (
        <DivButton>
          <Button ativo={valor === 1} tam={tamanho}>
            <div />
          </Button>
          <Button ativo={valor === 2} tam={tamanho - 2}>
            <div />
          </Button>
          <Button ativo={valor === 3} tam={tamanho - 5}>
            <div />
          </Button>
          <Button ativo={valor === 4} tam={tamanho - 5}>
            <div />
          </Button>
          <Button ativo={valor === 5} tam={tamanho - 2}>
            <div />
          </Button>
          <Button ativo={valor === 6} tam={tamanho}>
            <div />
          </Button>
        </DivButton>
      )}
      <Aparecer>
        <p>Sempre é verdadeiro</p>
      </Aparecer>
    </Main>
  );
};

export default ResponseAncora;
