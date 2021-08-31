export default function isAHappyNumber(number: string, index = 1): boolean {
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
