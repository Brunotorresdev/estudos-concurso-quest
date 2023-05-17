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

function Informatica
() {
  const perguntas: PerguntaComMensagem[] = [
  {
    pergunta: 'Um conjunto de unidades processadoras interconectadas que permite, inclusive, o compartilhamento de recursos tais como impressoras, discos, entre outros, denomina-se:',
    respostasErradas: ['Time Sharing', 'Compartilhamento do Windows', 'Interligação de Redes de Computadores'],
    respostaCorreta: 'Redes de Computadores',
    mensagem: 'quando a banca diz “um conjunto de unidades processadoras”, ela só está usando um nome técnico para “um conjunto de computadores”. Portanto, um conjunto de computadores interconectados que permite o compartilhamento de recursos tais como impressoras, discos, entre outros, só pode ser uma... rede de computadores',
    mensagensErradas: {
      'Interligação de Redes de Computadores': 'quando a banca diz “um conjunto de unidades processadoras”, ela só está usando um nome técnico para “um conjunto de computadores”. Portanto, um conjunto de computadores interconectados que permite o compartilhamento de recursos tais como impressoras, discos, entre outros, só pode ser uma... rede de computadores',
      'Compartilhamento do Windows': 'quando a banca diz “um conjunto de unidades processadoras”, ela só está usando um nome técnico para “um conjunto de computadores”. Portanto, um conjunto de computadores interconectados que permite o compartilhamento de recursos tais como impressoras, discos, entre outros, só pode ser uma... rede de computadores',
      'Time Sharing': 'quando a banca diz “um conjunto de unidades processadoras”, ela só está usando um nome técnico para “um conjunto de computadores”. Portanto, um conjunto de computadores interconectados que permite o compartilhamento de recursos tais como impressoras, discos, entre outros, só pode ser uma... rede de computadores',
    },
},
  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
};

export default Informatica
;
