import React, { useEffect, useState } from 'react';

interface Pergunta {
  pergunta: string;
  respostasErradas: string[];
  respostaCorreta: string;
  mensagensErradas: Record<string, string>;
  mensagem?: string;
}

interface QuestionarioProps {
  perguntas: Pergunta[];
}

const Questionario: React.FC<QuestionarioProps> = ({ perguntas }) => {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState('');
  const [totalCorretas, setTotalCorretas] = useState(0);
  const [totalIncorretas, setTotalIncorretas] = useState(0);
  const [totalNaoRespondidas, setTotalNaoRespondidas] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const verificarResposta = (e: React.FormEvent) => {
    e.preventDefault();

    const perguntaAtual = perguntas[indicePergunta] || {};

    if (!respostaSelecionada) {
      setTotalNaoRespondidas(totalNaoRespondidas + 1);
    } else if (respostaSelecionada.toLowerCase() === perguntaAtual.respostaCorreta.toLowerCase()) {
      alert(perguntaAtual.mensagem || 'Resposta correta!');
      setTotalCorretas(totalCorretas + 1);
    } else {
      const mensagemErrada = perguntaAtual.mensagensErradas[respostaSelecionada];
      alert(mensagemErrada || 'Resposta incorreta. Tente novamente!');
      setTotalIncorretas(totalIncorretas + 1);
    }

    setRespostaSelecionada('');

    if (indicePergunta < perguntas.length - 1) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      setFinalizado(true);
    }
  };

  const refazerPerguntas = () => {
    setIndicePergunta(0);
    setRespostaSelecionada('');
    setTotalCorretas(0);
    setTotalIncorretas(0);
    setTotalNaoRespondidas(0);
    setFinalizado(false);
    embaralharPerguntas();
  };

  useEffect(() => {
    embaralharPerguntas();
  }, [perguntas]);

  function embaralharPerguntas() {
    const perguntasEmbaralhadas = shuffleArray(perguntas);
    setIndicePergunta(0);
    setRespostaSelecionada('');
    setTotalCorretas(0);
    setTotalIncorretas(0);
    setTotalNaoRespondidas(0);
    setFinalizado(false);
    perguntas = perguntasEmbaralhadas; // Atualiza a ordem das perguntas
  }

  function shuffleArray(array: any[]) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const perguntaAtual = perguntas[indicePergunta];

  const opcoesResposta = [...perguntaAtual.respostasErradas, perguntaAtual.respostaCorreta];
  const opcoesEmbaralhadas = shuffleArray(opcoesResposta);
  
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Questionário</h1>
      {finalizado ? (
        <div>
          <p className="text-center">Questionário finalizado!</p>
          <p className="text-center">Respostas corretas: {totalCorretas}</p>
          <p className="text-center">Respostas incorretas: {totalIncorretas}</p>
          <p className="text-center">Não respondidas: {totalNaoRespondidas}</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
            onClick={refazerPerguntas}
          >
            Refazer
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-center">{perguntaAtual.pergunta}</p>
          <form onSubmit={verificarResposta}>
            {opcoesEmbaralhadas.map((opcao, index) => (
              <label key={index} className="block mb-2">
                <input
                  type="radio"
                  value={opcao}
                  checked={respostaSelecionada === opcao}
                  onChange={(e) => setRespostaSelecionada(e.target.value)}
                  className="mr-2"
                />
                {opcao}
              </label>
            ))}
            <br />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Verificar
            </button>
          </form>
        </div>
      )}
    </div>
  );

};

export default Questionario;