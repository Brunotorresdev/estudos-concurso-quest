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

function DireitosHumanos() {
  const perguntas: PerguntaComMensagem[] = [
    {
      pergunta: "A definição consagrada na doutrina atualmente é a de Antônio Peres Luño , segundo o qual os direitos humanos constituem um: 'conjunto de faculdades e instituições que, em cada momento histórico,concretizam as exigências de dignidade, liberdade e igualdade humanas, asquais devem ser reconhecidas positivamente pelos ordenamentos jurídicos emnível nacional e internacional.'",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA]  ", mensagensErradas: {
        "falsa": "resposta errada ",
      },
    },
    {
      pergunta: "A ideia central dos direitos humanos é: Prover meios e instrumentos jurídicos para a defesa da DIGNIDADE HUMANA ?",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA]  ", mensagensErradas: {
        "falsa": "resposta errada ",
      },
    },
    {
        pergunta: "Direitos Fundamentais:",
        respostasErradas: [
          "referem-se aos direitos universalmente aceitos na ordem internacional",
        ],
        respostaCorreta: "constituem o conjunto de direitos positivados na ordem interna de determinado Estado",
        mensagem: "[CORRETA]",
        mensagensErradas: {
          "referem-se aos direitos universalmente aceitos na ordem internacional": "Errada- aqui se trada dos Direitos Humanos",
        },
      },
      {
        pergunta: "O principal fundamento dos direitos humanos no Brasil refere-se à dignidade da pessoa humana.Por essa razão, além de haver consenso acerca do conteúdo desse princípio, ele é válidosomente para os direitos humanos consagrados explicitamente na CF",
        respostasErradas: ["verdadeira"],
        respostaCorreta: "falsa",
        mensagem: "[CORRETA]  Primeiramente, é importante esclarecer que a primeira parte daassertiva é confusa, não há verdadeiramente um consenso em relação ao fundamento dosDireitos Humanos.A dignidade da pessoa constitui o objeto central ou, ao menos, o principal direito humano quetemos. Porém, não é tecnicamente correto afirmar que o principal fundamento da disciplina estána dignidade.Fora esse aspecto, encontra-se incorreta a assertiva na segunda parte. Existem outros direitospara além daqueles explícitos no texto constitucional. Como bem sabemos existem princípiosimplícitos que revelam normas de direitos humanos. Ademais, não há consenso acerca doconteúdo da dignidade. Pelo contrário, há muita dificuldade em se fixar o conceito de dignidade", mensagensErradas: {
          "verdadeira": "Primeiramente, é importante esclarecer que a primeira parte daassertiva é confusa, não há verdadeiramente um consenso em relação ao fundamento dosDireitos Humanos.A dignidade da pessoa constitui o objeto central ou, ao menos, o principal direito humano quetemos. Porém, não é tecnicamente correto afirmar que o principal fundamento da disciplina estána dignidade.Fora esse aspecto, encontra-se incorreta a assertiva na segunda parte. Existem outros direitospara além daqueles explícitos no texto constitucional. Como bem sabemos existem princípiosimplícitos que revelam normas de direitos humanos. Ademais, não há consenso acerca doconteúdo da dignidade. Pelo contrário, há muita dificuldade em se fixar o conceito de dignidade ",
        },
      },
      {
        pergunta: "(FUNCAB - 2014) Consoante a teoria dos status dos direitos fundamentais, de autoria deJellinek, o direito à saúde, tal como previsto na Constituição Federal, é considerado fundamentalde status:",
        respostasErradas: [
          "ativo",
          "negativo",
          "passivo",
        ],
        respostaCorreta: "positivo",
        mensagem: "[CORRETA] O direito à saúde constitui um direito prestacional, por meio do qual a pessoa poderá exigir doEstado os meios e instrumentos necessários a fim de lhe garantir uma vida saudável. Portanto,trata-se de direito positivo ",
        mensagensErradas: {
          "ativo": "O direito à saúde constitui um direito prestacional, por meio do qual a pessoa poderá exigir doEstado os meios e instrumentos necessários a fim de lhe garantir uma vida saudável. Portanto,trata-se de direito positivo ",
          "negativo": "O direito à saúde constitui um direito prestacional, por meio do qual a pessoa poderá exigir doEstado os meios e instrumentos necessários a fim de lhe garantir uma vida saudável. Portanto,trata-se de direito positivo ",
          "passivo": "O direito à saúde constitui um direito prestacional, por meio do qual a pessoa poderá exigir doEstado os meios e instrumentos necessários a fim de lhe garantir uma vida saudável. Portanto,trata-se de direito positivo ",
        },
      },
  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
};

export default DireitosHumanos;
