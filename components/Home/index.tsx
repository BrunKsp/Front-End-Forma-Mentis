import React, { FC, useState } from "react";
import {
  Main,
  Text,
  Text2,
  ViewButton,
  Button,
  Input,
  ViewInputs,
  ButtonOff,
  NewButton,
  NewAllingCenter,
} from "./styles";
import Link from "next/link";
import { setCookie, parseCookies } from "nookies";



interface IProps {
  children?: React.ReactNode;
  onPress?: Function;
}
const Home: FC<IProps> = ({ children, onPress }) => {
  const [valueName, setValueName] = useState("");
  const [valueSobrenome, setValueSobrenome] = useState("");


  const onChangeText = (event: any, param: any) => {
    param(event.target.value);
  };
  const generateCookie = () => {
    setCookie(null, "USER_NAME", valueName, {
      path: "/",
      maxAge: 86400,
    });
    setCookie(null, "USER_LASTNAME", valueSobrenome, {
      path: "/",
      maxAge: 86400,
    });
  };
  return (
    <Main>
      <NewAllingCenter>
        <Text>Bem vindo ao teste Forma Mentis</Text>
        <Text2>
          O forma mentis é um método de análise comportamental do ser, aplicado
          em forma de questionário, onde se é dado ao indivíduo uma questão, a
          qual deve de ser respondida com alguma das três alternativas que serão
          dadas a elas. E com isso, é visado implementar esse questionário em
          forma de um web site, para que além de tornar a sua análise mais
          rápida, já que será feita de forma automática pelo sistema, também
          permitirá que o resultado do questionário seja mantido e compartilhado
          pelo indivíduo de maneira mais prática, já que o sistema deverá
          disponibilizar a opção de baixar o resultado, bem como enviar o mesmo
          para um email.
        </Text2>
        <Link href="/home">
          <NewButton type="button" value="Começar"></NewButton>
        </Link>
      </NewAllingCenter>

      {/* <ViewInputs>
        <Input
          type="text"
          placeholder="Nome"
          value={valueName}
          onChange={(e) => onChangeText(e, setValueName)}
        />
        <Input
          type="text"
          placeholder="Sobrenome"
          value={valueSobrenome}
          onChange={(e) => onChangeText(e, setValueSobrenome)}
        />
      </ViewInputs>
      {valueName !== "" && valueSobrenome !== "" ? (
        <ViewButton>
          <Link href="/formulario">
            <Button
              type="button"
              value="Ir para o formulario"
              onClick={() => generateCookie()}
            />
          </Link>
        </ViewButton>
      ) : (
        <ViewButton>
          <ButtonOff type="button" value="Ir para o formulario" />
        </ViewButton>
      )} */}
    </Main>
  );
};
export default Home;
