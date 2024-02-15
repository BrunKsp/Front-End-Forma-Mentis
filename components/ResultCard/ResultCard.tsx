import Dimensoes from "pages/forma-mentis/resultado/dimensoes";
import React, { FC, useEffect, useState } from "react";
import {
  DivMinFooter,
  DivResultCell,
  DivSubCat,
  MainItem,
  MainTitle,
  MarginMain,
  MinTextCat,
  NumB,
  ResultFooter,
  ResultFooterSub,
  ResultSub,
  SubTextPorcent,
  TextCat,
  TextDescription,
  TextDim,
  TextDimNext,
  TextFooterMax,
  TextFooterMaxTop,
  TextFooterMin,
  TextFooterMinTitle,
  TextSubCat,
  TextSubCatLast,
} from "./style";
interface IResult {
  acertos: number;
  acertosPrevistos: number;
}

interface IResponse {
  SentimentoResponsabilidade: IResult;
  EspiritoIniciativaResolucaoProblemas: IResult;
  Vontade: IResult;
  RelacaoFuncionalTime: IResult;
  Autonomia: IResult;
}

interface ICompleteResponse {
  resultado: IResponse;
  nome: string;
  idade: number;
  semestre: number;
  curso: number;
  email: string;
}

interface IParams {
  infos?: ICompleteResponse;
  calcPorcent: (question: number, correct: number) => number;
}

interface ICampos {
  name: string;
  points: number;
  questions: number;
  acertos: number;
}

