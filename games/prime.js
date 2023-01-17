import getAnswer from '../src/index.js';
import {
  isWrongAnswer, isCorrectAnswer,
} from '../src/checkingReponse.js';
import getRundomNumber from '../src/randomNumber.js';
import getResult from '../src/getResult.js';

const isNamberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const gamePrimeNumber = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const maxNumber = 50;
  const quantityQuestion = 3;
  let result;
  let count = 0;
  for (count; count < quantityQuestion;) {
    const number = getRundomNumber(maxNumber);

    const resultCorrect = isNamberPrime(number);

    console.log(`Question: ${number}`);
    const answer = getAnswer();
    result = getResult(answer, resultCorrect);
    count = isWrongAnswer(result, answer, resultCorrect, count);
  }
  isCorrectAnswer(result);
};

export default gamePrimeNumber;
