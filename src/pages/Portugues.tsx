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

function Portugues() {
  const perguntas: PerguntaComMensagem[] = [
    {
      pergunta: "O que é fonema?",
      respostasErradas: [
        "Representação grafica de um som",
        "2 letras com um som",
      ],
      respostaCorreta: "Unidade Sonora para formar palavras",
      mensagem: "[CORRETA] Unidade Sonora para formar palavras",
      mensagensErradas: {
        "Representação grafica de um som":
          "Representação grafica de um som é uma letra",
        "2 letras com um som": "2 letras com um som é um digrafo nasal.",
      },
    },
    {
      pergunta: "O que é digrafo nasal?",
      respostasErradas: [
        "Unidade Sonora para formar palavras",
        "Representação grafica de um som",
      ],
      respostaCorreta: "2 letras com um som Ex: CH, SC, LH",
      mensagem: "[CORRETA] é digrafo nasal",
      mensagensErradas: {
        "Unidade Sonora para formar palavras": "é fonema",
        "Representação grafica de um som":
          "Representação grafica de um som é uma letra",
      },
    },
    {
      pergunta: "O que é encontro consonantal?",
      respostasErradas: [
        "Unidade Sonora para formar palavras",
        "2 letras com um som",
      ],
      respostaCorreta: "2 fonemas em uma palavra: ex: BRado, CLaro, aDVento",
      mensagem: "[CORRETA] é encontro consonantal",
      mensagensErradas: {
        "Unidade Sonora para formar palavras": "é fonema",
        "2 letras com um som": "2 letras com um som é um digrafo nasal.",
      },
    },
    {
      pergunta: "quais palavras sao ditongo ?",
      respostasErradas: ["Uruguai, Saguão, iguais", "saúde, caótico"],
      respostaCorreta: "imóveis, azeite, meu",
      mensagem: "[CORRETA] 1 vogal e uma semivogal",
      mensagensErradas: {
        "Uruguai, Saguão, iguais": "uma vogal entre 2 semivogais = tritongo",
        "saúde, caótico":
          "encontro de vogais em silabas diferentes, Hiato = sa-ú-de, ca-ó-ti-co",
      },
    },
    {
      pergunta: "Assinale a alternativa que apresenta uma palavra que NÃO tenha um dígrafo consonantal, ou seja, duas letras que, juntas, representam um som de consoante.",
      respostasErradas: ["Esquecer", "Trabalhar", "Sorriso"],
      respostaCorreta: "Principalmente",
      mensagem: "[CORRETA] Em 'Principalmente' temos o encontro consonantal (2 consoantes 2 sons) 'PR' e um digrafo nasal 'EN' ",
      mensagensErradas: {
        "Esquecer": "Digrafo nasal (2 consoantes um som 'QU')",
        "Trabalhar": "Digrafo nasal (2 consoantes um som 'lh')",
        "Sorriso": "Digrafo nasal (2 consoantes um som 'rr')",
      },
    },
    {
      pergunta: "Conhecer os sons das letras, a pronúncia dos dígrafos e dífonos, dos encontros vocálicos e dos consonantais, dos tritongos, dos ditongos e dos hiatos faz parte da boa Oratória. A única sequência que apresenta CORREÇÃO quanto a isso é: an",
      respostasErradas: ["A palavra “subsídio” possui o som de /zê/ no segundo “s”.", "As palavras “sintaxe” e “inexorável” possuem a letra “x” com som de /ks/.", "As palavras “gratuito”, “fortuito” e “circuito” têm tonicidade no “i”.", "As palavras como “cruz” e “mas” são pronunciadas com o som /iz/"],
      respostaCorreta: " As palavras “distinguir”, “extinguir” e “adquirir” não têm o “u” pronunciado",
      mensagem: "[CORRETA] As palavras “distinguir”, “extinguir” e “adquirir” não têm o “u” pronunciado, pois temos dígrafo GU e QU.",
      mensagensErradas: {
        "A palavra “subsídio” possui o som de /zê/ no segundo “s”.": "A palavra “subsídio” possui o som de /cê/ no segundo “s”, como em suiCÍdio.",
        "As palavras “sintaxe” e “inexorável” possuem a letra “x” com som de /ks/.": "As palavras “sintaxe” e “inexorável” possuem a letra “x” com som de 'SS' (*sintaSSE) e 'Z' (*ineZorável)",
        "As palavras “gratuito”, “fortuito” e “circuito” têm tonicidade no “i”.": "As palavras 'gratUito', 'fortUito' e 'circuito' têm tonicidade no 'U'.)",
        "As palavras como “cruz” e “mas” são pronunciadas com o som /iz/": "As palavras como “cruz” e “mas” são pronunciadas com o som /S/. Gabarito letra D",
      },
    },
    {
      pergunta: "Considerando o emprego do vocábulo “perenes”, julgue o item a seguir. O vocábulo é uma paroxítona e pode ser classificado como polissílabo.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] paroxítona trissílaba",
      mensagensErradas: {
        "Verdadeiro": "Na verdade, é uma paroxítona trissílaba. Polissílaba deve possuir 4 ou mais sílabas",
      },
    },
    {
      pergunta: "Assim como o vocábulo “remédios”, a forma verbal da oração Eu sempre remédio a situação lá em casa. também está corretamente acentuada.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] O substantivo “re-mé-dio” é acentuado por ser uma paroxítona terminada em ditongo. A forma verbal seria “remedeio”, não remedio. Questão incorreta.",
      mensagensErradas: {
        "Verdadeiro": "O substantivo “re-mé-dio” é acentuado por ser uma paroxítona terminada em ditongo. A forma verbal seria “remedeio”, não remedio. Questão incorreta.",
      },
    },
    {
      pergunta: "Presentes no último parágrafo do texto, os vocábulos “qualidade”, “perspectiva”, “essas”, “conjunto” e “chamada” contêm grupos de duas letras que representam um só fonema, constituindo o que se denomina dígrafo ou digrama.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] A questão traz a definição correta de “dígrafo” (duas letras que representam um único som). Porém, a cobrança foi covarde, pois pediu uma palavra que não traz dígrafo, traz mero encontro consonantal (duas consoantes e dois sons).",
      mensagensErradas: {
        "Verdadeiro": "A pegadinha estava na palavra “pers-pec-ti-va”, pois “RS” não é dígrafo, não forma um som único. A maldade está no fato de que as pessoas geralmente não pronunciam esse “R”, apenas o “S”. Observe também que, na palavra “qualidade”, “qu” não é dígrafo, pois não é pronunciado com um som único. Na verdade, “quA” traz um ditongo. Já na palavra “quero”, “qu” representa um som único, som de /K/. Gravem essas palavras, já foram cobradas outras vezes. Questão incorreta.",
      },
    },
    {
      pergunta: "A respeito das palavras destacadas no excerto “Faz parte do processo de amadurecimento”, assinale a alternativa correta.",
      respostasErradas: ["Em “processo”, ocorrem dois encontros consonantais", "Ocorrem encontros consonantais nas duas palavras", "Em “processo”, ocorre hiato", "Em “amadurecimento”, ocorre ditongo nasal"],
      respostaCorreta: "Ocorrem dígrafos nas duas palavras",
      mensagem: "[CORRETA] Resposta certa ",
      mensagensErradas: {
        "Em “processo”, ocorrem dois encontros consonantais": "Em “pro-ces-so”, ocorrem um encontro consonantal (pr) e um dígrafo (ss).",
        "Ocorrem encontros consonantais nas duas palavras": "Ocorre encontro consonantal apenas em “pro-ces-so” (pr). Em a-ma-du-re-ci-men-to ocorre dígrafo vocálico (nasal = en).",
        "Em “processo”, ocorre hiato": " Não ocorre hiato, pois não há encontro de vogais em sílabas diferentes.",
        "Em “amadurecimento”, ocorre ditongo nasal": "Em “amadurecimento”, ocorre dígrafo nasal.",
      },
    },
    {
      pergunta: "“Será que têm bagagem suficiente para criticar?” – “será” recebe acento por se tratar de uma oxítona terminada em “a”.",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA] Exatamente: se-rá - acentuam-se as oxítonas terminadas A, E, O, em, ens (primeira regra). ",
      mensagensErradas: {
        "Falso": "acentuam-se as oxítonas terminadas A, E, O, em, ens (primeira regra). ",
      },
    },
    {
      pergunta: "São exemplos de palavras oxítonas acentuadas graficamente: “também”, “permitirá” e “elevará”",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA] Acentuam-se as oxítonas terminadas em “A(s), E(s), O(s), Em, Ens” ",
      mensagensErradas: {
        "Falso": "Acentuam-se as oxítonas terminadas em “A(s), E(s), O(s), Em, Ens”",
      },
    },
    {
      pergunta: "O emprego de acento agudo nas palavras “elétricos” (l.7), “pálidas” (l.7) e “móveis” (l.8) justificase pela mesma regra de acentuação gráfica.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] “e-lé-tri-cos” e “pá-li-das” são proparoxítonas; “mó-veis” se acentua por ser paroxítona terminada em ditongo ",
      mensagensErradas: {
        "Verdadeiro": "“e-lé-tri-cos” e “pá-li-das” são proparoxítonas; “mó-veis” se acentua por ser paroxítona terminada em ditongo ",
      },
    },
    {
      pergunta: "Tendo em vistas as regras de acentuação gráfica da Língua Portuguesa, julgue o item a seguir. “É incrível e, ao mesmo tempo, muito preocupante.” – o termo em destaque recebe o acento por corresponder a uma paroxítona terminada em “L”. ",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA] In-crí-vel é paroxítona e termina em L, então é acentuada pela regra geral das paroxítonas.",
      mensagensErradas: {
        "Falso": "In-crí-vel é paroxítona e termina em L, então é acentuada pela regra geral das paroxítonas.",
      },
    },
    {
      pergunta: "No que concerne aos aspectos linguístico‐estruturais do texto, julgue o item. A mesma regra explica a acentuação gráfica dos vocábulos “açúcar”, “substância”, “óleo” e “técnicas”, presentes no último parágrafo do texto.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] 'ó-leo' e 'subs-tân-cia' são acentuadas por serem paroxítonas terminadas em ditongo. 'a-çúcar' é paroxítona terminada em R, então cai na regra geral da paroxítona (acentuam-se todas, exceto as terminadas em a(s), e(s), o(s), em, ens). ",
      mensagensErradas: {
        "Verdadeiro": "'ó-leo' e 'subs-tân-cia' são acentuadas por serem paroxítonas terminadas em ditongo. 'a-çúcar' é paroxítona terminada em R, então cai na regra geral da paroxítona (acentuam-se todas, exceto as terminadas em a(s), e(s), o(s), em, ens). ",
      },
    },
    {
      pergunta: "Entre as alternativas a seguir, assinale aquela em que as duas palavras, retiradas do texto, são acentuadas graficamente por causa de regras diferentes. ",
      respostasErradas: ["única – política", "atlântico – doméstico", "além – também", "saúde – país"],
      respostaCorreta: "três – até",
      mensagem: "[CORRETA] TRÊS / A-TÉ. (Três recebe acento por ser monossílabo tônico terminado e E; por outro lado, até recebe acento por ser oxítona terminada em E. São regras diferentes.)",
      mensagensErradas: {
        "única – política": "Ú-NI-CA / PO-LÍ-TI-CA. (todas as proparoxítonas são acentuadas)",
        "atlântico – doméstico": " A-TLÂN-TI-CO / DO-MÉS-TI-CO. (todas as proparoxítonas são acentuadas)",
        "além – também": "A-LÉM / TAM-BÉM. (Acentuam as oxítonas terminadas em A(s), E(s), O(s), Em, Ens",
        "saúde – país": " SA-Ú-DE/ PA-ÍS. (Regra do Hiato: Acentua-se I ou U tônico, sozinho ou seguido de S, formando hiato com sílaba anterior. Veremos o detalhamento dessa regra adiante)",
      },
    },
    {
      pergunta: "As palavras cérebro, ergométrica, evidências são acentuados porque são proparoxítonos ",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] E-VI-DÊN-CIAS é uma paroxítona terminada em ditongo, não uma proparoxítona. Essa questão prova que, se a questão não sinalizar a cobrança da regra da proparoxítona eventual, esta não deve ser considerada. Veja que, se considerasse, o gabarito deveria ser correto, mas não foi. Isso prova que evidências não é considerada proparoxítona eventual esse é o entendimento dominante em prova", mensagensErradas: {
        "Verdadeiro": "E-VI-DÊN-CIAS é uma paroxítona terminada em ditongo, não uma proparoxítona. Essa questão prova que, se a questão não sinalizar a cobrança da regra da proparoxítona eventual, esta não deve ser considerada. Veja que, se considerasse, o gabarito deveria ser correto, mas não foi. Isso prova que evidências não é considerada proparoxítona eventual esse é o entendimento dominante em prova",
      },
    },
    {
      pergunta: "A alternativa em que todas as palavras obedecem a mesma norma de acentuação gráfica é: ",
      respostasErradas: ["saúde - solúvel - saída", "café - você - corrói", "pólo - álbum - táxi"],
      respostaCorreta: "pátria - indícios - critério",
      mensagem: "[CORRETA] Todas as palavras são acentuadas por serem paroxítonas terminadas em ditongo",
      mensagensErradas: {
        "saúde - solúvel - saída": "SA-Ú-DE e SA-Í-DA são acentuadas por apresentarem hiato na sílaba tônica e a palavra SO-LÚVEL é acentuada por ser proparoxítona terminada em L",
        "café - você - corrói": "  CA-FÉ e VO-CÊ são acentuadas por serem oxítonas terminadas em 'e'. A palavra COR-RÓI é acentuada por ser oxítona terminada em ditongo aberto. ",
        "pólo - álbum - táxi": " A palavra POLO não recebe mais acento depois do Acordo Ortográfico. As palavras ÁL-BUM e TÁ-XI são acentuadas por serem paroxítonas",
      },
    },
    {
      pergunta: "As palavras “pássaros”, “aquático” e “poluídas” são acentuadas de acordo com a mesma regra de acentuação gráfica.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] pás-sa-ros e a-quá-ti-co são acentuadas por serem proparoxítonas; po-lu-í-das é acentuada pela regra do hiato", mensagensErradas: {
        "Verdadeiro": "pás-sa-ros e a-quá-ti-co são acentuadas por serem proparoxítonas; po-lu-í-das é acentuada pela regra do hiato",
      },
    },
    {
      pergunta: "Tendo em vistas as regras de acentuação gráfica da Língua Portuguesa, julgue o item a seguir. “(...) os indivíduos passaram a adquirir com o passar do tempo.” – O termo destacado é acentuado por apresentar o “i” tônico em hiato.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] IN-DI-VÍ-DUOS é acentuada por ser uma paroxítona terminada em ditongo", mensagensErradas: {
        "Verdadeiro": "IN-DI-VÍ-DUOS é acentuada por ser uma paroxítona terminada em ditongo",
      },
    },
    {
      pergunta: "Os vocábulos “ciúme”, “atribuída” e “reúne” são acentuados graficamente de acordo com a mesma regra de acentuação gráfica.",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA] “CI-Ú-ME”, “A-TRI-BU-Í-DA” E “RE-Ú-NE” são acentuadas pela regra do hiato: Acentuam-se o I ou U tônico, sozinho ou seguido de S, formando hiato com sílaba anterior", mensagensErradas: {
        "Falso": "“CI-Ú-ME”, “A-TRI-BU-Í-DA” E “RE-Ú-NE” são acentuadas pela regra do hiato: Acentuam-se o I ou U tônico, sozinho ou seguido de S, formando hiato com sílaba anterior",
      },
    },
    {
      pergunta: "É aplicável a mesma justificativa para se acentuar as palavras “raízes”, “artífices” e “país”",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] RA-Í-ZES e PA-ÍS são acentuadas pela regra do hiato. Ar-TÍ-fi-ces é uma proparoxítona", mensagensErradas: {
        "Verdadeiro": "RA-Í-ZES e PA-ÍS são acentuadas pela regra do hiato. Ar-TÍ-fi-ces é uma proparoxítona",
      },
    },
    {
      pergunta: "Tendo em vistas as regras de acentuação gráfica da Língua Portuguesa, julgue o item a seguir. “Será que eles têm bagagem suficiente para criticar?” – o verbo “ter”, nesse contexto, recebe acento para que haja concordância com seu sujeito.",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA] O verbo 'têm' recebeu acento diferencial de número, que indica o plural e a concordância com 'eles' ", mensagensErradas: {
        "Falso": "O verbo 'têm' recebeu acento diferencial de número, que indica o plural e a concordância com 'eles' ",
      },
    },
    {
      pergunta: "“Tem” é o verbo ter no plural e “têm” é o verbo ter no singular",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] É o contrário: “Têm” é o verbo ter no plural e “tem” é o verbo ter no singular. O circunflexo é um acento diferencial de número plural", mensagensErradas: {
        "Verdadeiro": "É o contrário: “Têm” é o verbo ter no plural e “tem” é o verbo ter no singular. O circunflexo é um acento diferencial de número plural",
      },
    },
    {
      pergunta: " Do que a terra mais garrida Teus risonhos, lindos campos têm mais flores; 'Nossos bosques têm mais vida', 'Nossa vida' no teu seio 'mais amores'. Julgue o item abaixo. A palavra “têm” continua com acento diferencial após a última reforma ortográfica da língua portuguesa, assim como crêem e vêem.  ",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] Têm é acentuado pela regra do acento diferencial; “creem e veem” perderam o acento com a reforma ortográfica", mensagensErradas: {
        "Verdadeiro": "Têm é acentuado pela regra do acento diferencial; “creem e veem” perderam o acento com a reforma ortográfica",
      },
    },
    {
      pergunta: "Considerando as ideias e os aspectos linguísticos desse texto, julgue o item a seguir. Os vocábulos “têm” e “também” são acentuados de acordo com a mesma regra de acentuação gráfica. ",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] Têm é acentuado pela regra do acento diferencial; “também” está na regra geral das oxítonas", mensagensErradas: {
        "Verdadeiro": "Têm é acentuado pela regra do acento diferencial; “também” está na regra geral das oxítonas",
      },
    },
    {
      pergunta: "Assinale a alternativa em que as formas verbais estão grafadas corretamente:",
      respostasErradas: ["Nem todos os armários contém livros; alguns só armazenam papéis avulsos", "Diversas iniciativas de edições colaborativas compõe um cenário novo no mercado editorial", "Não são muitos os estudantes que retém as informações apenas ouvidas e não visualizadas", "O aparelho mantem o usuário conectado por horas, de forma prejudicial à saúde"],
      respostaCorreta: "Os especialistas veem com bons olhos a iniciativa de jogos terapêuticos",
      mensagem: "[CORRETA] Apenas “veem” está correta. A nova ortografia retirou o acento dos hiatos como leem, deem, veem, voo, zoo, enjoo",
      mensagensErradas: {
        "Nem todos os armários contém livros; alguns só armazenam papéis avulsos": " Nem todos os armários conTÊm livros; alguns só armazenam papéis avulsos",
        "Diversas iniciativas de edições colaborativas compõe um cenário novo no mercado editorial": "Diversas iniciativas de edições colaborativas compõeM um cenário novo no mercado editorial.",
        "Não são muitos os estudantes que retém as informações apenas ouvidas e não visualizadas": "Não são muitos os estudantes que retÊm as informações apenas ouvidas e não visualizadas.",
        "O aparelho mantem o usuário conectado por horas, de forma prejudicial à saúde": " O aparelho mantÉm o usuário conectado por horas, de forma prejudicial à saúde",
      },
    },
    {
      pergunta: "Em 16 de dezembro de 1990 foi assinado em Lisboa o Acordo Ortográfico da Língua Portuguesa, por Portugal, Brasil, Angola, São Tomé e Príncipe, Cabo Verde, Guiné-Bissau, Moçambique e, posteriormente, por Timor Leste. No Brasil, o Acordo foi aprovado pelo Decreto Legislativo nº 54, de 18 de abril de 1995. Segundo o Novo Acordo Ortográfico da Língua Portuguesa algumas palavras perderam o acento agudo. Assinale a opção que apresenta uma palavra que não é mais acentuada devido ao Acordo Ortográfico referido e que está em vigor desde 2013. ",
      respostasErradas: ["Chapeus", "Papeis", "Trofeu", "Piaui"],
      respostaCorreta: "Feiura",
      mensagem: "[CORRETA] A palavra que não é mais acentuada é “feiura”, pois há “u” tônico após ditongo decrescente numa paroxítona. Trata-se de uma exceção à regra do hiato. Nessa linha, também são cobradas as palavras “baiuca”, “bocaiuva”, “sauipe’",
      mensagensErradas: {
        "Chapeus": " “chapéus”, “papéis” e “troféu” são acentuadas por serem oxítonas terminadas em ditongo aberto",
        "Papeis": " “chapéus”, “papéis” e “troféu” são acentuadas por serem oxítonas terminadas em ditongo aberto",
        "Trofeu": " “chapéus”, “papéis” e “troféu” são acentuadas por serem oxítonas terminadas em ditongo aberto",
        "Piaui": "  recebe normalmente acento pela regra do hiato. A exceção da regra só afeta as paroxítonas, isto é, somente nelas “i” ou “u” tônico após ditongo deixaram de ser acentuados. ",
      },
    },
    {
      pergunta: "Nas palavras pudico, interim, aerolito, a acentuação foi propositadamente eliminada. Quanto à tonicidade, as palavras acima devem ser classificadas, respectivamente, como:",
      respostasErradas: ["paroxítona – paroxítona - paroxítona.", "proparoxítona – proparoxítona – proparoxítona.", "paroxítona – oxítona – proparoxítona.", "paroxítona – oxítona – paroxítona."],
      respostaCorreta: " paroxítona – proparoxítona – proparoxítona",
      mensagem: "[CORRETA] A palavra que não é mais acentuada é “feiura”, pois há “u” tônico após ditongo decrescente numa paroxítona. Trata-se de uma exceção à regra do hiato. Nessa linha, também são cobradas as palavras “baiuca”, “bocaiuva”, “sauipe’",
      mensagensErradas: {
        "paroxítona – paroxítona - paroxítona.": " Muita gente não sabe a tônica dessas palavras, ou seja, a correta prosódia, vamos marcá-la: puDIco (paroxítona – tônica na penúltima), ÍNterim (proparoxítona – tônica na antepenúltima), aeRÓlito (proparoxítona – tônica na antepenúltima). Gabarito letra B",
        "proparoxítona – proparoxítona – proparoxítona.": "  Muita gente não sabe a tônica dessas palavras, ou seja, a correta prosódia, vamos marcá-la: puDIco (paroxítona – tônica na penúltima), ÍNterim (proparoxítona – tônica na antepenúltima), aeRÓlito (proparoxítona – tônica na antepenúltima). Gabarito letra B",
        "paroxítona – oxítona – proparoxítona.": "  Muita gente não sabe a tônica dessas palavras, ou seja, a correta prosódia, vamos marcá-la: puDIco (paroxítona – tônica na penúltima), ÍNterim (proparoxítona – tônica na antepenúltima), aeRÓlito (proparoxítona – tônica na antepenúltima). Gabarito letra B",
        "paroxítona – oxítona – paroxítona.": "   Muita gente não sabe a tônica dessas palavras, ou seja, a correta prosódia, vamos marcá-la: puDIco (paroxítona – tônica na penúltima), ÍNterim (proparoxítona – tônica na antepenúltima), aeRÓlito (proparoxítona – tônica na antepenúltima). Gabarito letra B",
      },
    },
    //-------------------hifen

    {
      pergunta: "Conforme as regras oficiais de grafia, “Coexistem” poderia ser grafado alternativamente como Coexistem ",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] O prefixo “co” é utilizado sempre sem hífen, como percebemos nas palavras “cooperar”, “coabitar”, “coagir”", mensagensErradas: {
        "Verdadeiro": "O prefixo “co” é utilizado sempre sem hífen, como percebemos nas palavras “cooperar”, “coabitar”, “coagir”",
      },
    },
    {
      pergunta: "Assinale a alternativa na qual todas as palavras estão grafadas CORRETAMENTE:",
      respostasErradas: ["idéia, jiboia, co-orientador", "idéia, jibóia, coorientador", "ideia, jibóia, co-orientador", "idéia, jibóia, co-orientador"],
      respostaCorreta: "ideia, jiboia, coorientador",
      mensagem: "[CORRETA] Excepcionalmente, o prefixo “co” se aglutina sem hífen sempre, mesmo que a próxima letra seja igual. Então a forma correta é “coorientador”. Ideia e Jiboia perderam o acento na nova ortografia, pois não se acentua o ditongo aberto “ei(s)” ou “oi(s)” nas paroxítonas",
      mensagensErradas: {
        "idéia, jiboia, co-orientador": " Excepcionalmente, o prefixo “co” se aglutina sem hífen sempre, mesmo que a próxima letra seja igual. Então a forma correta é “coorientador”. Ideia e Jiboia perderam o acento na nova ortografia, pois não se acentua o ditongo aberto “ei(s)” ou “oi(s)” nas paroxítonas",
        "idéia, jibóia, coorientador": " Excepcionalmente, o prefixo “co” se aglutina sem hífen sempre, mesmo que a próxima letra seja igual. Então a forma correta é “coorientador”. Ideia e Jiboia perderam o acento na nova ortografia, pois não se acentua o ditongo aberto “ei(s)” ou “oi(s)” nas paroxítonas",
        "ideia, jibóia, co-orientador": " Excepcionalmente, o prefixo “co” se aglutina sem hífen sempre, mesmo que a próxima letra seja igual. Então a forma correta é “coorientador”. Ideia e Jiboia perderam o acento na nova ortografia, pois não se acentua o ditongo aberto “ei(s)” ou “oi(s)” nas paroxítonas",
        "idéia, jibóia, co-orientador": "Excepcionalmente, o prefixo “co” se aglutina sem hífen sempre, mesmo que a próxima letra seja igual. Então a forma correta é “coorientador”. Ideia e Jiboia perderam o acento na nova ortografia, pois não se acentua o ditongo aberto “ei(s)” ou “oi(s)” nas paroxítonas ",
      },
    },
    {
      pergunta: "No texto 2 há um erro de grafia ou acentuação, segundo as novas regras, que é: ",
      respostasErradas: ["super-resistentes", "bactérias", "antibióticos", "indústrias"],
      respostaCorreta: "microorganismos",
      mensagem: "[CORRETA] A palavra “micro-organismos” é grafada COM hífen, para separar vogais iguais.",
      mensagensErradas: {
        "super-resistentes": "  é grafada COM hífen, para separar consoantes iguais.",
        "bactérias": " “Bactérias” e “indústrias” são acentuadas porque são paroxítonas terminadas em ditongo. ",
        "antibióticos": " é acentuada por ser proparoxítona",
        "indústrias": "“Bactérias” e “indústrias” são acentuadas porque são paroxítonas terminadas em ditongo. ",
      },
    },
    {
      pergunta: "A exemplo de “Pós-Graduação”, cujo prefixo sempre exige hífen, assinale a alternativa com outro prefixo ou falso prefixo que sempre exige hífen:",
      respostasErradas: ["co", "bio", "geo", "hidro"],
      respostaCorreta: "ex",
      mensagem: "[CORRETA] O prefixo 'ex' sempre exige a presença de hífen, como em 'ex-prefeito', 'ex-esposa', 'ex-aluno' etc. ",
      mensagensErradas: {
        "co": "O prefixo 'co' se une a palavra seguinte sem a utilização de hífen. Ex.: coautor, cofundador. Caso a palavra que se une a esse prefixo seja iniciada pela letra 'r', então esta letra deverá ser repetida, ex.: corréu, correlação etc.",
        "bio": " O falso prefixo 'bio' deve ser separado com hífen do segundo elemento apenas quando este for escrito com letra inicial 'o' ou 'h'. Ex.: bio-óleo, bio-hidrogênio, biogenética, biossegurança, biorreator ",
        "geo": "O falso prefixo 'geo' deve ser separado com hífen do segundo elemento apenas quando este for escrito com letra inicial 'o' ou 'h'. Ex.: geo-história, geo-observação, geobiologia, geociência, georregião, geossitema etc.",
        "hidro": "O falso prefixo 'hidro' deve ser separado com hífen do segundo elemento apenas quando este for escrito com letra inicial 'o' ou 'h'. Ex.: hidro-halogenação, hidro-oforia, hidromassagem, hidrossolúvel, hidrorrepelente etc.",
      },
    },
    {
      pergunta: "Assinale a opção em que a palavra apresentada está de acordo com a atual ortografia oficial da língua portuguesa",
      respostasErradas: ["seminternato", "hiperssensibilidade", "contra-regra", "mão-de-obra"],
      respostaCorreta: "autoanálise",
      mensagem: "[CORRETA]  CORRETO. Palavras formadas com o prefixo 'auto' devem ser escritas com hífen quando o segundo elemento for iniciado com as letras 'o' ou 'h'. Se o segundo elemento que forma a palavra for iniciado por 'r' ou 's' essas consoantes devem ser 'dobradas', como autorretrato, autossuficiente etc",
      mensagensErradas: {
        "seminternato": " Palavras formadas com o prefixo 'semi' devem ser escritas com hífen quando o segundo elemento for iniciado com a letra 'i'. O correto é: semi-internato. ",
        "hiperssensibilidade": " Palavras formadas com o prefixo 'hiper' devem ser escritas com hífen apenas quando o segundo elemento for iniciado com as letras 'r' ou 'h'. O correto é: hipersensibilidade.",
        "contra-regra": "  Palavras formadas com o prefixo 'contra' devem ser escritas com hífen apenas quando o segundo elemento for iniciado com as letras 'a' ou 'h'. O correto é: contrarregra.",
        "mão-de-obra": "Palavras compostas com a presença de preposição perderam o hífen. O correto é: mão de obra",
      },
    },
    {
      pergunta: "Em relação às normas ortográficas da língua portuguesa em vigor, é CORRETO afirmar:",
      respostasErradas: ["Segundo o Novo Acordo Ortográfico da língua portuguesa, o acento diferencial de palavras homógrafas como pelo (verbo pelar) e pêlo (substantivo) foi mantido", "A acentuação gráfica das palavras deficiência, comunitária, infância e precedência justifica-se pela mesma regra do Novo Acordo Ortográfico: todas as palavras paroxítonas são acentuadas.", "O Novo Acordo manteve o hífen nas palavras compostas por justaposição cujos elementosconstituem uma unidade semântica, mas mantêm uma tonicidade própria, como em: aero-espacial,bem-te-vi, ave-maria", "As palavras ideia, jiboia, heroi e feiura tiveram o acento agudo eliminado após o Novo AcordoOrtográfico"],
      respostaCorreta: "Em relação à eliminação do emprego do hífen, as palavras a seguir respeitam o Novo AcordoOrtográfico: autoeducação, extraoficial, coeditor e contraexemplo",
      mensagem: "[CORRETA]  As palavras autoeducação, extraoficial, coeditor e contraexemplo respeitam o NovoAcordo Ortográfico, pois temos união de vogais diferentes. Co- não leva hífen mesmo com vogaligual: coobrigado",
      mensagensErradas: {
        "Segundo o Novo Acordo Ortográfico da língua portuguesa, o acento diferencial de palavras homógrafas como pelo (verbo pelar) e pêlo (substantivo) foi mantido": "Foi abolido",
        "A acentuação gráfica das palavras deficiência, comunitária, infância e precedência justifica-se pela mesma regra do Novo Acordo Ortográfico: todas as palavras paroxítonas são acentuadas.": " A acentuação gráfica das palavras deficiência, comunitária, infância e precedênciajustifica-se pela mesma regra do Novo Acordo Ortográfico: acentuam-se as paroxítonas terminadasem ditongo.",
        "O Novo Acordo manteve o hífen nas palavras compostas por justaposição cujos elementosconstituem uma unidade semântica, mas mantêm uma tonicidade própria, como em: aero-espacial,bem-te-vi, ave-maria": " A grafia correta é: Aeroespacial (vogais diferentes), bem-te-vi (espécie zoológica),ave-maria (palavra composta).",
        "As palavras ideia, jiboia, heroi e feiura tiveram o acento agudo eliminado após o Novo AcordoOrtográfico": "As palavras ideia, jiboia e feiura tiveram o acento agudo eliminado após o Novo AcordoOrtográfico; herói é acentuado pela regra das oxítonas terminadas em ditongo",
      },
    },
    {
      pergunta: "Assinale a alternativa em que o emprego do hífen está errado:",
      respostasErradas: ["Micro-organismo", "Anti-herói", "Micro-ônibus", "Força-tarefa"],
      respostaCorreta: "Auto-avaliação",
      mensagem: "[CORRETA]  O hífen funciona principalmente para separar letras iguais na união de prefixos. Por isso está corretamente empregado em micro-organismo e micro-ônibus e não deveria ser usado em “autoavaliação”",
      mensagensErradas: {
        "Micro-organismo": "  O hífen funciona principalmente para separar letras iguais na união de prefixos. Por isso está corretamente empregado em micro-organismo e micro-ônibus e não deveria ser usado em “autoavaliação” ",
        "Anti-herói": ". Anti-herói está correto porque toda palavra com H pede hífen (salvo exceção muito específica como subumano)",
        "Micro-ônibus": "   O hífen funciona principalmente para separar letras iguais na união de prefixos. Por isso está corretamente empregado em micro-organismo e micro-ônibus e não deveria ser usado em “autoavaliação”",
        "Força-tarefa": "). Força-tarefa recebe hífen porque é uma palavra composta, não há relação com a regra dos prefixos e essa análise de letras iguais ou diferentes, é uma regra diferente.",
      },
    },
    {
      pergunta: "Julgue o item. O emprego do hífen no vocábulo “bem-estar” justifica-se pela mesma regra ortográfica que justifica a grafia do antônimo desse vocábulo: mal-estar. ",
      respostasErradas: ["Falso"],
      respostaCorreta: "Verdadeiro",
      mensagem: "[CORRETA] Os advérbios “bem” e “mal”, se usados como prefixo, pedem hífen quando a próxima palavra é iniciada por vogal (ou H, porque tem som de vogal). Essa é a regra que justifica “bem-estar” e “mal-estar e faz o item estar correto.", mensagensErradas: {
        "Falso": "Os advérbios “bem” e “mal”, se usados como prefixo, pedem hífen quando a próxima palavra é iniciada por vogal (ou H, porque tem som de vogal). Essa é a regra que justifica “bem-estar” e “mal-estar e faz o item estar correto.",
      },
    },
    {
      pergunta: "Julgue o item, de acordo com a norma-padrão: É provavel que desenhos de outros animais sejam benvindos nos livros que o autor se refere.",
      respostasErradas: ["Verdadeiro"],
      respostaCorreta: "Falso",
      mensagem: "[CORRETA] A grafia correta é “bem-vindos”, pois após “bem”, usado como prefixo, devemos usar hífen seja seguido de vogal, seja seguido de consoante, salvo se a palavra seguinte for derivada de “querer ou fazer”", mensagensErradas: {
        "Verdadeiro": "A grafia correta é “bem-vindos”, pois após “bem”, usado como prefixo, devemos usar hífen seja seguido de vogal, seja seguido de consoante, salvo se a palavra seguinte for derivada de “querer ou fazer” ",
      },
    },
    {
      pergunta: "“As grandes doenças da alma, bem como aquelas do corpo, renovam o homem; e asconvalescências espirituais não são menos agradáveis nem menos miraculosas do que as físicas.”Nessa frase aparece o termo convalescência corretamente grafado (com -escer e não com -ecer). Assinale a palavra abaixo que está corretamente grafada com esse mesmo sufixo",
      respostasErradas: ["aparescer", "enriquescer", "amanhescer", "enlouquescer"],
      respostaCorreta: "decrescer",
      mensagem: "[CORRETA]  A grafia de 'decrescer' segue a de 'crescer', com SC. Corrigindo as demais: (B) aparecer. (C)enriquecer. (D) amanhecer. (E) enlouquecer",
      mensagensErradas: {
        "Micro-organismo": "  A grafia de 'decrescer' segue a de 'crescer', com SC. Corrigindo as demais: (B) aparecer. (C)enriquecer. (D) amanhecer. (E) enlouquecer ",
        "Anti-herói": ". A grafia de 'decrescer' segue a de 'crescer', com SC. Corrigindo as demais: (B) aparecer. (C)enriquecer. (D) amanhecer. (E) enlouquecer",
        "Micro-ônibus": "   A grafia de 'decrescer' segue a de 'crescer', com SC. Corrigindo as demais: (B) aparecer. (C)enriquecer. (D) amanhecer. (E) enlouquecer",
        "Força-tarefa": "A grafia de 'decrescer' segue a de 'crescer', com SC. Corrigindo as demais: (B) aparecer. (C)enriquecer. (D) amanhecer. (E) enlouquecer",
      },
    },
    {
      pergunta: "Assinale a alternativa em que não há erro de grafia:",
      respostasErradas: ["Espontâneo, simplismente, alarido, frugal", "Ardilozo, frugal, engodar, corrupção", "Ascensão, excessão, impencilho, subsídio", "Mexer, acensão, subcídio, espontâneo"],
      respostaCorreta: "Exceção, privilégio, supérfluo, empecilho",
      mensagem: "[CORRETA]  Exceção, privilégio, supérfluo, empecilho",
      mensagensErradas: {
        "Espontâneo, simplismente, alarido, frugal": "Espontâneo, simplEsmente, alarido (ruído, gritaria), frugal (simples, comedido)",
        "Ascensão, excessão, impencilho, subsídio": "Ascensão, excessão, Empecilho, subSídio (Se pronúncia com som de S, não de Z: como em Sapo).",
        "Mexer, acensão, subcídio, espontâneo": "  Mexer, aScensão, subSídio, espontâneo.",
        "Ardilozo, frugal, engodar, corrupção": " ArdiloSo, frugal, engodar (enganar com engodo, farsa), corrupção. Gabarito letra B.",
      },
    },
    {
      pergunta: "A exemplo de “intervenção” – grafada com “ç” – e de “autocontrole” – grafado sem hífen –, estãocorreta e respectivamente grafados, em conformidade com a ortografia oficial, os termos: ",
      respostasErradas: ["pretenção e autohemoterapia", "intenção e autoobservação", "compreenção e autoterapia", "propenção e autofecundação"],
      respostaCorreta: "isenção e autodefesa",
      mensagem: "[CORRETA] As grafias corretas são pretensão, auto-hemoterapia (palavras com H pedem hífen), intenção, autoobservação (regra geral: emprega-se hífen para separar letras iguais na união de prefixos, letras diferentes não são separadas por hífen), compreensão, autoterapia, propensão, autofecundação, isenção e autodefesa",
      mensagensErradas: {
        "pretenção e autohemoterapia": "As grafias corretas são pretensão, auto-hemoterapia (palavras com H pedem hífen), intenção, autoobservação (regra geral: emprega-se hífen para separar letras iguais na união de prefixos, letras diferentes não são separadas por hífen), compreensão, autoterapia, propensão, autofecundação, isenção e autodefesa",
        "intenção e autoobservação": "As grafias corretas são pretensão, auto-hemoterapia (palavras com H pedem hífen), intenção, autoobservação (regra geral: emprega-se hífen para separar letras iguais na união de prefixos, letras diferentes não são separadas por hífen), compreensão, autoterapia, propensão, autofecundação, isenção e autodefesa",
        "compreenção e autoterapia": "As grafias corretas são pretensão, auto-hemoterapia (palavras com H pedem hífen), intenção, autoobservação (regra geral: emprega-se hífen para separar letras iguais na união de prefixos, letras diferentes não são separadas por hífen), compreensão, autoterapia, propensão, autofecundação, isenção e autodefesa",
        "propenção e autofecundação": "As grafias corretas são pretensão, auto-hemoterapia (palavras com H pedem hífen), intenção, autoobservação (regra geral: emprega-se hífen para separar letras iguais na união de prefixos, letras diferentes não são separadas por hífen), compreensão, autoterapia, propensão, autofecundação, isenção e autodefesa",
      },
    },
    {
      pergunta: "Marque a alternativa que apresenta todas as palavras escritas corretamente.",
      respostasErradas: ["giboia, jiló, jipe, hoje", "jiboia, giló, jipe, hoje", "jiboia, jiló, gipe, hoge", "giboia, jiló, jipe, hoge"],
      respostaCorreta: " jiboia, jiló, jipe, hoje",
      mensagem: "[CORRETA] Escrevem-se com J palavras de origem indígena como 'jiboia' (que, com o Novo AcordoOrtográfico, perdeu o acento na posição paroxítona) e 'jiló'. Também são escritas com J aspalavras 'jipe' (adequação para a língua portuguesa da palavra inglesa jeep) e 'hoje' (palavra deorigem latina - hoc die)",
      mensagensErradas: {
        "pretenção e autohemoterapia": "Escrevem-se com J palavras de origem indígena como 'jiboia' (que, com o Novo AcordoOrtográfico, perdeu o acento na posição paroxítona) e 'jiló'. Também são escritas com J aspalavras 'jipe' (adequação para a língua portuguesa da palavra inglesa jeep) e 'hoje' (palavra deorigem latina - hoc die)",
        "intenção e autoobservação": "Escrevem-se com J palavras de origem indígena como 'jiboia' (que, com o Novo AcordoOrtográfico, perdeu o acento na posição paroxítona) e 'jiló'. Também são escritas com J aspalavras 'jipe' (adequação para a língua portuguesa da palavra inglesa jeep) e 'hoje' (palavra deorigem latina - hoc die)",
        "compreenção e autoterapia": "Escrevem-se com J palavras de origem indígena como 'jiboia' (que, com o Novo AcordoOrtográfico, perdeu o acento na posição paroxítona) e 'jiló'. Também são escritas com J aspalavras 'jipe' (adequação para a língua portuguesa da palavra inglesa jeep) e 'hoje' (palavra deorigem latina - hoc die)",
        "propenção e autofecundação": "Escrevem-se com J palavras de origem indígena como 'jiboia' (que, com o Novo AcordoOrtográfico, perdeu o acento na posição paroxítona) e 'jiló'. Também são escritas com J aspalavras 'jipe' (adequação para a língua portuguesa da palavra inglesa jeep) e 'hoje' (palavra deorigem latina - hoc die)",
      },
    },
    {
      pergunta: "Assinale a alternativa em que pelo menos uma das palavras deveria ter sido escrita com J e não com G",
      respostasErradas: ["Estágio – Privilégio", "Prestígio – Relógio", "Refúgio – Vertiginoso"],
      respostaCorreta: " Pagem – Cangica",
      mensagem: "[CORRETA]Palavras de origem indígena (e africana) devem ser escrita com J, como em PAJEM e CANJICA",
      mensagensErradas: {
        "Micro-organismo": "Palavras de origem indígena (e africana) devem ser escrita com J, como em PAJEM e CANJICA ",
        "Anti-herói": "Palavras de origem indígena (e africana) devem ser escrita com J, como em PAJEM e CANJICA",
        "Micro-ônibus": " Palavras de origem indígena (e africana) devem ser escrita com J, como em PAJEM e CANJICA",
      },
    },
  ];

  return (
    <div>
      <Questionario perguntas={perguntas} />
    </div>
  );
}

export default Portugues;
