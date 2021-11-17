const questions = {
  1: {
    question: 'Pergunta 1',
    answers: [
      { answer: 'Resposta 1', correct: true },
      { answer: 'Resposta 1', correct: false },
      { answer: 'Resposta 1', correct: false },
      { answer: 'Resposta 1', correct: false }
    ]
  },
  2: {
    question: 'Pergunta 2',
    answers: [
      { answer: 'Resposta 2', correct: false },
      { answer: 'Resposta 2', correct: false },
      { answer: 'Resposta 2', correct: true },
      { answer: 'Resposta 2', correct: false }
    ]
  },
  3: {
    question: 'Pergunta 3',
    answers: [
      { answer: 'Resposta 3', correct: false },
      { answer: 'Resposta 3', correct: true },
      { answer: 'Resposta 3', correct: false },
      { answer: 'Resposta 3', correct: false }
    ]
  },
  4: {
    question: 'Pergunta 4',
    answers: [
      { answer: 'Resposta 4', correct: true },
      { answer: 'Resposta 4', correct: false },
      { answer: 'Resposta 4', correct: false },
      { answer: 'Resposta 4', correct: false }
    ]
  },
  5: {
    question: 'Pergunta 5',
    answers: [
      { answer: 'Resposta 5', correct: false },
      { answer: 'Resposta 5', correct: false },
      { answer: 'Resposta 5', correct: true },
      { answer: 'Resposta 5', correct: false }
    ]
  },
  6: {
    question: 'Pergunta 6',
    answers: [
      { answer: 'Resposta 6', correct: false },
      { answer: 'Resposta 6', correct: true },
      { answer: 'Resposta 6', correct: false },
      { answer: 'Resposta 6', correct: false }
    ]
  },
  7: {
    question: 'Pergunta 7',
    answers: [
      { answer: 'Resposta 7', correct: false },
      { answer: 'Resposta 7', correct: false },
      { answer: 'Resposta 7', correct: false },
      { answer: 'Resposta 7', correct: true }
    ]
  },
  8: {
    question: 'Pergunta 8',
    answers: [
      { answer: 'Resposta 8', correct: false },
      { answer: 'Resposta 8', correct: false },
      { answer: 'Resposta 8', correct: true },
      { answer: 'Resposta 8', correct: false }
    ]
  },
  9: {
    question: 'Pergunta 9',
    answers: [
      { answer: 'Resposta 9', correct: true },
      { answer: 'Resposta 9', correct: false },
      { answer: 'Resposta 9', correct: false },
      { answer: 'Resposta 9', correct: false }
    ]
  },
  10: {
    question: 'Pergunta 10',
    answers: [
      { answer: 'Resposta 10', correct: true },
      { answer: 'Resposta 10', correct: false },
      { answer: 'Resposta 10', correct: false },
      { answer: 'Resposta 10', correct: false }
    ]
  },
  11: {
    question: 'Pergunta 11',
    answers: [
      { answer: 'Resposta 11', correct: false },
      { answer: 'Resposta 11', correct: true },
      { answer: 'Resposta 11', correct: false },
      { answer: 'Resposta 11', correct: false }
    ]
  },
  12: {
    question: 'Pergunta 12',
    answers: [
      { answer: 'Resposta 12', correct: false },
      { answer: 'Resposta 12', correct: false },
      { answer: 'Resposta 12', correct: true },
      { answer: 'Resposta 12', correct: false }
    ]
  },
  13: {
    question: 'Pergunta 13',
    answers: [
      { answer: 'Resposta 13', correct: false },
      { answer: 'Resposta 13', correct: false },
      { answer: 'Resposta 13', correct: true },
      { answer: 'Resposta 13', correct: false }
    ]
  },
  14: {
    question: 'Pergunta 14',
    answers: [
      { answer: 'Resposta 14', correct: false },
      { answer: 'Resposta 14', correct: false },
      { answer: 'Resposta 14', correct: true },
      { answer: 'Resposta 14', correct: false }
    ]
  },
  15: {
    question: 'Pergunta 15',
    answers: [
      { answer: 'Resposta 15', correct: false },
      { answer: 'Resposta 15', correct: true },
      { answer: 'Resposta 15', correct: false },
      { answer: 'Resposta 15', correct: false }
    ]
  },
  16: {
    question: 'Pergunta 16',
    answers: [
      { answer: 'Resposta 16', correct: false },
      { answer: 'Resposta 16', correct: false },
      { answer: 'Resposta 16', correct: true },
      { answer: 'Resposta 16', correct: false }
    ]
  },
  17: {
    question: 'Pergunta 17',
    answers: [
      { answer: 'Resposta 17', correct: true },
      { answer: 'Resposta 17', correct: false },
      { answer: 'Resposta 17', correct: false },
      { answer: 'Resposta 17', correct: false }
    ]
  },
  18: {
    question: 'Pergunta 18',
    answers: [
      { answer: 'Resposta 18', correct: false },
      { answer: 'Resposta 18', correct: false },
      { answer: 'Resposta 18', correct: true },
      { answer: 'Resposta 18', correct: false }
    ]
  },
  19: {
    question: 'Pergunta 19',
    answers: [
      { answer: 'Resposta 19', correct: false },
      { answer: 'Resposta 19', correct: false },
      { answer: 'Resposta 19', correct: false },
      { answer: 'Resposta 19', correct: true }
    ]
  },
  20: {
    question: 'Pergunta 20',
    answers: [
      { answer: 'Resposta 20', correct: false },
      { answer: 'Resposta 20', correct: false },
      { answer: 'Resposta 20', correct: true },
      { answer: 'Resposta 20', correct: false }
    ]
  },
}

export const returnShuffle = () => {
  let keys = Object.keys(questions);

  let shuffle = keys.sort(() => .5 - Math.random()).slice(0, 20);

  let shuffle_questions = shuffle.map(function (i) {
    return questions[i];
  });

  return shuffle_questions;
}
