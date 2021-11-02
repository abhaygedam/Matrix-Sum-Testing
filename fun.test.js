


const { matrixSum } = require("./fun");

describe("Matrix sum function", () => {
    test("not undefined",
        () => {
            const arr = [[1, 2], [2, 4]];
            expect(matrixSum(arr)).not.toBeUndefined();
        });
     test("only single value in matrix",
        () => {
            const arr = [[1]];
            expect(matrixSum(arr)).toBe(1);
        });
    test("addtion",
        () => {
            const arr = [[1, 2, 3, 4, 5], [2, 3, 4, 6, 1]];
            expect(matrixSum(arr)).toBe(31);
        });
    test("addition",
        () => {
            const arr = [[1, 2], [2, 4]];
            expect(matrixSum(arr)).toBe(9);
        });
    test("addition",
        () => {
            const arr = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            expect(matrixSum(arr)).toBe(0);
        });
    test("addition",
        () => {
            const arr = [[1,1,1,1], [1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]];
            expect(matrixSum(arr)).toBe(20);
        });
    test("string output",
        () => {
            const arr = [[1, "a"], [2, 4]];
            let matrix = typeof(matrixSum(arr));
            expect(matrix).toBe("string");
        });
    test("string output equal or not",
        () => {
            const arr = [[1, "a" , "k", "p"], [2, 4]];
            let matrix = matrixSum(arr);
            expect(matrix).toBe("1akp24");
        });
});
