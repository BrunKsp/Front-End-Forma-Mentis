function Dimensoes(dimensao: string) {
  switch (dimensao) {
    case "SentimentoResponsabilidade":
      return {
        title: "Sentimento de Responsabilidade",
        mesagem:
          "Interroga-se sobre as causas primeiras daquilo que acontece, buscando colher as suas eventuais responsabilidades. É maduro, tem um senso de responsabilidade e autocrítica construtiva e não atribui ao externo as culpas ou causas dos eventos que o envolvem.",
        color: "#009ba5"
      };
    case "Autonomia":
      return {
        title: "Autonomia",
        mesagem:
          "É capaz de agir livre e autonomamente, utilizando como referência o seu critério individual. Age sem se fazer influenciar por pessoas ou situações, ou sem que seja necessário o sustento ou assistência de um chefe ou de uma pessoa amiga: demonstra ter autonomia no operar, e isto está ligado também à autoestima e à maturidade.",
          color: "#c10068"
        };
    case "Vontade":
      return {
        title: "Vontade",
        mesagem:
          "É determinado, possui constância, empenho em direção a um objetivo individuado. Age um contínuo exercício da própria intencionalidade a fim de concretizar seus projetos.",
          color: "#8ca300"
        };
    case "EspiritoIniciativaResolucaoProblemas":
      return {
        title: "Espírito de Iniciativa e Resolução de Problemas",
        mesagem:
          "Sabe ser criativo diante de situações, propondo soluções idôneas aos problemas. Coloca-se diante de problemas de modo sintético e resolutivo. Não perde tempo, não é dispersivo, e sim orientado ao resultado. Sabe reconhecer as prioridades e adequá-las em uma resposta funcional. Vê o problema não como um obstáculo, mas sim como ocasião para estimular a própria inteligência.",
          color: "#9500db"
        };
    case "RelacaoFuncionalTime":
      return {
        title: "Relação Funcional no Time",
        mesagem:
          "É capaz de gerir relações de modo funcional, ou seja, em vantagem e referência a um escopo. É capaz de resolver uma situação sem fazer polêmica ou recorrer ao assistencialismo, mas criando harmonia entre as pessoas funcionais ao escopo. Sabe gerir as relações de maneira inteligente e com diplomacia.",
          color: "#e0a100"
        };
  }
}

export default Dimensoes;
