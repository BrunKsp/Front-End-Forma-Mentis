import React, { useState } from "react";

import { MainCard, Divinputs, DivCheckBox, DivButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { selectUserState, setUserState } from "store/userSlice/userSlice";

interface IUser {
  nome: string;
  email: string;
}
const CardFormaMentis = () => {
  const userState = useSelector(selectUserState);
  const [policy, setPolicy] = useState(false);
  const [newUser, setNewUser] = useState<IUser>(userState);
  const dispatch = useDispatch();

  const setUser = (user: IUser) => {
    dispatch(setUserState(user));
    window.location.replace("/forma-mentis/questoes")
  };
  return (
    <MainCard>
      <h1>
        Para iniciar o seu Teste do Forma Mentis, preencha abaixo as
        informações de cadastro do aluno.
      </h1>
      <Divinputs>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Insira seu nome completo"
          value={newUser.nome}
          onChange={(event) =>
            setNewUser({ ...newUser, nome: event.target.value })
          }
        />
      </Divinputs>
      <Divinputs>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Insira seu e-mail"
          value={newUser.email}
          onChange={(event) =>
            setNewUser({ ...newUser, email: event.target.value })
          }
        />
      </Divinputs>
      <DivCheckBox>
        <input
          type="checkbox"
          id="check"
          onClick={() => {
            setPolicy(!policy);
          }}
        />
        <label htmlFor="check">
          Ao informar meus dados, eu concordo com a Política de Privacidade e
          Segurança.
        </label>
      </DivCheckBox>
      {policy === true && newUser.email !== "" && newUser.nome !== "" ? (
          <>
        <DivButton onClick={() => setUser(newUser)}>
          <p>INICIAR TESTE FORMA MENTIS</p>
        </DivButton>
        </>
      ) : (
        <>
        <DivButton primary> 
          <p>INICIAR TESTE FORMA MENTIS</p>
        </DivButton>
        </>
      )}
    </MainCard>
  );
};
export default CardFormaMentis;
