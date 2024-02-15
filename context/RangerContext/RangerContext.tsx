import React, { createContext, FC, useContext, useState } from "react";

interface IRanger {
  number: number;
  state: boolean;
}

interface IContext {
  ranger: IRanger[];
  editRange: (updatedItem: IRanger) => void;
}

interface IChildren {
  children: React.ReactNode;
}

export const RangerContext = createContext({} as IContext);

export const RangerProvider: FC<IChildren> = ({ children }) => {
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
    {
      number: 5,
      state: false,
    },
    {
      number: 6,
      state: false,
    },
    {
      number: 7,
      state: false,
    },
  ]);

  const addItens = (item: IRanger) => {
    setRanger([...ranger, item]);
  };

  const editRange = (updatedItem: IRanger) => {
    let newArr = ranger.map((item) => {
        if (item.number === updatedItem.number) return updatedItem;
        else return item;
      });
      setRanger(newArr);
  };

  return (
    <RangerContext.Provider value={{ ranger, editRange }}>
      {children}
    </RangerContext.Provider>
  );
};

export const useRange = () => {
    return useContext(RangerContext);
  };
