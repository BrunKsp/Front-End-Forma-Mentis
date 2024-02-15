import Link from "next/link";
import React, { FC, useState } from "react";
import { setCookie, parseCookies } from "nookies";

import { Main, TextTitle, Input, ViewInputs, NewButton, Form } from "./styles";
import { useRouter } from "next/router";

interface IPerson {
  nome?: string;
  sobrenome?: string;
  idade?: number;
  email?: string;
  curso?: string;
  semestre?: string;
}

interface IProps {
  children?: React.ReactNode;
}

const InsertData: FC<IProps> = ({ children }) => {
  const router = useRouter();
  const start: IPerson = {
    nome: "",
  };
  const [pessoa, setPessoa] = useState<IPerson>(start);

  const onChangeText = (event: any, param: any, classAlter: any) => {
    if (classAlter === "nome") {
      param((antes: any) => {
        return { ...antes, nome: event.target.value };
      });
    } else if (classAlter === "sobrenome") {
      param((antes: any) => {
        return { ...antes, sobrenome: event.target.value };
      });
    } else if (classAlter === "idade") {
      param((antes: any) => {
        return { ...antes, idade: event.target.value };
      });
    } else if (classAlter === "email") {
      param((antes: any) => {
        return { ...antes, email: event.target.value };
      });
    } else if (classAlter === "curso") {
      param((antes: any) => {
        return { ...antes, curso: event.target.value };
      });
    } else if (classAlter === "semestre") {
      param((antes: any) => {
        return { ...antes, semestre: event.target.value };
      });
    }
  };

  const onSubmitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setCookie(null, "PESSOA", JSON.stringify(pessoa), {
      path: "/",
      maxAge: 86400,
    });
    router.push("/formulario");
  };

  return (
    <Main>
      <TextTitle>Preencha seus dados</TextTitle>
      <Form onSubmit={onSubmitForm}>
        <ViewInputs>
          <Input
            type="text"
            placeholder="Nome"
            value={pessoa?.nome}
            onChange={(e) => onChangeText(e, setPessoa, "nome")}
            required
          />
          <Input
            type="text"
            placeholder="Sobrenome"
            value={pessoa?.sobrenome}
            onChange={(e) => onChangeText(e, setPessoa, "sobrenome")}
            required
          />
        </ViewInputs>
        <ViewInputs>
          <Input
            type="number"
            placeholder="Idade"
            value={pessoa?.idade}
            onChange={(e) => onChangeText(e, setPessoa, "idade")}
            required
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={pessoa?.email}
            onChange={(e) => onChangeText(e, setPessoa, "email")}
            required
          />
        </ViewInputs>
        <ViewInputs>
          <Input
            type="text"
            placeholder="Curso"
            value={pessoa?.curso}
            onChange={(e) => onChangeText(e, setPessoa, "curso")}
            required
          />
          <Input
            type="text"
            placeholder="Módulo/Semestre"
            value={pessoa?.semestre}
            onChange={(e) => onChangeText(e, setPessoa, "semestre")}
            required
          />
        </ViewInputs>
        {/* <Link href="/formulario"> */}
        <NewButton type="submit" value="Iniciar Teste" />
        {/* </Link> */}
      </Form>
    </Main>
  );
};
export default InsertData;
