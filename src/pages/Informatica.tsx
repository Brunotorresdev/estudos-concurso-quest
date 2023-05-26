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
      pergunta: "(CESPE / TCE-RJ – 2022) Diferentemente das bridges, os repetidores são dispositivos capazes de reconhecer e examinar os quadros da camada de enlace",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “Diferentemente dos repetidores, as bridges são dispositivos capazes de reconhecer e examinar os quadros da camada de enlace ", mensagensErradas: {
        "verdadeira": "Diferentemente dos repetidores, as bridges são dispositivos capazes de reconhecer e examinar os quadros da camada de enlace ",
      },
    },
    {
      pergunta: "No padrão Gigabit Ethernet, tanto no modo de operação half-duplex quanto no modo full-duplex, o uso do protocolo CSMA/CD para evitar colisões é dispensável, em razão da extensão de portadora, uma característica voltada à prevenção de colisões incluída originalmente nas definições do padrão",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “No modo full-duplex, é realmente dispensável já que não existe possibilidade de colisão. No modo half-duplex, não é dispensável justamente porque existe a possibilidade de colisão. ", mensagensErradas: {
        "verdadeira": "No modo full-duplex, é realmente dispensável já que não existe possibilidade de colisão. No modo half-duplex, não é dispensável justamente porque existe a possibilidade de colisão. ",
      },
    },

    {
      pergunta: "Rede metropolitana (MAN) é aquela que abrange uma grande área geográfica – com frequência um país ou continente – e contém um conjunto de máquinas cuja finalidade é executar os programas (ou seja, as aplicações) do usuário.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “A rede metropolitana abrange a área de uma metrópole, logo não é da proporção de um país ou continente – essa seria uma WAN (Wide Area Network). ", mensagensErradas: {
        "verdadeira": "A rede metropolitana abrange a área de uma metrópole, logo não é da proporção de um país ou continente – essa seria uma WAN (Wide Area Network). ",
      },
    },
    {
      pergunta: "Denomina-se cabo coaxial, em uma rede de comunicação, o tipo de mídia de comunicação que realiza a conexão entre pontos, é imune a ruídos elétricos e é responsável pela transmissão de dados com capacidade de largura de banda muito maior do que os pares trançados.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “Está tudo perfeito, com uma exceção: ele é muito resistente, mas não é imune a ruídos elétricos. ", mensagensErradas: {
        "verdadeira": "Está tudo perfeito, com uma exceção: ele é muito resistente, mas não é imune a ruídos elétricos. ",
      },
    },
    
    {
      pergunta: "Em uma rede em topologia de barramento, as comunicações de mensagens do tipo difusão são facilitadas porque todos os nós conectados ao barramento são capazes de ouvir todas as transmissões realizadas.",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] “Perfeito... em uma topologia em barramento, comunicações do tipo difusão (broadcast) realmente são ouvidas por todos os nós. ", mensagensErradas: {
        "falsa": "Perfeito... em uma topologia em barramento, comunicações do tipo difusão (broadcast) realmente são ouvidas por todos os nós. ",
      },
    },
    {
      pergunta: "Em uma rede local que possui a topologia estrela, podem ser utilizados switches para integrar a comunicação entre os computadores.",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] “Perfeito! Na topologia em estrela, os equipamentos são conectados a um nó central concentrador para integrar a comunicação entre os computadores. Em geral, o nó concentrador pode ser um hub ou um switch. ", mensagensErradas: {
        "falsa": "Perfeito! Na topologia em estrela, os equipamentos são conectados a um nó central concentrador para integrar a comunicação entre os computadores. Em geral, o nó concentrador pode ser um hub ou um switch. ",
      },
    },
    {
      pergunta: "Em redes de comunicação de dados, existem três modos de transmissão: o simplex, em que os dados circulam em apenas um sentido; o half-duplex, em que os dados circulam nos dois sentidos ao mesmo tempo; e o full-duplex, também conhecido por ligação de alternância.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “A questão inverteu half-duplex e full-duplex. No primeiro, os dados circulam nos dois sentidos, mas de forma alternada: ambos podem transmitir e receber dados, porém nunca simultaneamente. No segundo, os dados circulam nos dois sentidos ao mesmo tempo. ", mensagensErradas: {
        "verdadeira": "A questão inverteu half-duplex e full-duplex. No primeiro, os dados circulam nos dois sentidos, mas de forma alternada: ambos podem transmitir e receber dados, porém nunca simultaneamente. No segundo, os dados circulam nos dois sentidos ao mesmo tempo. ",
      },
    },
    {
      pergunta: "Para viabilizar a comunicação de dados entre as unidades da empresa, podem ser utilizados serviços de interconexão com roteadores providos por operadoras de telecomunicação.",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] “Perfeito! Podem, sim, ser utilizados roteadores fornecidos por operadoras de telecomunicação para interconectar as redes. Essa é – inclusive – a função principal de um roteador! ", mensagensErradas: {
        "falsa": "Perfeito! Podem, sim, ser utilizados roteadores fornecidos por operadoras de telecomunicação para interconectar as redes. Essa é – inclusive – a função principal de um roteador! ",
      },
    },
    {
      pergunta: "Situação hipotética: Múltiplos hospedeiros devem ser conectados a LANs sem fio, a redes por satélite e a redes de fibra (HFC). Para isso, deve-se escolher entre dois tipos de canais distintos, em função das características da camada de enlace: difusão (broadcast) ou ponto a ponto. Assertiva: Nessa situação, deve-se fazer a conexão dos hospedeiros por meio de difusão.",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] “A questão afirma que, para conectar os múltiplos hospedeiros, deve-se escolher dois tipos de canais distintos: difusão ou ponto-a-ponto. Se eu conectar vários hospedeiros a uma rede local sem fio, a transmissão será em difusão porque toda transmissão enviada será recebida por todos os outros hospedeiros; se eu conectar vários hospedeiros a uma rede via satélite, a transmissão também será em difusão porque toda transmissão enviada será recebida por todos os outros hospedeiros. A grande dúvida da questão está relacionada à Rede HFC. Nós sabemos que o cabo coaxial que saido receptor óptico forma um barramento compartilhado, portanto a transmissão também será em difusão porque toda transmissão enviada será recebida por todos os outros hospedeiros. ", mensagensErradas: {
        "falsa": "A questão afirma que, para conectar os múltiplos hospedeiros, deve-se escolher dois tipos de canais distintos: difusão ou ponto-a-ponto. Se eu conectar vários hospedeiros a uma rede local sem fio, a transmissão será em difusão porque toda transmissão enviada será recebida por todos os outros hospedeiros; se eu conectar vários hospedeiros a uma rede via satélite, a transmissão também será em difusão porque toda transmissão enviada será recebida por todos os outros hospedeiros. A grande dúvida da questão está relacionada à Rede HFC. Nós sabemos que o cabo coaxial que saido receptor óptico forma um barramento compartilhado, portanto a transmissão também será em difusão porque toda transmissão enviada será recebida por todos os outros hospedeiros. ",
      },
    },
    {
      pergunta: "Em comparação com os fios de cobre, as fibras ópticas têm como desvantagem a baixa imunidade a interferências eletromagnéticas e à ação corrosiva de alguns elementos químicos presentes na atmosfera.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “Na verdade, fibras ópticas possuem maior imunidade a interferências eletromagnéticas e à ação corrosiva de alguns elementos químicos na atmosfera. ", mensagensErradas: {
        "verdadeira": "Na verdade, fibras ópticas possuem maior imunidade a interferências eletromagnéticas e à ação corrosiva de alguns elementos químicos na atmosfera. ",
      },
    },
    {
      pergunta: "Assinale a opção que indica equipamento que permite estabelecer a comunicação entre duas redes LAN (local area network) distintas que empregam cabeamento padrão UTP.",
      respostasErradas: [
        "hub",
        "storage",
        "access point",
        "conector de fibra óptica",
      ],
      respostaCorreta: "roteador",
      mensagem: "[CORRETA] é responsável por interconectar redes distintas",
      mensagensErradas: {
        "hub": "Errado, não conecta redes distintas",
        "storage": "Errado, é um equipamento para armazenamento de dados",
        "access point": "Errado, é um equipamento utilizado para estender recursos de uma rede local",
        "conector de fibra óptica": "Errado, não faz nenhum sentido",
      },
    },

    {
      pergunta: "Em redes locais, determinados equipamentos concentram o tráfego de dados entre os computadores. Alguns deles replicam os dados para todos os computadores da rede; outros permitem o tráfego de dados somente para o computador destinatário. Assinale a opção que apresenta equipamento utilizado para concentrar e transmitir dados somente ao computador destinatário, sem replicá-los a outros computadores conectados à mesma rede.",
      respostasErradas: [
        "smartphone",
        "hub",
        "conector RJ-45",
        "impressora",
      ],
      respostaCorreta: "switch",
      mensagem: "[CORRETA]  ele realmente permite transmitir dados em unicast, sem replicá-los a outros computadores",
      mensagensErradas: {
        "smartphone": "Errado, não faz nenhum sentido",
        "hub": "ele transmite os dados para todos os computadores em broadcast",
        "conector RJ-45": "Errado, não faz nenhum sentido",
        "impressora": "Errado, o examinador viajando!",
      },
    },
    {
      pergunta: "Um switch camada 2 (layer 2) pode substituir um roteador que interliga três redes de comunicação diferentes, desde que se apliquem as mesmas regras de roteamento que estão configuradas no roteador.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “Na verdade, um Switch Camada 3 (Layer 3) pode substituir um roteador que interliga três redes de comunicação diferentes, desde que se apliquem as mesmas regras de roteamento que estão configuradas no roteador. Um Switch Camada 2 não tem essa capacidade! ", mensagensErradas: {
        "verdadeira": "Na verdade, um Switch Camada 3 (Layer 3) pode substituir um roteador que interliga três redes de comunicação diferentes, desde que se apliquem as mesmas regras de roteamento que estão configuradas no roteador. Um Switch Camada 2 não tem essa capacidade! ",
      },
    },
    {
      pergunta: "O endereço físico MAC está associado à interface de comunicação que identifica, de forma única, cada dispositivo conectado a uma rede de computadores.",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] “Perfeito! Endereço Físico (também chamado de Endereço MAC) está associado à interface de um dispositivo de rede e possui um identificador único. ", mensagensErradas: {
        "falsa": "Perfeito! Endereço Físico (também chamado de Endereço MAC) está associado à interface de um dispositivo de rede e possui um identificador único. ",
      },
    },
    
    {
      pergunta: "O cabo coaxial, se comparado aos cabos de par trançado, tem maior largura de banda e apresenta maior atenuação do sinal.",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] “Perfeito! Ele realmente possui maior largura de banda em relação ao cabo de par trançado, além de apresentar maior atenuação de sinal. ", mensagensErradas: {
        "falsa": "Perfeito! Ele realmente possui maior largura de banda em relação ao cabo de par trançado, além de apresentar maior atenuação de sinal. ",
      },
    },
    {
      pergunta: "Devido à sua estrutura, em uma rede usando a topologia estrela, o isolamento de falhas é uma tarefa complexa, o que representa uma desvantagem dessa topologia.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “Na verdade, o simples isolamento de falhar é uma das vantagens da topologia estrela. Se a rede inteira cair, o problema é no dispositivo central; se apenas uma máquina cair, o problema é nessa máquina ou no enlace que a conecta ao dispositivo central. ", mensagensErradas: {
        "verdadeira": "Na verdade, o simples isolamento de falhar é uma das vantagens da topologia estrela. Se a rede inteira cair, o problema é no dispositivo central; se apenas uma máquina cair, o problema é nessa máquina ou no enlace que a conecta ao dispositivo central. ",
      },
    },
    
    {
      pergunta: "A topologia anel tem a fragilidade de tornar a rede inoperável ao tráfego unidirecional. Para transpor essa fragilidade, faz-se necessária a utilização de uma topologia híbrida.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “Não faz o menor sentido! A topologia em anel é inerentemente simplex (unidirecional), logo não pode tornar a rede inoperável. Como uma interrupção no anel pode derrubar toda a rede, pode ser considerada frágil, mas há alternativas que permitem mitigar essa fragilidade, como um anel duplo, redundâncias, entre outros. ", mensagensErradas: {
        "verdadeira": "Não faz o menor sentido! A topologia em anel é inerentemente simplex (unidirecional), logo não pode tornar a rede inoperável. Como uma interrupção no anel pode derrubar toda a rede, pode ser considerada frágil, mas há alternativas que permitem mitigar essa fragilidade, como um anel duplo, redundâncias, entre outros. ",
      },
    },
    {
      pergunta: "Em um roteador, as conexões LAN são dedicadas aos equipamentos da rede interna, enquanto a conexão WAN deve ser conectada ao gateway para garantir acesso à Internet.",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] “Perfeito! Em um roteador, você encontrará provavelmente 4 Portas LAN e 1 Porta WAN. As Portas LAN são dedicadas a conectar equipamentos da rede interna e a Porta WAN é utilizada para conectar o cabo que vem do Modem com o sinal da Internet. ", mensagensErradas: {
        "falsa": "Perfeito! Em um roteador, você encontrará provavelmente 4 Portas LAN e 1 Porta WAN. As Portas LAN são dedicadas a conectar equipamentos da rede interna e a Porta WAN é utilizada para conectar o cabo que vem do Modem com o sinal da Internet. ",
      },
    },
    
    {
      pergunta: "Diferentemente de roteadores, que encaminham os pacotes apenas aos equipamentos de destino, os switches encaminham os pacotes a todos os equipamentos que estão conectados na rede.",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] “ Tanto roteadores quanto switches podem trabalhar em unicast. O equipamento que encaminha pacotes a todos os equipamentos que estão conectados a ele – em broadcast – é o hub. ", mensagensErradas: {
        "verdadeira": " Tanto roteadores quanto switches podem trabalhar em unicast. O equipamento que encaminha pacotes a todos os equipamentos que estão conectados a ele – em broadcast – é o hub. ",
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
