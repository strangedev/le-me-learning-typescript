import { fibonacci } from "./fibonacci";

test("fibonacci sequence of length 10", () => {
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});