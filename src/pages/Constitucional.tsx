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
  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
};

export default Constitucional;
