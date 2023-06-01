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

function Constitucional() {
  const perguntas: PerguntaComMensagem[] = [
    {
      pergunta: "É possível atestar a eficácia de uma norma constitucional, ainda que não se tenha observado a sua efetiva aplicação em casos concretos. ",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] Por exemplo, uma norma de eficácia limitada que depende de regulamentação infraconstitucional para que produza seus plenos efeitos já ostenta eficácia a partir de sua edição. As normas de eficácia limitada de caráter programático, por exemplo, ligadas aos direitos de segunda dimensão ou direitos sociais, que devem ser concretizados e materializados pelo Estado.  ", mensagensErradas: {
        "falsa:": "Por exemplo, uma norma de eficácia limitada que depende de regulamentação infraconstitucional para que produza seus plenos efeitos já ostenta eficácia a partir de sua edição. As normas de eficácia limitada de caráter programático, por exemplo, ligadas aos direitos de segunda dimensão ou direitos sociais, que devem ser concretizados e materializados pelo Estado. ",
      },
    },
    {
      pergunta: "As normas de eficácia limitada ou de aplicabilidade reduzida são aquelas que só produzem seus plenos efeitos depois da exigida regulamentação. ",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] A norma de eficácia limitada depende de lei para concretizar seus efeitos e é subdividida em norma de princípio institutivo e norma de princípio programático. Tem aplicabilidade indireta, mediata e reduzida. Essas normas não produzem seus efeitos com a simples promulgação da Constituição ou da edição de uma emenda constitucional. Seus efeitos essenciais dependem da regulamentação posterior, sendo qualificadas, assim, como normas não autoaplicáveis. A utilização de certas expressões, como “a lei regulará”, “a lei disporá”, ou “na forma da lei” indicam que a vontade do constituinte precisa ser complementada para o ulterior efeito da norma constitucional. Questão correta.   ", mensagensErradas: {
        "falsa:": "A norma de eficácia limitada depende de lei para concretizar seus efeitos e é subdividida em norma de princípio institutivo e norma de princípio programático. Tem aplicabilidade indireta, mediata e reduzida. Essas normas não produzem seus efeitos com a simples promulgação da Constituição ou da edição de uma emenda constitucional. Seus efeitos essenciais dependem da regulamentação posterior, sendo qualificadas, assim, como normas não autoaplicáveis. A utilização de certas expressões, como “a lei regulará”, “a lei disporá”, ou “na forma da lei” indicam que a vontade do constituinte precisa ser complementada para o ulterior efeito da norma constitucional. Questão correta.  ",
      },
    },
    {
      pergunta: "Por força da eficácia horizontal dos direitos fundamentais, a exclusão de um dos associados de determinada associação privada deve ser precedida pela ampla defesa, em respeito à sua garantia constitucional",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA]  A eficácia horizontal dos direitos fundamentais diz respeito à incidência desses direitos nas relações entre particulares, podendo ser pessoa física ou pessoa jurídica. Desse modo, as pessoas físicas e jurídicas privadas devem igualmente observar e respeitar entre si todos os direitos fundamentais. A jurisprudência do STF vem consagrando esse posicionamento em diversos julgados, como a vedação da exclusão de associado de cooperativa sem o exercício do direito de defesa (RE 158.215-4). Já a chamada teoria da eficácia vertical dos direitos fundamentais concebe a existência dos direitos e garantias como limites à atuação do Estado, numa relação vertical entre indivíduo e governante e como forma de proteção das liberdades individuais. Logo, não é esse o caso da assertiva, mas sim o caso de eficácia horizontal. Questão correta. ", mensagensErradas: {
        "falsa:": " A eficácia horizontal dos direitos fundamentais diz respeito à incidência desses direitos nas relações entre particulares, podendo ser pessoa física ou pessoa jurídica. Desse modo, as pessoas físicas e jurídicas privadas devem igualmente observar e respeitar entre si todos os direitos fundamentais. A jurisprudência do STF vem consagrando esse posicionamento em diversos julgados, como a vedação da exclusão de associado de cooperativa sem o exercício do direito de defesa (RE 158.215-4). Já a chamada teoria da eficácia vertical dos direitos fundamentais concebe a existência dos direitos e garantias como limites à atuação do Estado, numa relação vertical entre indivíduo e governante e como forma de proteção das liberdades individuais. Logo, não é esse o caso da assertiva, mas sim o caso de eficácia horizontal. Questão correta.",
      },
    },
    {
      pergunta: "A norma constitucional que dispõe acerca da liberdade em relação ao exercício de qualquer trabalho, ofício ou profissão constitui norma de eficácia contida. ",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] Trata-se de norma de eficácia contida porque tem aplicabilidade direta e imediata, mas possivelmente não integral na medida em que a CF/88 deixa margem para a criação de critérios em lei infraconstitucional quando refere 'atendidas as qualificações profissionais que a lei estabelecer'. Vejamos trecho da CF/88 em seu Art. 5º: XIII - é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer ", mensagensErradas: {
        "falsa:": "Trata-se de norma de eficácia contida porque tem aplicabilidade direta e imediata, mas possivelmente não integral na medida em que a CF/88 deixa margem para a criação de critérios em lei infraconstitucional quando refere 'atendidas as qualificações profissionais que a lei estabelecer'. Vejamos trecho da CF/88 em seu Art. 5º: XIII - é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer",
      },
    },
    {
      pergunta: "(CEBRASPE / TCE-RJ – 2022) As normas constitucionais programáticas são espécies de normas de eficácia contida, uma vez que traçam metas a serem alcançadas pela atuação futura do Estado, com vistas à realização de seus fins sociais.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] Normas programáticas traçam metas a serem alcançadas pela atuação futura do Estado, com vistas à realização de seus fins sociais. Entretanto, não são classificadas como de eficácia 'contida', mas sim de eficácia 'limitada' ", mensagensErradas: {
        "verdadeira": "Normas programáticas traçam metas a serem alcançadas pela atuação futura do Estado, com vistas à realização de seus fins sociais. Entretanto, não são classificadas como de eficácia 'contida', mas sim de eficácia 'limitada'",
      },
    },
    {
      pergunta: '(CESPE / Escrivão PC-PE – 2016) Quanto ao grau de aplicabilidade das normas constitucionais, as normas no texto constitucional classificam-se conforme seu grau de eficácia. Segundo a classificação doutrinária, a norma constitucional segundo a qual é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer é classificada como norma constitucional',
      respostasErradas: ['de eficácia limitada', 'diferida ou programática', 'de eficácia plena'],
      respostaCorreta: 'de eficácia contida',
      mensagem: 'A liberdade profissional prevista no inciso XIII do art. 5º da Constituição é norma constitucional de eficácia contida. Segundo o dispositivo, “é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer”. Portanto, a princípio, qualquer pessoa pode exercer qualquer profissão. Entretanto, a lei poderá impor restrições ao exercício da liberdade profissional, ao estabelecer qualificações a serem atendidas para que alguém exerça determinada profissão',
      mensagensErradas: {
        'de eficácia limitada': 'A liberdade profissional prevista no inciso XIII do art. 5º da Constituição é norma constitucional de eficácia contida. Segundo o dispositivo, “é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer”. Portanto, a princípio, qualquer pessoa pode exercer qualquer profissão. Entretanto, a lei poderá impor restrições ao exercício da liberdade profissional, ao estabelecer qualificações a serem atendidas para que alguém exerça determinada profissão',
        'diferida ou programática': 'A liberdade profissional prevista no inciso XIII do art. 5º da Constituição é norma constitucional de eficácia contida. Segundo o dispositivo, “é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer”. Portanto, a princípio, qualquer pessoa pode exercer qualquer profissão. Entretanto, a lei poderá impor restrições ao exercício da liberdade profissional, ao estabelecer qualificações a serem atendidas para que alguém exerça determinada profissão',
        'de eficácia plena': 'A liberdade profissional prevista no inciso XIII do art. 5º da Constituição é norma constitucional de eficácia contida. Segundo o dispositivo, “é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer”. Portanto, a princípio, qualquer pessoa pode exercer qualquer profissão. Entretanto, a lei poderá impor restrições ao exercício da liberdade profissional, ao estabelecer qualificações a serem atendidas para que alguém exerça determinada profissão',
      },
  },
  {
    pergunta: "(CESPE / TRT 8ª Região – 2016) Normas constitucionais de eficácia plena são autoaplicáveis ou autoexecutáveis, como, por exemplo, as normas que estabelecem o mandado de segurança, o habeas corpus, o mandado de injunção e o habeas data.",
    respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] As normas de eficácia plena são autoaplicáveis (autoexecutáveis), isto é, independem de regulamentação para produzir todos os seus efeitos. Os remédios constitucionais (mandado de segurança, habeas corpus, mandado de injunção e habeas data) são exemplos de normas de eficácia plena. Questão correta. ", mensagensErradas: {
        "falsa:": "As normas de eficácia plena são autoaplicáveis (autoexecutáveis), isto é, independem de regulamentação para produzir todos os seus efeitos. Os remédios constitucionais (mandado de segurança, habeas corpus, mandado de injunção e habeas data) são exemplos de normas de eficácia plena. Questão correta.",
    },
  },
  {
    pergunta: "(CESPE / TRT 8ª Região – 2016) Em se tratando de norma constitucional de eficácia contida, o legislador ordinário integra-lhe a eficácia mediante lei ordinária, dando-lhe execução mediante a regulamentação da norma constitucional",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA]  A necessidade de regulamentação para a produção de todos os efeitos é característica da norma constitucional de eficácia limitada, e não das normas de eficácia contida. Questão errada. ", mensagensErradas: {
      "verdadeira": " A necessidade de regulamentação para a produção de todos os efeitos é característica da norma constitucional de eficácia limitada, e não das normas de eficácia contida. Questão errada.",
    },
  },
  {
    pergunta: "(CESPE / TRE-MT – 2015) As normas constitucionais de eficácia contida, apesar de ter aplicabilidade imediata, somente produzem efeitos após edição de norma infraconstitucional integrativa",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] As normas de eficácia contida possuem aplicabilidade imediata e, diferentemente do que diz a alternativa, produzem todos os seus efeitos desde a sua edição. Podem, todavia, sofrer restrições em seus efeitos. Questão errada. ", mensagensErradas: {
      "verdadeira": "As normas de eficácia contida possuem aplicabilidade imediata e, diferentemente do que diz a alternativa, produzem todos os seus efeitos desde a sua edição. Podem, todavia, sofrer restrições em seus efeitos. Questão errada.",
    },
  },
  {
    pergunta: "(CESPE / TRE-GO – 2015) Embora a aplicabilidade do direito à educação seja direta e imediata, classifica-se a norma que assegura esse direito como norma de eficácia contida ou prospectiva, uma vez que a incidência de seus efeitos depende da edição de normas infraconstitucionais, como a de implementação de programa social que dê concretude a tal direito",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] O direito à educação não é norma de eficácia contida, mas sim norma de eficácia limitada. Para a incidência de seus efeitos, é necessária a edição de normas infraconstitucionais e da implementação de políticas públicas. Cabe destacar que, segundo o art. 5º, § 1º, CF/88, “as normas definidoras dos direitos e garantias fundamentais têm aplicação imediata”. Questão errada. ", mensagensErradas: {
      "verdadeira": "O direito à educação não é norma de eficácia contida, mas sim norma de eficácia limitada. Para a incidência de seus efeitos, é necessária a edição de normas infraconstitucionais e da implementação de políticas públicas. Cabe destacar que, segundo o art. 5º, § 1º, CF/88, “as normas definidoras dos direitos e garantias fundamentais têm aplicação imediata”. Questão errada.",
    },
  },
  {
    pergunta: "(CESPE / Advogado Telebrás – 2015) As normas constitucionais de eficácia contida têm aplicabilidade indireta e reduzida porque dependem de norma ulterior para que possam incidir totalmente sobre os interesses relativos a determinada matéria",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] As normas de eficácia contida têm aplicabilidade direta, imediata e possivelmente não integral. Sua eficácia não é reduzida: esta é uma característica das normas de eficácia limitada, que só produzem todos os seus efeitos após regulamentação. ", mensagensErradas: {
      "verdadeira": "As normas de eficácia contida têm aplicabilidade direta, imediata e possivelmente não integral. Sua eficácia não é reduzida: esta é uma característica das normas de eficácia limitada, que só produzem todos os seus efeitos após regulamentação.",
    },
  },
  {
    pergunta: "(CESPE / MEC – 2015) Em virtude do princípio da aplicabilidade imediata das normas definidoras dos direitos e das garantias fundamentais, tais normas podem ser de eficácia plena ou contida, mas não serão de eficácia limitada.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] Há direitos fundamentais que são normas de eficácia limitada. É o caso, por exemplo, do art. 6º da Constituição, norma programática que enumera direitos sociais. Questão errada ", mensagensErradas: {
      "verdadeira": "Há direitos fundamentais que são normas de eficácia limitada. É o caso, por exemplo, do art. 6º da Constituição, norma programática que enumera direitos sociais. Questão errada",
    },
  },
  {
    pergunta: "(CESPE / TJ-CE – 2014) As normas programáticas, que veiculam princípios a serem cumpridos pelo Estado, podem ser exemplificadas, entre outras, pela previsão constitucional de proteção ao mercado de trabalho da mulher mediante incentivos específicos",
    respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] As normas programáticas estabelecem programas a serem desenvolvidos pelo legislador infraconstitucional. Exemplo: proteção do mercado de trabalho da mulher, mediante incentivos específicos, nos termos da lei (art. 6°, XX, CF). Questão correta ", mensagensErradas: {
        "falsa:": "As normas programáticas estabelecem programas a serem desenvolvidos pelo legislador infraconstitucional. Exemplo: proteção do mercado de trabalho da mulher, mediante incentivos específicos, nos termos da lei (art. 6°, XX, CF). Questão correta",
    },
  },
  {
    pergunta: "(CESPE / TCE-PE - 2004) No caso das normas constitucionais conhecidas como programáticas, assim como no das classificadas como de eficácia limitada, é juridicamente válido o advento de norma infraconstitucional que lhes seja contrária, justamente porque a eficácia delas é deficiente.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] As normas de eficácia limitada, das quais as programáticas são espécie, apresentam eficácia mínima, tornando inválidas quaisquer normas infraconstitucionais a elas contrárias. ", mensagensErradas: {
      "verdadeira": "As normas de eficácia limitada, das quais as programáticas são espécie, apresentam eficácia mínima, tornando inválidas quaisquer normas infraconstitucionais a elas contrárias.",
    },
  },
  {
    pergunta: "(CESPE / STJ - 2008) Normas de eficácia limitada são aquelas que dependem da edição de outra norma da mesma estatura jurídica para que possam produzir efeito",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] De fato, as normas de eficácia limitada precisam da edição de outra para produzirem todos os seus efeitos. Contudo, a norma regulamentadora não terá a mesma estatura jurídica; ela será uma lei, situada hierarquicamente abaixo da Constituição. Questão errada ", mensagensErradas: {
      "verdadeira": "De fato, as normas de eficácia limitada precisam da edição de outra para produzirem todos os seus efeitos. Contudo, a norma regulamentadora não terá a mesma estatura jurídica; ela será uma lei, situada hierarquicamente abaixo da Constituição. Questão errada",
    },
  },
  {
    pergunta: "(CESPE / TCE-ES - 2009) As normas constitucionais de eficácia limitada têm por fundamento o fato de que sua abrangência pode ser reduzida por norma infraconstitucional, restringindo sua eficácia e aplicabilidade.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] São as normas de eficácia contida que podem sofrer restrições por norma infraconstitucional, não as de eficácia limitada. Questão errada. ", mensagensErradas: {
      "verdadeira": "São as normas de eficácia contida que podem sofrer restrições por norma infraconstitucional, não as de eficácia limitada. Questão errada.",
    },
  },
  {
    pergunta: "(CESPE / TRE-BA - 2010) No tocante à aplicabilidade, de acordo com a tradicional classificação das normas constitucionais, são de eficácia limitada aquelas em que o legislador constituinte regula suficientemente os interesses concernentes a determinada matéria, mas deixa margem à atuação restritiva por parte da competência discricionária do poder público, nos termos em que a lei estabelecer ou na forma dos conceitos gerais nela previstos",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] O enunciado traz o conceito de normas constitucionais de eficácia contida, não o de normas de eficácia limitada. Questão errada. ", mensagensErradas: {
      "verdadeira": "O enunciado traz o conceito de normas constitucionais de eficácia contida, não o de normas de eficácia limitada. Questão errada.",
    },
  },
  {
    pergunta: "(CESPE / MPU - 2010) As normas constitucionais de eficácia limitada são desprovidas de normatividade, razão pela qual não surtem efeitos nem podem servir de parâmetro para a declaração de inconstitucionalidade.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] Essas normas possuem, sim, normatividade. Apresentam eficácia mínima e efeito vinculante desde a sua edição, produzindo, desde logo, os seguintes efeitos: revogação das disposições anteriores em sentido contrário e impedimento da validade de leis posteriores que se opuserem a seus comandos. Questão errada ", mensagensErradas: {
      "verdadeira": "Essas normas possuem, sim, normatividade. Apresentam eficácia mínima e efeito vinculante desde a sua edição, produzindo, desde logo, os seguintes efeitos: revogação das disposições anteriores em sentido contrário e impedimento da validade de leis posteriores que se opuserem a seus comandos. Questão errada",
    },
  },

  {
    pergunta: "(TCE-RJ – 2022) A Constituição Federal de 1988 prevê expressamente a defesa da paz como um dos fundamentos da República Federativa do Brasil.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] A República Federativa do Brasil, tem como fundamentos = I a soberania; II a cidadania; III a dignidade humana; IV os valores sociais do trabalho e da livre iniciativa. ", mensagensErradas: {
      "verdadeira": "A República Federativa do Brasil, tem como fundamentos = I a soberania; II a cidadania; III a dignidade humana; IV os valores sociais do trabalho e da livre iniciativa.",
    },
  },
  
  {
    pergunta: "(FUB – 2015) O pluralismo político, fundamento da República Federativa do Brasil, é pautado pela tolerância a ideologias diversas, o que exclui discursos de ódio, não amparados pela liberdade de manifestação do pensamento",
    respostasErradas: ["falsa"],
    respostaCorreta: "verdadeira",
    mensagem: "[CORRETA] O discurso de ódio não está protegido pela liberdade de manifestação de pensamento. Por isso, o pluralismo político exclui discursos de ódio. Questão correta. ", mensagensErradas: {
      "falsa:": "O discurso de ódio não está protegido pela liberdade de manifestação de pensamento. Por isso, o pluralismo político exclui discursos de ódio. Questão correta.",
  },
  },

  {
    pergunta: "A dignidade da pessoa humana, princípio fundamental da República Federativa do Brasil, promove o direito à vida digna em sociedade, em prol do bem comum, fazendo prevalecer o interesse coletivo em detrimento do direito individual.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] A dignidade da pessoa humana é um fundamento da República Federativa do Brasil. Enquadra-se como princípio fundamental, assim como todos os outros inscritos dos art. 1º a art. 4º, CF/88. Esse princípio coloca o indivíduo (o ser humano) como a preocupação central do Estado. Assim, não há que se falar em “prevalência do interesse coletivo em detrimento do direito individual”. Questão errada. ", mensagensErradas: {
      "verdadeira": "A dignidade da pessoa humana é um fundamento da República Federativa do Brasil. Enquadra-se como princípio fundamental, assim como todos os outros inscritos dos art. 1º a art. 4º, CF/88. Esse princípio coloca o indivíduo (o ser humano) como a preocupação central do Estado. Assim, não há que se falar em “prevalência do interesse coletivo em detrimento do direito individual”. Questão errada.",
    },
  },

  {
    pergunta: "A soberania, que consiste em um poder político supremo e independente, é um dos fundamentos da República Federativa do Brasil.",
    respostasErradas: ["falsa"],
    respostaCorreta: "verdadeira",
    mensagem: "[CORRETA] A soberania é um poder que não reconhece nenhum outro acima dele próprio. Pode-se dizer, portanto, que é um poder político supremo e independente. A soberania é um dos fundamentos da República Federativa do Brasil. ", mensagensErradas: {
      "falsa:": "A soberania é um poder que não reconhece nenhum outro acima dele próprio. Pode-se dizer, portanto, que é um poder político supremo e independente. A soberania é um dos fundamentos da República Federativa do Brasil.",
  },
  },

  {
    pergunta: "(FUB – 2015) O regime político adotado na CF caracteriza a República Federativa do Brasil como um estado democrático de direito em que se conjuga o princípio representativo com a participação direta do povo por meio do voto, do plebiscito, do referendo e da iniciativa popular.",
    respostasErradas: ["falsa"],
    respostaCorreta: "verdadeira",
    mensagem: "[CORRETA] No Brasil, vigora uma democracia semidireta, na qual se conjuga o princípio representativo com a participação direta do povo através do voto, plebiscito, referendo e iniciativa popular.  ", mensagensErradas: {
      "falsa:": "No Brasil, vigora uma democracia semidireta, na qual se conjuga o princípio representativo com a participação direta do povo através do voto, plebiscito, referendo e iniciativa popular. ",
  },
  },

  {
    pergunta: "(Câmara dos Deputados – 2014) A democracia brasileira é indireta, ou representativa, haja vista que o poder popular se expressa por meio de representantes eleitos, que recebem mandato para a elaboração das leis e a fiscalização dos atos estatais.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] No Brasil, vigora uma democracia semidireta. Questão errada. ", mensagensErradas: {
      "verdadeira": "No Brasil, vigora uma democracia semidireta. Questão errada.",
    },
  },

  {
    pergunta: "(Polícia Federal – 2014) A República Federativa do Brasil, formada pela união indissolúvel dos estados, municípios e Distrito Federal (DF), adota a federação como forma de Estado. ",
    respostasErradas: ["falsa"],
    respostaCorreta: "verdadeira",
    mensagem: "[CORRETA] A forma de Estado adotada pela RFB é a federação. Questão correta.  ", mensagensErradas: {
      "falsa:": "A forma de Estado adotada pela RFB é a federação. Questão correta. ",
  },
  },

  {
    pergunta: "(TRE-AM – 2014) O Brasil adotou como sistema de governo a República, o presidencialismo como forma de governo e a Federação como forma de Estado",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] O examinador inverteu as coisas. A forma de governo adotado pelo Brasil é a República; o presidencialismo é o sistema de governo. ", mensagensErradas: {
      "verdadeira": "O examinador inverteu as coisas. A forma de governo adotado pelo Brasil é a República; o presidencialismo é o sistema de governo.",
    },
  },

  {
    pergunta: "Os OBJETIVOS FUNDAMENTAIS  da republica federativa do brail são: I - construir uma sociedade livre, justa e solidária; II - garantir o desenvolvimento nacional; III - erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais; IV - promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação. ",
    respostasErradas: ["falsa"],
    respostaCorreta: "verdadeira",
    mensagem: "[CORRETA] ", mensagensErradas: {
      "falsa:": "Errada",
  },
  },

  {
    pergunta: "(FUB – 2022) Entre os princípios constitucionais que regem as relações internacionais do Brasil, insere-se o da não intervenção, cuja pedra basilar é a soberania nacional. Por isso, o Brasil não pode, sozinho ou em grupo com outros países, intervir, direta ou indiretamente, independentemente do motivo, nos assuntos internos ou externos de qualquer outro país. ",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] O princípio da não-intervenção (inciso IV) é também corolário dos princípios da soberania e da independência nacional, e preconiza que o Brasil não interferirá em assuntos internos de outros Estados. Entretanto, o Brasil poderá, amparado em resoluções das Nações Unidas, participar de missões de paz interventivas, a exemplo do que foi feito no Haiti, por exemplo ", mensagensErradas: {
      "verdadeira": "O princípio da não-intervenção (inciso IV) é também corolário dos princípios da soberania e da independência nacional, e preconiza que o Brasil não interferirá em assuntos internos de outros Estados. Entretanto, o Brasil poderá, amparado em resoluções das Nações Unidas, participar de missões de paz interventivas, a exemplo do que foi feito no Haiti, por exemplo",
    },
  },

  {
    pergunta: "(SEFAZ-RS – 2019) A solução pacífica dos conflitos é um dos objetivos fundamentais da República Federativa do Brasil.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA]  A solução pacífica dos conflitos é um princípio das relações internacionais adotados pelo Brasil. ", mensagensErradas: {
      "verdadeira": " A solução pacífica dos conflitos é um princípio das relações internacionais adotados pelo Brasil.",
    },
  },

  {
    pergunta: "(TRT 6ª Região – 2018) À luz do que dispõe a Constituição Federal quanto aos seus princípios fundamentais, a República Federativa do Brasil tem como um de seus fundamentos a cooperação entre os povos para o progresso da humanidade.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA]  A cooperação entre os povos para o progresso da humanidade é princípio das relações internacionais (e não fundamento da RFB!) ", mensagensErradas: {
      "verdadeira": " A cooperação entre os povos para o progresso da humanidade é princípio das relações internacionais (e não fundamento da RFB!)",
    },
  },

  {
    pergunta: "(DP-DF – 2022) Os direitos fundamentais caracterizam-se por seu caráter absoluto, característica que permanece mesmo havendo eventuais colisões entre eles.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] Uma das características dos direitos fundamentais é a sua relatividade. Não existem direitos fundamentais de natureza absoluta, já que eles encontram limites nos demais direitos previstos na Constituição. ", mensagensErradas: {
      "verdadeira": "Uma das características dos direitos fundamentais é a sua relatividade. Não existem direitos fundamentais de natureza absoluta, já que eles encontram limites nos demais direitos previstos na Constituição.",
    },
  },

  {
    pergunta: "(TJ-PR – 2019) Considerando-se o surgimento e a evolução dos direitos fundamentais em gerações, é correto afirmar que o direito ao meio ambiente ecologicamente equilibrado é considerado, pela doutrina, direito de segunda geração.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] O direito ao meio ambiente ecologicamente equilibrado é direito de 3ª geração. Questão errada. ", mensagensErradas: {
      "verdadeira": "O direito ao meio ambiente ecologicamente equilibrado é direito de 3ª geração. Questão errada.",
    },
  },

  {
    pergunta: "(PGE-PE – 2018) Os direitos destinados a assegurar a soberania popular mediante a possibilidade de interferência direta ou indireta nas decisões políticas do Estado são direitos políticos de primeira dimensão ",
    respostasErradas: ["falsa"],
    respostaCorreta: "verdadeira",
    mensagem: "[CORRETA] São direitos de 1ª geração os direitos civis e políticos. Os direitos políticos são aqueles que estão relacionados à participação do indivíduo na vida política do Estado.", mensagensErradas: {
      "falsa:": "São direitos de 1ª geração os direitos civis e políticos. Os direitos políticos são aqueles que estão relacionados à participação do indivíduo na vida política do Estado.",
  },
  },

  {
    pergunta: "(DPE-PR – 2017) A dimensão subjetiva dos direitos fundamentais resulta de seu significado como princípios básicos da ordem constitucional, fazendo com que os direitos fundamentais influam sobre todo o ordenamento jurídico e servindo como norte de ação para os poderes constituídos.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] A dimensão objetiva dos direitos fundamentais é que impõe que estes influam sobre todo o ordenamento jurídico. Nesse sentido, fala-se em “eficácia irradiante” dos direitos fundamentais ", mensagensErradas: {
      "verdadeira": "A dimensão objetiva dos direitos fundamentais é que impõe que estes influam sobre todo o ordenamento jurídico. Nesse sentido, fala-se em “eficácia irradiante” dos direitos fundamentais",
    },
  },

  {
    pergunta: "Os direitos fundamentais são personalíssimos, de forma que somente a própria pessoa pode a eles renunciar.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] Os direitos fundamentais têm como característica a “irrenunciabilidade” ", mensagensErradas: {
      "verdadeira": "Os direitos fundamentais têm como característica a “irrenunciabilidade”",
    },
  },

  {
    pergunta: "(FUB – 2015) Os direitos fundamentais, considerados como cláusula pétrea das constituições, podem sofrer limitações por ponderação judicial caso estejam em confronto com outros direitos fundamentais, por alteração legislativa, via emenda constitucional, desde que, nesse último caso, seja respeitado o núcleo essencial que os caracteriza.",
    respostasErradas: ["falsa"],
    respostaCorreta: "verdadeira",
    mensagem: "[CORRETA]  É possível, sim, que sejam impostas limitações aos direitos fundamentais, mas desde que seja respeitado o núcleo essencial que os caracteriza. Em um caso concreto no qual haja o conflito entre direitos fundamentais, o juiz irá aplicar a técnica da ponderação (harmonização)", mensagensErradas: {
      "falsa:": " É possível, sim, que sejam impostas limitações aos direitos fundamentais, mas desde que seja respeitado o núcleo essencial que os caracteriza. Em um caso concreto no qual haja o conflito entre direitos fundamentais, o juiz irá aplicar a técnica da ponderação (harmonização)",
  },
  },

  {
    pergunta: "(TJ-CE – 2018) A exclusão de sócio de associação privada sem fins lucrativos independe do contraditório e da ampla defesa, desde que haja previsão estatutária.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] Os direitos fundamentais têm eficácia horizontal, isto é, se aplicam nas relações entre particulares. Assim, na exclusão de sócio de associação privada sem fins lucrativos, devem ser garantidas a ampla defesa e o contraditório. ", mensagensErradas: {
      "verdadeira": "Os direitos fundamentais têm eficácia horizontal, isto é, se aplicam nas relações entre particulares. Assim, na exclusão de sócio de associação privada sem fins lucrativos, devem ser garantidas a ampla defesa e o contraditório.",
    },
  },

  {
    pergunta: "(PGE-PR – 2015) Os direitos fundamentais assegurados pela Constituição vinculam diretamente só os poderes públicos, estando direcionados mediatamente à proteção dos particulares e apenas em face dos chamados poderes privados.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] Os direitos fundamentais têm eficácia horizontal, aplicando-se, também, às relações entre particulares. Destaque-se que, no Brasil, prevalece a tese da eficácia direta e imediata dos direitos fundamentais ", mensagensErradas: {
      "verdadeira": "Os direitos fundamentais têm eficácia horizontal, aplicando-se, também, às relações entre particulares. Destaque-se que, no Brasil, prevalece a tese da eficácia direta e imediata dos direitos fundamentais",
    },
  },

  {
    pergunta: "(DP-DF – 2022) Os direitos e garantias previstos pela Constituição Federal de 1988 estão dispostos em rol taxativo, em razão da ampla rede de proteção a eles destinada. ",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] A enumeração constitucional dos direitos e garantias fundamentais não é limitada, taxativa, haja vista que outros poderão ser reconhecidos futuramente, seja por meio de emendas constitucionais ou mesmo mediante normas infraconstitucionais, como os tratados e convenções internacionais de direitos humanos celebrados pelo Brasil. ", mensagensErradas: {
      "verdadeira": "A enumeração constitucional dos direitos e garantias fundamentais não é limitada, taxativa, haja vista que outros poderão ser reconhecidos futuramente, seja por meio de emendas constitucionais ou mesmo mediante normas infraconstitucionais, como os tratados e convenções internacionais de direitos humanos celebrados pelo Brasil.",
    },
  },

  {
    pergunta: "(CGE-CE – 2019) O rol dos direitos e das garantias fundamentais se esgota nos direitos e deveres individuais, na nacionalidade e nos direitos políticos.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] Também se enquadram como direitos e garantias fundamentais os direitos sociais e os direitos relacionados à existência, organização e participação em partidos políticos. ", mensagensErradas: {
      "verdadeira": "Também se enquadram como direitos e garantias fundamentais os direitos sociais e os direitos relacionados à existência, organização e participação em partidos políticos.",
    },
  },

  {
    pergunta: " (MPU – 2015) Na CF, a classificação dos direitos e garantias fundamentais restringe-se a três categorias: os direitos individuais e coletivos, os direitos de nacionalidade e os direitos políticos.",
    respostasErradas: ["verdadeira"],
    respostaCorreta: "falsa",
    mensagem: "[CORRETA] Pode-se falar, ainda, na existência de outros dois grupos de direitos: os direitos sociais e os direitos relacionados à existência, organização e participação em partidos políticos. ", mensagensErradas: {
      "verdadeira": "Pode-se falar, ainda, na existência de outros dois grupos de direitos: os direitos sociais e os direitos relacionados à existência, organização e participação em partidos políticos.",
    },
  },

  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
};

export default Constitucional;
