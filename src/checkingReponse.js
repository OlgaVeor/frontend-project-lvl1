import nameUser from './cli.js';

const name = nameUser();

const isWrongAnswer = (result, answer, correctAnswer, count, quantityQuestion) => {
  if (result === false) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}`);
    return quantityQuestion;
  }
  console.log('Correct!');
  return count + 1;
};

const isCorrectAnswer = (result) => {
  if (result === true) console.log(`Congratulations, ${name}`);
};

export {
  isWrongAnswer, isCorrectAnswer,
};
