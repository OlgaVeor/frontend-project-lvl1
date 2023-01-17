import getAnswer from '../src/index.js';
import {
  isWrongAnswer, isCorrectAnswer,
} from '../src/checkingReponse.js';
import getRundomNumber from '../src/randomNumber.js';
import getResult from '../src/getResult.js';

const gameCalc = () => {
  console.log('What is the result of the expression?');

  const maxNumberFirst = 50;
  const maxNumberSecond = 10;
  const variationCalc = 2; // three variations in calculator: 0, 1, 2;
  const quantityQuestion = 3;
  let result;
  let count = 0;
  for (count; count < quantityQuestion;) {
    const number1 = getRundomNumber(maxNumberFirst);
    const number2 = getRundomNumber(maxNumberSecond);
    const numberCalc = getRundomNumber(variationCalc);
    let resultOfCalc;
    switch (numberCalc) {
      case 0:
        resultOfCalc = number1 - number2;
        console.log(`Question: ${number1} - ${number2}`);
        break;
      case 1:
        resultOfCalc = number1 + number2;
        console.log(`Question: ${number1} + ${number2}`);
        break;
      default:
        resultOfCalc = number1 * number2;
        console.log(`Question: ${number1} * ${number2}`);
        break;
    }
    const answerGamer = getAnswer();
    const answer = Number(answerGamer);
    result = getResult(answer, resultOfCalc);
    count = isWrongAnswer(result, answerGamer, resultOfCalc, count, quantityQuestion);
  }
  isCorrectAnswer(result);
};

export default gameCalc;
