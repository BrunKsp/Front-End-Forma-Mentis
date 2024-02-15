import Dimensoes from "./Search";
import React, { FC, useEffect, useState } from "react";
import {
  MainItem,
  MarginMain,
  ResultFooter,
  TextDim,
  TextDimNext,
  TextSubCat,
} from "./styles";

interface ITotal {
  valorTotal: number;
}
interface IResults {
  Autonomia: ITotal;
  CompetenciaTecnicoProfisional: ITotal;
  DesafioPuro: ITotal;
  Empreendorismo: ITotal;
  EstiloDeVida: ITotal;
  GerirPessoas: ITotal;
  Seguranca: ITotal;
  ServicoDedicacao: ITotal;
}
interface IParams {
  resultado: IResults;
}
interface ICampos {
  nome: string;
  pontos: number;
}

const ResultadoAncora: FC<IParams> = ({ resultado }) => {
  let cont = 0;
  const [elementos, setElementos] = useState();
  const [renderDimension, setRenderDimension] = useState<ICampos[]>([]);

  useEffect(() => {
    if (resultado) {
      const teste = [
        {
          nome: "Autonomia",
          pontos: resultado.Autonomia.valorTotal,
        },
        {
          nome: "ServicoDedicacao",
          pontos: resultado.ServicoDedicacao.valorTotal,
        },
        {
          nome: "GerirPessoas",
          pontos: resultado.GerirPessoas.valorTotal,
        },
        {
          nome: "EstiloDeVida",
          pontos: resultado.EstiloDeVida.valorTotal,
        },
        {
          nome: "DesafioPuro",
          pontos: resultado.DesafioPuro.valorTotal,
        },
        {
          nome: "Empreendorismo",
          pontos: resultado.Empreendorismo.valorTotal,
        },
        {
          nome: "Seguranca",
          pontos: resultado.Seguranca.valorTotal,
        },
        {
          nome: "CompetenciaTecnicoProfisional",
          pontos: resultado.CompetenciaTecnicoProfisional.valorTotal,
        },
      ];
      teste.sort(function(a, b) {
        if (a.pontos > b.pontos) {
          return -1;
        }
        if (a.pontos < b.pontos) {
          return 1;
        }
        return 0;
      });
      setRenderDimension(teste);
    }},[])


  const [result, setResult] = useState(0);

  const soma = () => {
    let add = 0;
    for (let i = 0; i < renderDimension.length; i++) {
      add += renderDimension[i].pontos;
    }
    setResult(add);
  };
  useEffect(() => {
    soma();
  }, [renderDimension]);

  return (
    <div>
      <MarginMain>
        <MainItem>
          <TextSubCat color="#000">Dimensão</TextSubCat>
          <TextSubCat color="#000">Pontos</TextSubCat>
        </MainItem>
        <>
          {renderDimension.map((item) => {
            const getItem = Dimensoes(item.nome);
            return (
              <MainItem key={cont++}>
                <div>
                  <TextSubCat color={getItem?.color}>
                    {getItem?.title}
                  </TextSubCat>
                  <TextDim>{getItem?.mesagem}</TextDim>
                </div>
                <TextDimNext>{item.pontos}</TextDimNext>
              </MainItem>
            );
          })}
        </>
      </MarginMain>
      <ResultFooter>
        <MainItem>
          <TextDim color="#fff">Total</TextDim>
          <TextDimNext color="#fff">{result}</TextDimNext>
        </MainItem>
      </ResultFooter>
    </div>
  );
};

export default ResultadoAncora;
