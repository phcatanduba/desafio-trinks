import luckyNumber from '../number/luckyNumber';

test('Testing if the number 7 is or not a lucky number', async () => {
    expect(luckyNumber('7')).toBeTruthy();
});

test('Testing if the number 21 is or not a lucky number', async () => {
    expect(luckyNumber('21')).toBeTruthy();
});

test('Testing if the number 28 is or not a lucky number', async () => {
    expect(luckyNumber('28')).toBeFalsy();
});

test('Testing if the number 142 is or not a lucky number', async () => {
    expect(luckyNumber('142')).toBeFalsy();
});

test('Testing if the number 37 is or not a lucky number', async () => {
    expect(luckyNumber('37')).toBeTruthy();
});

test('Testing if the number 100 is or not a lucky number', async () => {
    expect(luckyNumber('100')).toBeFalsy();
});
