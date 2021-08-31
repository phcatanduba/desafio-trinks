import happyNumber from '../number/happyNumber';

test('Testing if the number 7 is or not a happy number', async () => {
    expect(happyNumber('7')).toBeTruthy();
});

test('Testing if the number 21 is or not a happy number', async () => {
    expect(happyNumber('21')).toBeFalsy();
});

test('Testing if the number 28 is or not a happy number', async () => {
    expect(happyNumber('28')).toBeTruthy();
});

test('Testing if the number 142 is or not a happy number', async () => {
    expect(happyNumber('142')).toBeFalsy();
});

test('Testing if the number 37 is or not a happy number', async () => {
    expect(happyNumber('37')).toBeFalsy();
});

test('Testing if the number 100 is or not a happy number', async () => {
    expect(happyNumber('100')).toBeTruthy();
});
