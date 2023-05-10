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
      pergunta: 'O que é fonema?',
      respostasErradas: ['Representação grafica de um som', '2 letras com um som'],
      respostaCorreta: 'Unidade Sonora para formar palavras',
      mensagem: 'Unidade Sonora para formar palavras',
      mensagensErradas: {
        'Representação grafica de um som': 'Representação grafica de um som é uma letra',
        '2 letras com um som': '2 letras com um som é um digrafo nasal.',
      },
    },
    {
        pergunta: 'O que é digrafo nasal?',
        respostasErradas: ['Unidade Sonora para formar palavras', 'Representação grafica de um som'],
        respostaCorreta: '2 letras com um som Ex: CH, SC, LH',
        mensagem: 'é digrafo nasal',
        mensagensErradas: {
          'Unidade Sonora para formar palavras': 'é fonema',
          'Representação grafica de um som': 'Representação grafica de um som é uma letra',
        },
    },
    {
      pergunta: 'O que é digrafo encontro consonantal?',
      respostasErradas: ['Unidade Sonora para formar palavras', '2 letras com um som'],
      respostaCorreta: '2 fonemas em uma palavra: ex: BRado, CLaro, aDVento',
      mensagem: 'é digrafo nasal',
      mensagensErradas: {
        'Unidade Sonora para formar palavras': 'é fonema',
        '2 letras com um som': '2 letras com um som é um digrafo nasal.',
      },
  },
  {
    pergunta: 'quais palavras sao ditongo ?',
    respostasErradas: ['Uruguai, Saguão, iguais', 'saúde, caótico'],
    respostaCorreta: 'imóveis, azeite, meu',
    mensagem: '1 vogal e uma semivogal',
    mensagensErradas: {
      'Uruguai, Saguão, iguais': 'uma vogal entre 2 semivogais = tritongo',
      'saúde, caótico': 'encontro de vogais em silabas diferentes, Hiato = sa-ú-de, ca-ó-ti-co',
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
