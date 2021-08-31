import * as readline from 'readline';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isAHappyNumber(number: string, index = 1): boolean {
    let sum: number = 0;

    if (index === 100) {
        return false;
    }

    for (let i = 0; i < number.length; i++) {
        sum += +number[i] * +number[i];
    }

    if (sum === 1) {
        return true;
    } else {
        return isAHappyNumber(sum.toString(), index + 1);
    }
}

function isALuckyNumber(number: string) {
    return true;
}

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
