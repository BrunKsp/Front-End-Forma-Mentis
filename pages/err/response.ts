export default function ResponseCode(code: any) {
  switch (code) {
    case "404":
      return {
        title: "Ops!",
        message: "Teste não encontrado!",
        subMessage:
          "Por favor, verifique se o link para acessar o resultado está completo.",
      };
    case "500":
      return {
        title: "Ops!",
        message: "Erro interno!",
        subMessage: "Aguarde alguns minutos e tente novamente.",
      };
    default :
      return {
        title: "Ops!",
        message: "Erro inesperado!",
        subMessage: "Aguarde alguns minutos e tente novamente.",
      }
  }
}
