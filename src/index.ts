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
    let listOfNumbers: number[] = [];
    for (let i = 1; i <= +number; i++) {
        if (i % 2 !== 0) {
            listOfNumbers.push(i);
        }
    }

    let index = 0;
    while (listOfNumbers.length > listOfNumbers[index]) {
        index++;
        console.log(listOfNumbers);
        listOfNumbers = listOfNumbers.filter(
            (number, j) => (j + 1) % listOfNumbers[index] !== 0
        );
        console.log(listOfNumbers);
    }

    if (listOfNumbers.includes(+number)) {
        return true;
    } else {
        return false;
    }
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
