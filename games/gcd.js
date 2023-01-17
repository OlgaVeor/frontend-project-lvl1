import getAnswer from '../src/index.js';
import {
  isWrongAnswer, isCorrectAnswer,
} from '../src/checkingReponse.js';
import getRundomNumber from '../src/randomNumber.js';
import getResult from '../src/getResult.js';

const getResultGDC = (number1, number2) => {
  const num1 = (number1 >= number2) ? number1 : number2;
  const num2 = (number1 >= number2) ? number2 : number1;
  const iter = (acc) => {
    if (acc === num1 / 2 && num2 % acc === 0) return acc;
    if (num1 % acc === 0 && num2 % acc === 0) return acc;
    return iter(acc - 1);
  };
  return iter(Math.floor(num1 / 2));
};

const gameGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');

  const maxNumberFirst = 50;
  const maxNumberSecond = 10;
  const minNumber = 1;
  const quantityQuestion = 3;
  let result;
  let count = 0;
  for (count; count < quantityQuestion;) {
    const number1 = getRundomNumber(maxNumberFirst, minNumber);
    const number2 = getRundomNumber(maxNumberSecond, minNumber);
    const resultGCD = getResultGDC(number1, number2);
    console.log(`Question: ${number1}  ${number2}`);
    const answerGamer = getAnswer();
    const answer = Number(answerGamer);
    result = getResult(answer, resultGCD);
    count = isWrongAnswer(result, answerGamer, resultGCD, count);
  }
  isCorrectAnswer(result);
};

export default gameGCD;
