import * as readline from 'readline';
import isALuckyNumber from './number/luckyNumber';
import isAHappyNumber from './number/happyNumber';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question(
    'Digite um número para verificar se ele é sortudo e/ou feliz: ',
    (number) => {
        let luckyString: string;
        let happyString: string;

        if (isNaN(+number)) {
            console.log('Você precisa digitar um número');
            input.close();
        } else {
            if (isAHappyNumber(number)) {
                happyString = 'Feliz';
            } else {
                happyString = 'Não-Feliz';
            }

            if (isALuckyNumber(number)) {
                luckyString = 'Sortudo';
            } else {
                luckyString = 'Não-Sortudo';
            }

            console.log(`${number} - Número ${luckyString} e ${happyString}`);
            input.close();
        }
    }
);
