function Dimensoes(dimensao: string) {
    switch (dimensao) {
        case "ServiçoDedicação":
            return {
                title: "Competência técnica/funcional",
                mesagem:
                "Pessoas tecnicamente ancoradas comprometem-se com uma carreira de especialização. Elas ficam motivadas quando são especialistas em um determinado assunto, buscam trabalhos desafiadores, querem testar o conhecimento e a habilidade que têm em sua área de atuação.São pessoas que não visam altos cargos administrativos (essas, normalmente, são mais generalistas), e sim cargos de especialista em uma determinada área.;",
                 color: "#009ba5"
            };
        case "GerirPessoas":
            return {
                title: "Dedicação a uma causa",
                mesagem:
                "Pessoas com essa âncora são orientadas em sua carreira por valores que querem imprimir em seu trabalho. Elas se voltam para os valores e se dedicam a causas, mais do que aos seus talentos e competências. São profissionais que querem, de alguma forma, contribuir para um mundo melhor por meio de seu trabalho.;",
                color: "#c10068"
            };
        case "EstiloVida":
            return {
                title: "Estilo de Vida",
                 mesagem:
                "Muitas vezes, interpretam essa âncora como sendo a de pessoas que não dão prioridade à sua carreira, mas não se trata disso. A questão é que pessoas ancoradas pelo estilo de vida buscam encontrar uma forma de integrar todas as suas necessidades: individuais, de família e de carreira. Podem ser altamente motivadas pelo trabalho, mas entendem que ele deve ser apenas uma parte de sua vida como um todo.São pessoas que querem, acima de tudo, flexibilidade. Por isso, olham mais para a atitude da empresa do que para o programa de trabalho propriamente dito. A diferença para a âncora da autonomia é que elas se adaptam bem ao ambiente organizacional, com suas regras e restrições, mas querem ter opções mais flexíveis de trabalho.;",
                color: "#8ca300"
            };
        case "DesafioPuro":
            return {
                title: "Desafio Puro",
                mesagem:
                "Nessa âncora, se encaixam profissionais que definem sucesso como a superação de obstáculos impossíveis ou como a capacidade de solucionar problemas insolúveis. São pessoas que necessitam sentir que podem conquistar qualquer coisa.A busca por desafios permeia a carreira de quase todo mundo, mas, para quem é ancorado no desafio puro, é o que norteia a sua trajetória — todas as suas decisões profissionais vão sempre ser com o objetivo de superar desafios cada vez maiores.;",
                color: "#e0a100"
            };
        case "Autonomia":
            return {
                title: "Autonomia e independência",
                mesagem:
                "Pessoas com essa âncora vão buscar, com o passar do tempo, uma carreira que possibilite maior independência, que permita impor suas próprias condições.A autonomia é inerente a qualquer ser humano, em níveis diferentes, mas quem tem fortemente essa âncora sente a necessidade de ser dono de seu próprio destino, fazer as coisas do seu jeito; por isso, vai organizar sua vida profissional em torno de trabalhos que lhe proporcionem mais escolha e poder de decisão.;",
                color: "#de1f43"
            };
        case "Empreendedorismo":
            return {
                title: "Criatividade empreendedora",
                mesagem:
                "Nessa âncora, estão os profissionais com tino para a criação de novos negócios e organizações. Não são pessoas necessariamente com criatividade artística, mas sim com um espírito empreendedor, que querem estabelecer ou reestruturar negócios próprios.Têm motivação para, desde cedo, iniciar empreendimentos para ganhar dinheiro. Vale ressaltar que o enfoque aqui não é a busca por autonomia, e sim pela criação de negócios.;",
                color: "#2427dc"
            };
        case "SegurancaEmprego":
            return {
                title: "Segurança e estabilidade",
                mesagem: 
                "Aqui se enquadram pessoas que precisam se sentir seguras no ambiente de trabalho. Elas buscam maior previsibilidade do futuro, querem “saber onde pisam”. São atraídas por empregos em empresas que oferecem essa estabilidade, com bons planos de aposentadoria e boa reputação. É essa estabilidade, principalmente financeira, que vai guiar a carreira desses profissionais.;",
                color: "#eefd43"
            };
        case "CompetênciaTécnicoProfissional":
            return {
                title: "Competência administrativa/geral",
                mesagem: 
                "Quem tem como âncora de carreira a competência administrativa geral busca, ao longo de sua vida profissional, atingir os mais altos níveis de responsabilidade na organização.São pessoas que visam a liderança e têm como motivação atingir o topo da hierarquia corporativa. Para elas, a especialização é uma armadilha: entendem a importância de conhecer as áreas funcionais, mas não buscam se aprofundar tecnicamente, pois querem a função de gerência-geral..",			
                color: "#b95207",
            };
    }
  }
  
  export default Dimensoes;