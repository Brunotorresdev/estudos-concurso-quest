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

function LeiDrogas() {
  const perguntas: PerguntaComMensagem[] = [
    {
      pergunta: "A Lei 11.343/06 Lei de drogas criou o SISNAD (Sistema nacional de politica publica sobre drogas) ?",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA]  ", mensagensErradas: {
        "falsa": "A Lei 11.343/06 Lei de drogas criou Sim o SISNAD ",
      },
    },
    {
      pergunta: "ART 28 da lei 11.343/06 (Porte drogas consumo pessoal) é equiparado a hediondo?",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “não é equiparado a hediondo ", mensagensErradas: {
        "verdadeira": "não é equiparado a hediondo ",
      },
    },
    {
        pergunta: "ART 33 CAPUT da lei 11.343/06 (Trafico de drogas) é equiparado a hediondo?",
        respostasErradas: ["falsa"],
        respostaCorreta: "verdadeira",
        mensagem: "[CORRETA] é equiparado a hediondo ", mensagensErradas: {
          "falsa": "é equiparado a hediondo ",
        },
      },

      {
        pergunta: "As condutas do parafrago 1 do ART 33 CAPUT da lei 11.343/06 (Trafico de drogas) (I - matéria/insumo, II - plantas, III - Local, IV - Agente disfarçado) são equiparados ao crime de tráfico de drogas?",
        respostasErradas: ["falsa"],
        respostaCorreta: "verdadeira",
        mensagem: "[CORRETA]", mensagensErradas: {
          "falsa": "é equiparado ao crime de tráfico de drogas ",
        },
      },

      {
        pergunta: "Os crimes do ART 33 P$2 (Auxilio uso drogas),P$3 (uso compartilhado) e P$4 (trafico privilegiado) são equiparados a hediondo?",
        respostasErradas: ["verdadeira"],
        respostaCorreta: "falsa",
        mensagem: "[CORRETA] não são equiparados a hediondo ", mensagensErradas: {
          "verdadeira": "não são equiparados a hediondo ",
        },
      },

      {
        pergunta: "ART 34 da lei 11.343/06 (maquinario para o tráfico) é equiparado a hediondo?",
        respostasErradas: ["falsa"],
        respostaCorreta: "verdadeira",
        mensagem: "[CORRETA] é equiparado a hediondo ", mensagensErradas: {
          "falsa": "é equiparado a hediondo ",
        },
      },

      {
        pergunta: "ART 35 da lei 11.343/06 (Associação para o tráfico) é equiparado a hediondo?",
        respostasErradas: ["verdadeira"],
        respostaCorreta: "falsa",
        mensagem: "[CORRETA] não é equiparado a hediondo ", mensagensErradas: {
          "verdadeira": "não é equiparado a hediondo ",
        },
      },

      {
        pergunta: "ART 36 da lei 11.343/06 (financiamento para o tráfico) é equiparado a hediondo?",
        respostasErradas: ["falsa"],
        respostaCorreta: "verdadeira",
        mensagem: "[CORRETA] é equiparado a hediondo ", mensagensErradas: {
          "falsa": "é equiparado a hediondo ",
        },
      },

      {
        pergunta: "ART 37 da lei 11.343/06 (colaboração para o tráfico) é equiparado a hediondo?",
        respostasErradas: ["falsa"],
        respostaCorreta: "verdadeira",
        mensagem: "[CORRETA] é equiparado a hediondo ", mensagensErradas: {
          "falsa": "é equiparado a hediondo ",
        },
      },

      {
        pergunta: "ART 38 da lei 11.343/06 (prescrever / ministrar/ culposamente drogas) é equiparado a hediondo?",
        respostasErradas: ["verdadeira"],
        respostaCorreta: "falsa",
        mensagem: "[CORRETA] não é equiparado a hediondo ", mensagensErradas: {
          "verdadeira": "não é equiparado a hediondo ",
        },
      },

      {
        pergunta: "ART 39 da lei 11.343/06 (embarcação ou aeronave apos o uso de drogas) é equiparado a hediondo?",
        respostasErradas: ["verdadeira"],
        respostaCorreta: "falsa",
        mensagem: "[CORRETA] não é equiparado a hediondo ", mensagensErradas: {
          "verdadeira": "não é equiparado a hediondo ",
        },
      },
  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
};

export default LeiDrogas;
