export default function isALuckyNumber(number: string) {
    let listOfNumbers: number[] = [];
    for (let i = 1; i <= +number; i++) {
        if (i % 2 !== 0) {
            listOfNumbers.push(i);
        }
    }

    let index = 0;
    while (listOfNumbers.length > listOfNumbers[index]) {
        index++;
        listOfNumbers = listOfNumbers.filter(
            (number, j) => (j + 1) % listOfNumbers[index] !== 0
        );
    }

    if (listOfNumbers.includes(+number)) {
        return true;
    } else {
        return false;
    }
}
