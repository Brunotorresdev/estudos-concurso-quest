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
    {
      pergunta: "O princípio que rege a administração pública, expressamente previsto na Constituição Federal de 1988, e que exige dos agentes públicos a busca dos melhores resultados e um menor custo possível, é o da eficiência",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA]   questão bem simples. O princípio da eficiência consta expressamente na Constituição (dentro do LIMPE) e exige a busca pelos melhores resultados com o menor custo possível, ou seja, fazer mais com menos recursos ", mensagensErradas: {
        "Falso": "questão bem simples. O princípio da eficiência consta expressamente na Constituição (dentro do LIMPE) e exige a busca pelos melhores resultados com o menor custo possível, ou seja, fazer mais com menos recursos ",
      },
    },
    {
      pergunta: "Princípio da legalidade",
      respostasErradas: ["significa que os administrados (particulares) podem fazer tudo que não estiver proibido em lei."],
      respostaCorreta: "a Administração Pública somente poderá agir quando houver lei determinando ou autorizando a sua atuação. O princípio envolve qualquer tipo de norma, incluindo atos secundários como os decretos e instruções normativas. No entanto, os atos secundários não podem criar direitos e obrigações",
      mensagem: "[CORRETA] a Administração Pública somente poderá agir quando houver lei determinando ou autorizando a sua atuação. O princípio envolve qualquer tipo de norma, incluindo atos secundários como os decretos e instruções normativas. No entanto, os atos secundários não podem criar direitos e obrigações ", mensagensErradas: {
        "significa que os administrados (particulares) podem fazer tudo que não estiver proibido em lei.": "a Administração Pública somente poderá agir quando houver lei determinando ou autorizando a sua atuação. O princípio envolve qualquer tipo de norma, incluindo atos secundários como os decretos e instruções normativas. No entanto, os atos secundários não podem criar direitos e obrigações ",
      },
    },
    {
      pergunta: "Princípio da autonomia da vontade",
      respostasErradas: ["a Administração Pública somente poderá agir quando houver lei determinando ou autorizando a sua atuação. O princípio envolve qualquer tipo de norma, incluindo atos secundários como os decretos e instruções normativas. No entanto, os atos secundários não podem criar direitos e obrigações. "],
      respostaCorreta: "significa que os administrados (particulares) podem fazer tudo que não estiver proibido em lei",
      mensagem: "[CORRETA] significa que os administrados (particulares) podem fazer tudo que não estiver proibido em lei ", mensagensErradas: {
        "a Administração Pública somente poderá agir quando houver lei determinando ou autorizando a sua atuação. O princípio envolve qualquer tipo de norma, incluindo atos secundários como os decretos e instruções normativas. No entanto, os atos secundários não podem criar direitos e obrigações. ": "significa que os administrados (particulares) podem fazer tudo que não estiver proibido em lei",
      },
    },
    {
      pergunta: "Reserva legal",
      respostasErradas: ["medida provisória, estado de defesa e estado de sítio. "],
      respostaCorreta: "trata das matérias que a Constituição exige que obrigatoriamente sejam disciplinadas em lei em sentido estrito (lei formal).",
      mensagem: "[CORRETA] trata das matérias que a Constituição exige que obrigatoriamente sejam disciplinadas em lei em sentido estrito (lei formal)", mensagensErradas: {
        "medida provisória, estado de defesa e estado de sítio. ": "trata das matérias que a Constituição exige que obrigatoriamente sejam disciplinadas em lei em sentido estrito (lei formal)",
      },
    },
    {
      pergunta: "Restrições (exceções) excepcionais ao princípio da legalidade",
      respostasErradas: ["Reserva legal:"],
      respostaCorreta: "medida provisória, estado de defesa e estado de sítio.",
      mensagem: "[CORRETA] medida provisória, estado de defesa e estado de sítio. ", mensagensErradas: {
        "Reserva legal:": "medida provisória, estado de defesa e estado de sítio. ",
      },
    },
    {
      pergunta: "A previsão em lei de cláusulas exorbitantes aplicáveis aos contratos administrativosdecorre diretamente do princípio da supremacia do interesse público",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA]  a assertiva está correta. As cláusulas exorbitantes são poderes especiais que a administraçãodispõe, nos contratos administrativo, para fazer prevalecer o interesse público. Um exemplo de cláusulaexorbitante é a possibilidade de alterar unilateralmente um contrato, independentemente da concordânciada outra parte, dentro dos limites permitidos em lei. Nesse caso, portanto, as cláusulas exorbitantes sãoexemplos de aplicação do princípio da supremacia. ", mensagensErradas: {
        "falsa:": " a assertiva está correta. As cláusulas exorbitantes são poderes especiais que a administraçãodispõe, nos contratos administrativo, para fazer prevalecer o interesse público. Um exemplo de cláusulaexorbitante é a possibilidade de alterar unilateralmente um contrato, independentemente da concordânciada outra parte, dentro dos limites permitidos em lei. Nesse caso, portanto, as cláusulas exorbitantes sãoexemplos de aplicação do princípio da supremacia. ",
      },
    },
    {
      pergunta: "O princípio da indisponibilidade do interesse público não impede a administração pública derealizar acordos e transações",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA]  a assertiva está correta. o STF entende ser possível atenuar o princípio da indisponibilidadedo interesse público, em particular na realização da transação, quando o ato não se demonstrar onerosopara a Administração e representar a melhor maneira para ultimar o interesse coletivo. Nesse sentido,vejamos a ementa do RE 252.885/MG: “Em regra, os bens e o interesse público são indisponíveis, porquepertencem à coletividade. É, por isso, o Administrador, mero gestor da coisa pública, não temdisponibilidade sobre os interesses confiados à sua guarda e realização. Todavia, há casos em que oprincípio da indisponibilidade do interesse público deve ser atenuado, mormente quando se tem em vistaque a solução adotada pela Administração é a que melhor atenderá à ultimação deste interesse. (...)”", mensagensErradas: {
        "falsa:": " a assertiva está correta. o STF entende ser possível atenuar o princípio da indisponibilidadedo interesse público, em particular na realização da transação, quando o ato não se demonstrar onerosopara a Administração e representar a melhor maneira para ultimar o interesse coletivo. Nesse sentido,vejamos a ementa do RE 252.885/MG: “Em regra, os bens e o interesse público são indisponíveis, porquepertencem à coletividade. É, por isso, o Administrador, mero gestor da coisa pública, não temdisponibilidade sobre os interesses confiados à sua guarda e realização. Todavia, há casos em que oprincípio da indisponibilidade do interesse público deve ser atenuado, mormente quando se tem em vistaque a solução adotada pela Administração é a que melhor atenderá à ultimação deste interesse. (...)”",
      },
    },
    {
      pergunta: "O princípio da proporcionalidade, que determina a adequação entre os meios e os fins, deveser obrigatoriamente observado no processo administrativo, sendo vedada a imposição de obrigações, restrições e sanções em medida superior àquelas estritamente necessárias ao atendimento do interessepúblico. ",
      respostasErradas: ["falsa"],
      respostaCorreta: "verdadeira",
      mensagem: "[CORRETA] A assertiva está correta. A legislação de processo administrativo exige a aplicação de adequação entremeios e fins, vedada a imposição de obrigações, restrições e sanções em medida superior àquelasestritamente necessárias ao atendimento do interesse público (Lei 9.784/99, art. 2º, parágrafo único, VI),sendo essa justamente a aplicação dos princípios da razoabilidade e da proporcionalidade. ", mensagensErradas: {
        "falsa:": "A assertiva está correta. A legislação de processo administrativo exige a aplicação de adequação entremeios e fins, vedada a imposição de obrigações, restrições e sanções em medida superior àquelasestritamente necessárias ao atendimento do interesse público (Lei 9.784/99, art. 2º, parágrafo único, VI),sendo essa justamente a aplicação dos princípios da razoabilidade e da proporcionalidade. ",
      },
    },
    {
      pergunta: "Em decorrência do princípio da segurança jurídica, é proibido que nova interpretação de norma administrativa tenha efeitos retroativos, exceto quando isso se der para atender o interesse público",
      respostasErradas: ["verdadeira"],
      respostaCorreta: "falsa",
      mensagem: "[CORRETA] Na verdade, o princípio da segurança jurídica veda a aplicação retroativa de nova interpretação. Isso nãosignifica que ele vede a evolução da interpretação, uma vez que, no direito, é muito comum a mudança deentendimentos conforme os acontecimentos da sociedade. O que se veda é que essa nova interpretaçãovolte no tempo. Por isso, o novo entendimento vale do momento em que ele for proferido em diante. Nessalinha, o item está incorreto, pois não se pode alegar o interesse público para voltar no tempo com ainterpretação. Por exemplo: se a administração mudar o entendimento sobre o pagamento de umbenefício, “voltar no tempo” pode atender ao interesse público, pois isso representaria a devolução dedinheiro já pago. Contudo, isso fere o princípio da segurança jurídica (tanto no aspecto objetivo comosubjetivo).  ", mensagensErradas: {
        "verdadeira:": "Na verdade, o princípio da segurança jurídica veda a aplicação retroativa de nova interpretação. Isso nãosignifica que ele vede a evolução da interpretação, uma vez que, no direito, é muito comum a mudança deentendimentos conforme os acontecimentos da sociedade. O que se veda é que essa nova interpretaçãovolte no tempo. Por isso, o novo entendimento vale do momento em que ele for proferido em diante. Nessalinha, o item está incorreto, pois não se pode alegar o interesse público para voltar no tempo com ainterpretação. Por exemplo: se a administração mudar o entendimento sobre o pagamento de umbenefício, “voltar no tempo” pode atender ao interesse público, pois isso representaria a devolução dedinheiro já pago. Contudo, isso fere o princípio da segurança jurídica (tanto no aspecto objetivo comosubjetivo). ",
      },
    },
    {
      pergunta: "(Cebraspe – PC RJ/2022) Os princípios constitucionais do direito administrativo",
      respostasErradas: ["podem ser aplicados diretamente pelo gestor público, mas não em sentido contrário à lei (contra legem),ainda que o interesse público aponte neste sentido", "são enumerados taxativamente no caput do art. 37 da CF, que define seus limites e possibilidades", "não se limitam à lista do art. 37 da CF, embora impliquem, ontologicamente, comandos genéricosincapazes de vincular positivamente a ação administrativa", "são imponderáveis, porquanto enunciam máximas fundamentais para a compreensão do direitoadministrativo"],
      respostaCorreta: "podem justificar decisões administrativas sem a intermediação da lei, tal como aconteceu com ainterpretação feita pelo Conselho Nacional de Justiça acerca de nepotismo",
      mensagem: "[CORRETA]  o Conselho Nacional de Justiça – CNJ editou a Resolução 7/2005, vedando a prática do nepotismo nosórgãos do Poder Judiciário. Na ocasião, entidades questionaram a Resolução, alegando que não haviavedação ao nepotismo na Constituição Federal (pois é, teve gente que apresentou esse argumento, rs.) e queo assunto dependia de lei em sentido formal. Contudo, o STF entendeu, no RE 579.951 (julgado em 2008),que a vedação do nepotismo não exige a edição de lei formal para coibir a prática, uma vez que a proibiçãoque decorre diretamente dos princípios contidos no art. 37, caput, da Constituição Federal. Assim, osprincípios constitucionais podem justificar as decisões administrativas independentemente de lei, pois sãoautoaplicáveis – CORRETA",
      mensagensErradas: {
        "podem ser aplicados diretamente pelo gestor público, mas não em sentido contrário à lei (contra legem),ainda que o interesse público aponte neste sentido": "esse tema que não é pacífico e, no meu ponto de vista, a banca acabou seguindo uma corrente que não éa principal. Ampla corrente doutrinária defende a ideia de legalidade estrita, no sentido de que aAdministração Pública não pode se desbordar da lei. O agente público somente pode fazer o que a leidetermina ou autoriza, não lhe sendo autorizado agir de forma contrária (contra legem) ou quando faltarautorização legal sobre o tema (praeter legem).Creio que a questão considerou a interpretação do STF na ADI 3745, que tratou sobre o nepotismo.Posteriormente, o STF usou entendimento semelhante ao elaborar a Súmula Vinculante 13. O Supremoentendeu que os princípios constitucionais são autoaplicáveis e, portanto, independem de edição de leiformal.Isso, porém, não significa que o agente está atuando de forma contrária à lei (afinal, não havia nenhuma leideterminando que se “cometesse nepotismo”, certo?).Acrescenta-se que vivemos em um Estado Democrático de Direito (ou seja, um Estado que elaborademocraticamente as suas leis e, que, ao mesmo tempo, está sujeito às suas normas). Por fim, o conceito de“interesse público” possui bastante subjetividade, ao ponto que poderia ser usado simplesmente para deixarde seguir as leis, em benefício de interesses ou meras opiniões de cada gestor.O assunto merece muito debate, mas uma questão objetiva não seria o melhor lugar para tratar do assunto.Por isso, não concordo com o gabarito, ainda que entenda que existem situações (muito excepcionais) quepoderiam defender que o interesse público poderia justificar uma atuação em desconformidade com as leis– ERRADA",
        "são enumerados taxativamente no caput do art. 37 da CF, que define seus limites e possibilidades": "o art. 37 não é taxativo, pois existem outros diversos princípios previstos tanto na CF/88 quanto noordenamento jurídico brasileiro – ERRADA",
        "não se limitam à lista do art. 37 da CF, embora impliquem, ontologicamente, comandos genéricosincapazes de vincular positivamente a ação administrativa": "os princípios vinculam sim a atuação administrativa, conforme vimos no fundamento da edição da SúmulaVinculante 13 (vedação ao nepotismo), pautada nos princípios da moralidade e da impessoalidade – ERRADA",
        "são imponderáveis, porquanto enunciam máximas fundamentais para a compreensão do direito administrativo": "em caso de conflito, é possível sim a ponderação dos princípios, com base no que estiver sendo analisadono caso concreto. Assim, pela “ponderação”, a autoridade vai definir qual princípio deverá prevalecer emcada condições. Exemplo: se o ato é nulo, ele (em regra) será anulado (prevalece o princípio da legalidade),mas se foi praticado há muito tempo será possível realizar a sua manutenção (prevalece o princípio dasegurança jurídica) – ERRADA.",
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
