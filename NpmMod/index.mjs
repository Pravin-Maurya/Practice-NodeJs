import chalk from 'chalk';
import validator from 'validator';

const isEmailValid = validator.isEmail('foo@bar.com');
console.log(isEmailValid ? chalk.green.inverse(isEmailValid): chalk.red.inverse(isEmailValid))

console.log(chalk.blue('Hello world!'));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));