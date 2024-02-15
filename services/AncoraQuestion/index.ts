import { api } from "services";

const getQuestionsAncora = async () => {
    var { data } = await api.get ("/questao-ancora");
    return  data;

};

const getResultadoAncora = async (hash: string) => {
    return await api.get(`/questionario-ancora/resultado/${hash}`);
};

const postFormAncora = async (data: any) => {
    return await api.post("/questionario-ancora", data);
};

const getGabaritoAncora = async (hash: string) => {
    return await api.get(`/questionario-ancora/gabarito/${hash}`);
};

export { getGabaritoAncora, postFormAncora, getQuestionsAncora, getResultadoAncora };