import getAnswer from '../src/index.js';
import {
  isWrongAnswer, isCorrectAnswer,
} from '../src/checkingReponse.js';
import getRundomNumber from '../src/randomNumber.js';
import getResult from '../src/getResult.js';

const gameProgression = () => {
  console.log('What number is missing in the progression?');

  const maxNumber = 20;
  const maxStep = 5;
  const minLengthProgr = 5;
  const maxLengthProgr = 15;
  const quantityQuestion = 3;
  let result;
  let count = 0;
  for (count; count < quantityQuestion;) {
    const numberFirst = getRundomNumber(maxNumber);
    const step = getRundomNumber(maxStep);
    const lengthProgression = getRundomNumber(maxLengthProgr, minLengthProgr);
    const missingNumber = getRundomNumber(lengthProgression);

    const progressions = [];
    for (let i = 0; i < lengthProgression; i += 1) progressions.push(numberFirst + i * step);

    const progressionsForGamer = [...progressions];
    progressionsForGamer[missingNumber] = '..';
    console.log(`Question: ${progressionsForGamer}`);

    const answerGamer = getAnswer();
    const answer = Number(answerGamer);
    result = getResult(answer, progressions[missingNumber]);
    count = isWrongAnswer(result, answerGamer, progressions[missingNumber], count);
  }
  isCorrectAnswer(result);
};

export default gameProgression;
