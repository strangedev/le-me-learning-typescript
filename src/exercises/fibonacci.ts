/**
 * Generates the fibonacci sequence.
 * @param n The length of the fibonacci sequence that is generated
 */
export function fibonacci(n: Number): Number[] {
    let theSequence: Number[] = [];
    let lastNumber = 0;
    let currentNumber = 1;
    for (let i = 0; i < n; i++) {
        theSequence.push(currentNumber);
        const nextNumber = lastNumber + currentNumber;
        lastNumber = currentNumber;
        currentNumber = nextNumber;
    }
    return theSequence;
}