const ResultCard: FC<IParams> = ({ infos, calcPorcent }) => {
  const [renderDim, setRenderDim] = useState<ICampos[]>([]);
  useEffect(() => {
    if (infos) {
      const dimansoes = [
        {
          name: "SentimentoResponsabilidade",
          points: calcPorcent(
            infos?.resultado.SentimentoResponsabilidade.acertosPrevistos,
            infos?.resultado.SentimentoResponsabilidade.acertos
          ),
          questions:
            infos?.resultado.SentimentoResponsabilidade.acertosPrevistos,
          acertos: infos?.resultado.SentimentoResponsabilidade.acertos,
        },
        {
          name: "Autonomia",
          points: calcPorcent(
            infos?.resultado.Autonomia.acertosPrevistos,
            infos?.resultado.Autonomia.acertos
          ),
          questions: infos?.resultado.Autonomia.acertosPrevistos,
          acertos: infos?.resultado.Autonomia.acertos,
        },
        {
          name: "Vontade",
          points: calcPorcent(
            infos?.resultado.Vontade.acertosPrevistos,
            infos?.resultado.Vontade.acertos
          ),
          questions: infos?.resultado.Vontade.acertosPrevistos,
          acertos: infos?.resultado.Vontade.acertos,
        },
        {
          name: "EspiritoIniciativaResolucaoProblemas",
          points: calcPorcent(
            infos?.resultado.EspiritoIniciativaResolucaoProblemas
              .acertosPrevistos,
            infos?.resultado.EspiritoIniciativaResolucaoProblemas.acertos
          ),
          questions:
            infos?.resultado.EspiritoIniciativaResolucaoProblemas
              .acertosPrevistos,
          acertos:
            infos?.resultado.EspiritoIniciativaResolucaoProblemas.acertos,
        },
        {
          name: "RelacaoFuncionalTime",
          points: calcPorcent(
            infos?.resultado.RelacaoFuncionalTime.acertosPrevistos,
            infos?.resultado.RelacaoFuncionalTime.acertos
          ),
          questions: infos?.resultado.RelacaoFuncionalTime.acertosPrevistos,
          acertos: infos?.resultado.RelacaoFuncionalTime.acertos,
        },
      ];
      dimansoes.sort(function (a, b) {
        if (a.points > b.points) {
          return -1;
        }
        if (a.points < b.points) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
      setRenderDim(dimansoes);
    }
  }, [calcPorcent, infos]);

  const setNivel = (porcent: number, state: string) => {
    if (state !== "RelacaoFuncionalTime") {
      if (porcent < 40) {
        return "Baixo";
      }
      if (porcent < 75) {
        return "Médio";
      }
      return "Alto";
    }
    if (porcent < 35) {
      return "Baixo";
    }
    if (porcent < 65) {
      return "Médio";
    }
    return "Alto";
  };

  function setAcertosFull(inform: ICompleteResponse) {
    let numb =
      inform?.resultado.SentimentoResponsabilidade.acertos +
      inform?.resultado.Autonomia.acertos +
      inform?.resultado.EspiritoIniciativaResolucaoProblemas.acertos +
      inform?.resultado.RelacaoFuncionalTime.acertos +
      inform?.resultado.Vontade.acertos;
    return numb;
  }
  let cont = 0;
  return (
    <div>
      <MarginMain>
        <MainItem>
          <div></div>
          <TextDim>Dimensão</TextDim>
          <TextDimNext>Pontos</TextDimNext>
          <TextDimNext>%</TextDimNext>
          <TextDimNext>Nível</TextDimNext>
        </MainItem>
        {renderDim?.map((render: any) => {
          cont = cont + 1;
          let x = Dimensoes(render.name);
          return (
            <MainItem key={render?.name}>
              <NumB>{cont}º</NumB>
              <div>
                <TextCat style={{ color: x?.color }}>{x?.title}</TextCat>
                <TextDescription>{x?.mesagem}</TextDescription>
              </div>
              <DivResultCell />
              <DivResultCell>
                <p>pontos</p>
                <p>%</p>
                <p>Nível</p>
                <div>
                  <p>{render.acertos}</p>
                  <h1>/{render.questions}</h1>
                </div>
                <div>
                  <p>{render.points.toFixed(1)}</p>
                  <h1>%</h1>
                </div>
                <div>
                  <p>{setNivel(render.points, render.name)}</p>
                </div>
              </DivResultCell>
              <DivSubCat>
                <TextSubCat>{render.acertos}</TextSubCat>
                <MinTextCat>/{render.questions}</MinTextCat>
              </DivSubCat>
              <DivSubCat>
                <TextSubCat>{render.points.toFixed(1)}</TextSubCat>
                <MinTextCat>%</MinTextCat>
              </DivSubCat>
              <DivSubCat>
                <TextSubCatLast>
                  {setNivel(render.points, render.name)}
                </TextSubCatLast>
              </DivSubCat>
            </MainItem>
          );
        })}
      </MarginMain>
      <ResultFooter>
        <ResultFooterSub>
          <p></p>
          <TextFooterMinTitle>Valor da forma mentis</TextFooterMinTitle>
        </ResultFooterSub>
        <ResultSub>
          <div>
            <TextFooterMaxTop>Total</TextFooterMaxTop>
            <DivMinFooter>
              <TextFooterMax>
                {infos ? setAcertosFull(infos) : <></>}
              </TextFooterMax>
              <SubTextPorcent>/62</SubTextPorcent>
            </DivMinFooter>
          </div>
          <div>
            <TextFooterMaxTop>%</TextFooterMaxTop>
            <DivMinFooter>
              <TextFooterMax>
                {infos ? (
                  calcPorcent(62, setAcertosFull(infos)).toFixed(1)
                ) : (
                  <></>
                )}
              </TextFooterMax>
              <SubTextPorcent>%</SubTextPorcent>
            </DivMinFooter>
          </div>
          <div>
            <TextFooterMaxTop>Nível</TextFooterMaxTop>
            <DivMinFooter>
              <TextFooterMax>
                {infos ? (
                  setNivel(calcPorcent(62, setAcertosFull(infos)), "")
                ) : (
                  <></>
                )}
              </TextFooterMax>
            </DivMinFooter>
          </div>
        </ResultSub>
      </ResultFooter>
    </div>
  );
};
export default ResultCard;
