import Questionario from "../components/Questionario";

interface Pergunta {
  pergunta: string;
  respostasErradas: string[];
  respostaCorreta: string;
  mensagensErradas: Record<string, string>;
}

interface PerguntaComMensagem extends Pergunta {
  mensagem: string;
}

function RegimeDisciplinar() {
  const perguntas: PerguntaComMensagem[] = [
    {
      pergunta:
        "O Regime Disciplinar diferenciado (RDD) é aplicado aos policiais penais de carreira e também aos demais servidores permanentes SAP",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] Isso mesmo",
      mensagensErradas: {
        falsa:
          "Errada - O Regime Disciplinar diferenciado (RDD) é SIM aplicado aos policiais penais de carreira e também aos demais servidores permanentes SAP",
      },
    },

    {
      pergunta:
        "O CGD 'Controladoria geral de disciplina' é responsável pela apuração de responsabilidade dos policiais penais de carreira?",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem:
        "[CORRETA] A acertiva está correta, e o PROPAD será responsável pelos demais servidores permanentes",
      mensagensErradas: {
        falsa:
          "Errada - A acertiva está correta, e o PROPAD será responsável pelos demais servidores permanentes",
      },
    },

    {
        pergunta:
          "O Policial penal que infrigir algum ato dissiplinar podera responder somente a uma das esferas= CIVIL - PENAL - ADMINISTRATIVA ?",
        respostasErradas: ["verdadeira"],
        respostaCorreta: "Errada",
        mensagem:
          "[CORRETA] A acertiva está errada, o agente poderá responder a uma ou mais de uma esfera a depender do ato.",
        mensagensErradas: {
          falsa:
            "verdadeira - A acertiva está errada, o agente poderá responder a uma ou mais de uma esfera a depender do ato.",
        },
      },

      {
        pergunta:
          "Sobre responsabilidade civil ela decorre de ato doloso/ culposo e importa algum dano ao estado ou a terceiro?",
        respostasErradas: ["falsa"],
        respostaCorreta: "verdadeira",
        mensagem:
          "[CORRETA] A acertiva está correta",
        mensagensErradas: {
          falsa:
            "Errada - A acertiva está correta",
        },
      },

      {
        pergunta:
          "Sobre A idenização descontada da remuneração sobre a responsabilidade civil não pode passar de 1/10 do salario do agente, salvo se o ato for doloso da lei da improb ADM onde sera descontado todo de uma vez?",
        respostasErradas: ["falsa"],
        respostaCorreta: "verdadeira",
        mensagem:
          "[CORRETA] A acertiva está correta",
        mensagensErradas: {
          falsa:
            "Errada - A acertiva está correta",
        },
      },
  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
}

export default RegimeDisciplinar;
