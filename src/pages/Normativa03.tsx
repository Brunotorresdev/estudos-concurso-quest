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

function Normativa03() {
  const perguntas: PerguntaComMensagem[] = [
    {
      pergunta: "A hierarquia prevista na inst normativa 03 - SAP fundamentasse em: (Hierarquia funcional, discuplina e defesa direitos/garantiass da pessoa humana) ?",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] SAP fundamentasse em: (Hierarquia funcional, discuplina e defesa direitos/garantiass da pessoa humana) ", mensagensErradas: {
        "falsa": "Errada - SAP fundamentasse em: (Hierarquia funcional, discuplina e defesa direitos/garantiass da pessoa humana) ",
      },
    },
  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
};

export default Normativa03;
