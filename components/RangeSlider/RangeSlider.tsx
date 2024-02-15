import React, { FC, useState } from "react";

import { MainRanger, Main, P, Div } from "./styles";

import { useRange } from "../../context/RangerContext/RangerContext";

interface IProps {
  tela?: number;
}

interface RangerContext {
  number: number;
  state: boolean;
}
const RangeSlider: FC<IProps> = ({ tela }) => {
  const { ranger, editRange } = useRange();
  return (
    <Main>
      <MainRanger>
        {ranger.map((r) => (
          <>
            {r.number === 1 ? (
              <></>
            ) : (
              <Div color={r.state === true ? "#c61132" : "#ccc"} />
            )}
            <P color={r.state === true ? "#c61132" : "#ccc"}>{r.number}</P>
          </>
        ))}
      </MainRanger>
    </Main>
  );
};
export default RangeSlider;
