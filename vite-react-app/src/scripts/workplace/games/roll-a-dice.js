export function generateRandomNumber(range) {
    const randomNumber = Math.floor(Math.random() * range) + 1;
    return randomNumber;
}