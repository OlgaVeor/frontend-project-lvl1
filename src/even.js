import readlineSync from 'readline-sync';
import nameUser from './cli.js';

const name = nameUser();

const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = true;
  const start = 0;
  for (let i = start; i < 3; i += 1) {
    const number = Math.round(100 * Math.random());
    const resultOfDivide = number % 2;
    const correctAnswer = (resultOfDivide === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    result = (answer === correctAnswer);
    if (result === false) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    console.log('Correct!');
  }
  if (result === true) {
    console.log(`Congratulations, ${name}`);
  }
};

export default game;
