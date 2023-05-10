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

function Administrativo() {
  const perguntas: PerguntaComMensagem[] = [
    {
      pergunta: "A administração pública pode estar sujeita tanto ao regime jurídico de direito privado quanto ao regime jurídico de direito público. ",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA]  A diferenciação entre o regime de direito público e o regime de direito privado é um trabalho doutrinário, porém difícil de se observar no mundo real. Por exemplo, no âmbito da Administração Pública, as relações jurídicas ora são regidas pelo direito público ora pelo direito privado. Cita-se, por exemplo, a realização de concurso público (direito público) e um contrato de financiamento (direito privado) realizados por uma empresa pública", mensagensErradas: {
        "Falso": "A diferenciação entre o regime de direito público e o regime de direito privado é um trabalho doutrinário, porém difícil de se observar no mundo real. Por exemplo, no âmbito da Administração Pública, as relações jurídicas ora são regidas pelo direito público ora pelo direito privado. Cita-se, por exemplo, a realização de concurso público (direito público) e um contrato de financiamento (direito privado) realizados por uma empresa pública",
      },
    },
    {
      pergunta: "Os princípios que balizam a atuação da Administração pública estão todos subordinados ao princípio da legalidade, erigido pela Constituição Federal como cláusula pétrea. ",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA]   Não há hierarquia entre os princípios. Quando houver um aparente conflito entreos princípios, deverá ser adotada uma ponderação entre eles para aplicar a interpretação que melhor seharmonize com a situação concreta, sem que exista um princípio que imediatamente esteja “acima dosdemais”. Por exemplo: a atuação administrativa deve pautar-se na lei, de tal forma que a Administraçãonão pode praticar ou manter os efeitos de atos ilegais; uma vez identificada a ilegalidade, em regra, aAdministração deverá realizar a anulação. No entanto, se a ilegalidade ocorreu há muito tempo, a suaanulação poderá trazer prejuízos maiores do que a manutenção do ato. Assim, o princípio da legalidade dá espaço para aplicação do princípio da segurança jurídica, de tal forma que o ato, ainda que ilegal, nãopoderá ser anulado quando houver a prescrição ou a decadência. Não significa que o princípio da segurançajurídica esteja acima do princípio da legalidade, mas no nosso exemplo, na ponderação entre os dois,prevaleceu o princípio da segurança jurídica. ", mensagensErradas: {
        "Verdadeiro": " Não há hierarquia entre os princípios. Quando houver um aparente conflito entreos princípios, deverá ser adotada uma ponderação entre eles para aplicar a interpretação que melhor seharmonize com a situação concreta, sem que exista um princípio que imediatamente esteja “acima dosdemais”. Por exemplo: a atuação administrativa deve pautar-se na lei, de tal forma que a Administraçãonão pode praticar ou manter os efeitos de atos ilegais; uma vez identificada a ilegalidade, em regra, aAdministração deverá realizar a anulação. No entanto, se a ilegalidade ocorreu há muito tempo, a suaanulação poderá trazer prejuízos maiores do que a manutenção do ato. Assim, o princípio da legalidade dá espaço para aplicação do princípio da segurança jurídica, de tal forma que o ato, ainda que ilegal, nãopoderá ser anulado quando houver a prescrição ou a decadência. Não significa que o princípio da segurançajurídica esteja acima do princípio da legalidade, mas no nosso exemplo, na ponderação entre os dois,prevaleceu o princípio da segurança jurídica. ",
      },
    },
    {
      pergunta: "São princípios que regem a administração pública expressos na Constituição Federal de 1988: legalidade, indivisibilidade, moralidade, publicidade e eficiência",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA]   essa é tranquila, mas importante! Os princípios expressos na Constituição Federalsão a legalidade, a impessoalidade, a moralidade, a publicidade e a eficiência. A questão está incorreta,uma vez que “indivisibilidade” não é princípio constitucional expresso. ", mensagensErradas: {
        "Verdadeiro": " essa é tranquila, mas importante! Os princípios expressos na Constituição Federalsão a legalidade, a impessoalidade, a moralidade, a publicidade e a eficiência. A questão está incorreta,uma vez que “indivisibilidade” não é princípio constitucional expresso. ",
      },
    },
    {
      pergunta: "O princípio que rege a administração pública, expressamente previsto na ConstituiçãoFederal de 1988, e que exige dos agentes públicos a busca dos melhores resultados e um menor custopossível, é o da eficiência",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA]   questão bem simples. O princípio da eficiência constaexpressamente na Constituição (dentro do LIMPE) e exige a busca pelos melhores resultados com o menorcusto possível, ou seja, fazer mais com menos recursos ", mensagensErradas: {
        "Falso": " questão bem simples. O princípio da eficiência constaexpressamente na Constituição (dentro do LIMPE) e exige a busca pelos melhores resultados com o menorcusto possível, ou seja, fazer mais com menos recursos ",
      },
    },
    {
      pergunta: "A previsão em lei de cláusulas exorbitantes aplicáveis aos contratos administrativosdecorre diretamente do princípio da supremacia do interesse público. ",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA]   As cláusulas exorbitantes são poderes especiais que a administraçãodispõe, nos contratos administrativo, para fazer prevalecer o interesse público. Um exemplo de cláusulaexorbitante é a possibilidade de alterar unilateralmente um contrato, independentemente da concordânciada outra parte, dentro dos limites permitidos em lei. Nesse caso, portanto, as cláusulas exorbitantes sãoexemplos de aplicação do princípio da supremacia.  ", mensagensErradas: {
        "Falso": " As cláusulas exorbitantes são poderes especiais que a administraçãodispõe, nos contratos administrativo, para fazer prevalecer o interesse público. Um exemplo de cláusulaexorbitante é a possibilidade de alterar unilateralmente um contrato, independentemente da concordânciada outra parte, dentro dos limites permitidos em lei. Nesse caso, portanto, as cláusulas exorbitantes sãoexemplos de aplicação do princípio da supremacia.  ",
      },
    },
    {
      pergunta: "O princípio da indisponibilidade do interesse público não impede a administração pública de realizar acordos e transações ",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA]   o STF entende ser possível atenuar o princípio da indisponibilidadedo interesse público, em particular na realização da transação, quando o ato não se demonstrar onerosopara a Administração e representar a melhor maneira para ultimar o interesse coletivo. Nesse sentido,vejamos a ementa do RE 252.885/MG: “Em regra, os bens e o interesse público são indisponíveis, porquepertencem à coletividade. É, por isso, o Administrador, mero gestor da coisa pública, não temdisponibilidade sobre os interesses confiados à sua guarda e realização. Todavia, há casos em que oprincípio da indisponibilidade do interesse público deve ser atenuado, mormente quando se tem em vistaque a solução adotada pela Administração é a que melhor atenderá à ultimação deste interesse. (...)  ", mensagensErradas: {
        "Falso": " o STF entende ser possível atenuar o princípio da indisponibilidadedo interesse público, em particular na realização da transação, quando o ato não se demonstrar onerosopara a Administração e representar a melhor maneira para ultimar o interesse coletivo. Nesse sentido,vejamos a ementa do RE 252.885/MG: “Em regra, os bens e o interesse público são indisponíveis, porquepertencem à coletividade. É, por isso, o Administrador, mero gestor da coisa pública, não temdisponibilidade sobre os interesses confiados à sua guarda e realização. Todavia, há casos em que oprincípio da indisponibilidade do interesse público deve ser atenuado, mormente quando se tem em vistaque a solução adotada pela Administração é a que melhor atenderá à ultimação deste interesse. (...)  ",
      },
    },
    {
      pergunta: "A atuação da Administração é pautada por determinados princípios, alguns positivados em âmbitoconstitucional ou legal e outros consolidados por construções doutrinárias. Exemplo de tais princípios sãoa tutela ou controle e a autotutela, que diferem entre si nos seguintes aspectos é através da tutela que aAdministração direta exerce o controle finalístico sobre entidades da Administração indireta, enquantopela autotutela exerce controle sobre seus próprios atos ",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA]   A assertiva está correta. A tutela trata do controle finalístico exercido pela Administração direta sobre aindireta, ou seja, trata-se de um controle que tem o objetivo de verificar o cumprimento das finalidadeslegais das entidades administrativas. Por outro lado, a autotutela trata do controle da administração sobreos seus próprios atos, permitindo realizar a anulação ou revogação, conforme o caso.   ", mensagensErradas: {
        "Falso": " A assertiva está correta. A tutela trata do controle finalístico exercido pela Administração direta sobre aindireta, ou seja, trata-se de um controle que tem o objetivo de verificar o cumprimento das finalidadeslegais das entidades administrativas. Por outro lado, a autotutela trata do controle da administração sobreos seus próprios atos, permitindo realizar a anulação ou revogação, conforme o caso.   ",
      },
    },
    {
      pergunta: "O princípio da continuidade dos serviços públicos",
      respostasErradas: ["afasta a possibilidade de interrupção, ainda que se trate de sistema de remuneração por tarifa no qual o usuário dos referidos serviços esteja inadimplente", "diz respeito, apenas, a serviços públicos, não alcançando as demais atividades administrativas", "torna ilegal a greve de servidores públicos", "impede a paralisação, ainda que a justificativa desta seja o aperfeiçoamento das atividades"],
      respostaCorreta: "tem relação direta com os princípios da eficiência e da supremacia do interesse público",
      mensagem: "[CORRETA]  o princípio da continuidade tem relação com o princípio da supremacia, pois deve prevalecer o interessepúblico em detrimento do interesse privado da empresa ou do agente que pretende paralisar a suaprestação; e também tem relação com o princípio da eficiência, pois a qualidade do serviço é diretamenteligada à sua prestação continuada",
      mensagensErradas: {
        "afasta a possibilidade de interrupção, ainda que se trate de sistema de remuneração por tarifa no qual o usuário dos referidos serviços esteja inadimplente": "  a legislação permite a interrupção dos serviços por falta de pagamento da tarifa da prestação dosserviços. Nesse caso, prevalece o interesse público em detrimento do interesse privado, pois se não fossepossível a interrupção do serviço por inadimplência, consequentemente o custeio dos serviços poderia sertornar inviável pela falta de pagamento de vários usuários – ERRADA ",
        "diz respeito, apenas, a serviços públicos, não alcançando as demais atividades administrativas": "o princípio aplica-se predominantemente aos serviços públicos, porém alcança todas as atividadesadministrativas, já que a interrupção destas também afeta o interesse público – ERRADA; ",
        "torna ilegal a greve de servidores públicos": " a greve dos servidores públicos não é, em si, ilegal, pois se trata de um direito assegurado na ConstituiçãoFederal. A falta de regulamentação específica, entretanto, fez o STF determinar a aplicação das normasprivadas aos servidores públicos, até que o Poder Legislativo elabore a norma correspondente. Porém,ressalva-se que algumas categorias não podem exercer o direito de greve, seja por expressa previsãoconstitucional (militares), ou por entendimento do STF (policiais civis, categorias de segurança pública) –ERRADA; ",
        "impede a paralisação, ainda que a justificativa desta seja o aperfeiçoamento das atividades": "o princípio não é absoluto, uma vez que pode ocorrer a paralisação temporária, seja por manutenção ou aperfeiçoamento do serviço, ou ainda em virtude de inadimplência no pagamento da fatura – ERRADA.",
      },
    },
    {
      pergunta: "Processo administrativo é um conjunto concatenado de atos administrativos sequenciais, respeitada aordem legal, com uma finalidade específica que não confronte com o interesse público, ensejando a práticade um ato final. Como corolário do princípio da ampla defesa vigente no processo administrativo, tem-se adefesa técnica, que é exercida pela imprescindível presença de advogado no processo administrativodisciplinar, sob pena de nulidade.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA]   Conforme enunciado da Súmula Vinculante º 5 do STF, a “falta de defesa técnica por advogado no processoadministrativo disciplinar não ofende a Constituição”. Logo, a defesa por advogado não é indispensável,motivo pelo qual a questão está errada.   ", mensagensErradas: {
        "Verdadeiro": " Conforme enunciado da Súmula Vinculante º 5 do STF, a “falta de defesa técnica por advogado no processoadministrativo disciplinar não ofende a Constituição”. Logo, a defesa por advogado não é indispensável,motivo pelo qual a questão está errada.   ",
      },
    },
  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
};

export default Administrativo;
