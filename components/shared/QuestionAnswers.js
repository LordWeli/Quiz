const questions = {
  1: {
    question: 'Pergunta 1',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  2: {
    question: 'Pergunta 2',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  3: {
    question: 'Pergunta 3',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  4: {
    question: 'Pergunta 4',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  5: {
    question: 'Pergunta 5',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  6: {
    question: 'Pergunta 6',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  7: {
    question: 'Pergunta 7',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  8: {
    question: 'Pergunta 8',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  9: {
    question: 'Pergunta 9',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  10: {
    question: 'Pergunta 10',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  11: {
    question: 'Pergunta 11',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  12: {
    question: 'Pergunta 12',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  13: {
    question: 'Pergunta 13',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  14: {
    question: 'Pergunta 14',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  15: {
    question: 'Pergunta 15',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  16: {
    question: 'Pergunta 16',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  17: {
    question: 'Pergunta 17',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  18: {
    question: 'Pergunta 18',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  19: {
    question: 'Pergunta 19',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
    ]
  },
  20: {
    question: 'Pergunta 20',
    answers: [
      { answer: '1', correct: true },
      { answer: '2', correct: false },
      { answer: '3', correct: false },
      { answer: '4', correct: false }
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
