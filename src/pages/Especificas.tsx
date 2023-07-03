import Questionario from '../components/Questionario';

interface Pergunta {
  pergunta: string;
  respostasErradas: string[];
  respostaCorreta: string;
  mensagensErradas: Record<string, string>;
}

interface PerguntaComMensagem extends Pergunta {
  mensagem: string;
}

function Especificas
() {
  const perguntas: PerguntaComMensagem[] = [

    {
      pergunta: "Hierarquida da unidade prisional é composta por: 1 - chefe de equipe 2 - geremte de patrimonio 3 - chefe nucleo seg e disciplina 4 - diretor adjunto 5 diretor unidade",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA]", mensagensErradas: {
        "falsa": "A acertiva está correta",
      },
    },
    {
      pergunta: "A hierarquia prevista na inst normativa 03 - SAP fundamentasse em: (Hierarquia funcional, discuplina e defesa direitos/garantiass da pessoa humana) ?",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] SAP fundamentasse em: (Hierarquia funcional, discuplina e defesa direitos/garantiass da pessoa humana)", mensagensErradas: {
        "falsa": "Errada - SAP fundamentasse em: (Hierarquia funcional, discuplina e defesa direitos/garantiass da pessoa humana)",
      },
    },
    {
      pergunta: "Sobre a classificação dos condenados, marque a alternativa correta",
      respostasErradas: ["A Comissão Técnica de Classificação será presidida pelo diretor e composta, no mínimo, por 3 (três) chefes de serviço, 1 (um) psiquiatra, 1 (um) psicólogo e 1 (um) assistente social, quando se tratar de condenado à pena privativa de liberdade", "O condenado ao cumprimento de pena privativa de liberdade, em regime aberto, será submetido a exame criminológico para a obtenção dos elementos necessários a uma adequada classificação e com vistas à individualização da execução.", "O condenado por crimes hediondos que não tiver sido submetido à identificação do perfil genético por ocasião do ingresso no estabelecimento prisional deverá ser submetido ao procedimento antes do cumprimento da pena."],
      respostaCorreta: "O condenado por crime doloso praticado com violência grave contra a pessoa, bem como por crime contra a vida, contra a liberdade sexual ou por crime sexual contra vulnerável, será submetido, obrigatoriamente, à identificação do perfil genético, mediante extração de DNA (ácido desoxirribonucleico), por técnica adequada e indolor, por ocasião do ingresso no estabelecimento prisional.",
      mensagem: "[CORRETA] O condenado por crime doloso praticado com violência grave contra a pessoa, bem como por crime contra a vida, contra a liberdade sexual ou por crime sexual contra vulnerável, será submetido, obrigatoriamente, à identificação do perfil genético, mediante extração de DNA (ácido desoxirribonucleico), por técnica adequada e indolor, por ocasião do ingresso no estabelecimento prisional. ",
      mensagensErradas: {
        "A Comissão Técnica de Classificação será presidida pelo diretor e composta, no mínimo, por 3 (três) chefes de serviço, 1 (um) psiquiatra, 1 (um) psicólogo e 1 (um) assistente social, quando se tratar de condenado à pena privativa de liberdade": "→ são 2 (dois) chefes de serviço - Art. 7º",
        "O condenado ao cumprimento de pena privativa de liberdade, em regime aberto, será submetido a exame criminológico para a obtenção dos elementos necessários a uma adequada classificação e com vistas à individualização da execução.": "em regime fechado - Art. 8º ",
        "O condenado por crimes hediondos que não tiver sido submetido à identificação do perfil genético por ocasião do ingresso no estabelecimento prisional deverá ser submetido ao procedimento antes do cumprimento da pena.": "O condenado por crime doloso praticado com violência grave contra a pessoa, bem como por crime contra a vida, contra a liberdade sexual ou por crime sexual contra vulnerável, será submetido, obrigatoriamente, à identificação do perfil genético, mediante extração de DNA (ácido desoxirribonucleico), por técnica adequada e indolor, por ocasião do ingresso no estabelecimento prisional.",
      },
    },
    {
      pergunta: "PEDRO foi condenado por crime de roubo a 9 (nove) anos de reclusão, tendo a sentença transitada em julgado. Tem início a execução da pena. PEDRO foi encaminhado à penitenciária. Marque a alternativa CORRETA",
      respostasErradas: ["A assistência ao preso e ao internado é dever do Estado e dos Municípios, objetivando prevenir as contravenções e orientar o retorno à convivência em sociedade.", "A assistência material ao preso e ao internado consistirá somente no fornecimento de alimentação e vestuário segundo a lei de execução penal.", "O estabelecimento prisional disporá de instalação e serviços que atendam aos presos nas suas necessidades pessoais, sendo proibida a venda de produtos e objetos permitidos e não fornecidos pela Administração"],
      respostaCorreta: "O condenado por crime doloso praticado com violência grave contra a pessoa, bem como por crime contra a vida, contra a liberdade sexual ou por crime sexual contra vulnerável, será submetido, obrigatoriamente, à identificação do perfil genético, mediante extração de DNA (ácido desoxirribonucleico), por técnica adequada e indolor, por ocasião do ingresso no estabelecimento prisional.",
      mensagem: "[CORRETA] A Artigo 9-A",
      mensagensErradas: {
        "A assistência ao preso e ao internado é dever do Estado e dos Municípios, objetivando prevenir as contravenções e orientar o retorno à convivência em sociedade.": "Errada",
        "A assistência material ao preso e ao internado consistirá somente no fornecimento de alimentação e vestuário segundo a lei de execução penal.": "Errada",
        "O estabelecimento prisional disporá de instalação e serviços que atendam aos presos nas suas necessidades pessoais, sendo proibida a venda de produtos e objetos permitidos e não fornecidos pela Administração": "Errada",
      },
    },
    {
      pergunta: "Considerando que o cumprimento de pena deve ser pautado pela individualização da respectiva execução, bem como objetivar a integração social do condenado, a Lei no 7.210/1984 dispõe acerca das medidas a serem tomadas. Nesse sentido, no que diz respeito às regras de classificação dos condenados dispostas na Lei de Execução Penal, assinale a alternativa correta",
      respostasErradas: ["Os condenados serão classificados segundo a respectiva periculosidade, que será medida, entre outros critérios, pelo fato de integrarem ou não facção criminosa.", "O condenado ao cumprimento da pena privativa de liberdade em regime aberto deverá ser submetido, no início da execução da pena, ao exame criminológico para a obtenção dos elementos necessários a uma adequada classificação e com vistas à individualização da execução", "Apenas os condenados por crime hediondo praticado dolosa ou culposamente serão submetidos, obrigatoriamente, à identificação do perfil genético, mediante extração de ácido desoxirribonucleico (DNA), por técnica adequada e indolor."],
      respostaCorreta: "A classificação será feita por Comissão Técnica de Classificação, que elaborará o programa individualizador da pena privativa de liberdade adequada ao condenado ou preso provisório.",
      mensagem: "[CORRETA] Art. 6 A classificação será feita por Comissão Técnica de Classificação que elaborará o programa individualizador da pena privativa de liberdade adequada ao condenado ou preso provisório.",
      mensagensErradas: {
        "Os condenados serão classificados segundo a respectiva periculosidade, que será medida, entre outros critérios, pelo fato de integrarem ou não facção criminosa.": "Art. 5º Os condenados serão classificados, segundo os seus antecedentes e personalidade, para orientar a individualização da execução penal",
        "O condenado ao cumprimento da pena privativa de liberdade em regime aberto deverá ser submetido, no início da execução da pena, ao exame criminológico para a obtenção dos elementos necessários a uma adequada classificação e com vistas à individualização da execução": "Art. 8º O condenado ao cumprimento de pena privativa de liberdade, em regime fechado, será submetido a exame criminológico para a obtenção dos elementos necessários a uma adequada classificação e com vistas à individualização da execução. Parágrafo único. Ao exame de que trata este artigo poderá ser submetido o condenado ao cumprimento da pena privativa de liberdade em regime semi-aberto",
        "Apenas os condenados por crime hediondo praticado dolosa ou culposamente serão submetidos, obrigatoriamente, à identificação do perfil genético, mediante extração de ácido desoxirribonucleico (DNA), por técnica adequada e indolor.": "Art. 9-A. Os condenados por crime praticado, dolosamente, com violência de natureza grave contra pessoa, ou por qualquer dos crimes previstos no art. 1 da Lei n 8.072, de 25 de julho de 1990, serão submetidos, obrigatoriamente, à identificação do perfil genético, mediante extração de DNA - ácido desoxirribonucleico, por técnica adequada e indolor.",
      },
    },
   
  ];
  
  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
};

export default Especificas
;
