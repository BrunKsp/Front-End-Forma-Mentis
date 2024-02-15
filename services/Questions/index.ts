import { api } from "services";

const getQuestions = async () => {
  var {data} = await api.get("/questoes");
  return data;
};

const postForm = async (data: any) => {
  return await api.post("questionario", data);
};

const getResultado = async (hash: string) => {
  return await api.get(`questionario/resultado/${hash}`);
};

const getGabarito = async (hash: string) => {
  return await api.get(`questionario/gabarito/${hash}`);
};

export { getQuestions, postForm, getResultado, getGabarito };
