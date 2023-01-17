import getAnswer from '../src/index.js';
import {
  isWrongAnswer, isCorrectAnswer,
} from '../src/checkingReponse.js';
import getRundomNumber from '../src/randomNumber.js';
import getResult from '../src/getResult.js';

const gameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const maxNumber = 100;
  const quantityQuestion = 3;
  let result;
  let count = 0;
  for (count; count < quantityQuestion;) {
    const number = getRundomNumber(maxNumber);
    const resultOfDivide = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = getAnswer();
    result = getResult(answer, resultOfDivide);
    count = isWrongAnswer(result, answer, resultOfDivide, count, quantityQuestion);
  }
  isCorrectAnswer(result);
};

export default gameEven;
