import React, { createContext, FC, useContext, useState } from "react";

interface IRanger {
  number: number;
  state: boolean;
}

interface IContext {
  ranger: IRanger[];
  editRangeAncora: (updatedItem: IRanger) => void;
  zerar: ()=>void;
}

interface IChildren {
  children: React.ReactNode;
}

export const RangerContextAncora = createContext({} as IContext);

export const RangerProviderAncora: FC<IChildren> = ({ children }) => {
  const [ranger, setRanger] = useState<IRanger[]>([
    { number: 1, state: true },
    {
      number: 2,
      state: false,
    },
    {
      number: 3,
      state: false,
    },
    {
      number: 4,
      state: false,
    },
  ]);

  const addItens = (item: IRanger) => {
    setRanger([...ranger, item]);
  };

  const editRangeAncora = (updatedItem: IRanger) => {
    let newArr = ranger.map((item) => {
      if (item.number === updatedItem.number) return updatedItem;
      else return item;
    });
    setRanger(newArr);
  };

  const zerar = () => {
    setRanger([
      { number: 1, state: true },
      {
        number: 2,
        state: false,
      },
      {
        number: 3,
        state: false,
      },
      {
        number: 4,
        state: false,
      },
    ]);
  };

  return (
    <RangerContextAncora.Provider value={{ ranger, editRangeAncora, zerar }}>
      {children}
    </RangerContextAncora.Provider>
  );
};

export const useRangeAncora = () => {
  return useContext(RangerContextAncora);
};
