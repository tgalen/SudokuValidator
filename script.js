const sudokuSolution16 = [
    [13, 6, 4, 14, 10, 16, 7, 15, 9, 2, 11, 5, 8, 12, 1, 3],
    [2, 9, 5, 11, 4, 14, 13, 6, 12, 8, 3, 1, 7, 15, 10, 16],
    [7, 15, 10, 16, 1, 3, 8, 12, 6, 13, 14, 4, 2, 9, 5, 11],
    [8, 12, 1, 3, 5, 11, 2, 9, 15, 7, 16, 10, 13, 6, 4, 14],
    [3, 1, 8, 9, 2, 6, 11, 5, 10, 16, 12, 7, 14, 4, 13, 15],
    [14, 4, 13, 15, 7, 12, 16, 10, 5, 11, 6, 2, 3, 1, 8, 9],
    [11, 5, 2, 6, 13, 15, 14, 4, 1, 3, 9, 8, 16, 10, 7, 12],
    [16, 10, 7, 12, 8, 9, 3, 1, 4, 14, 15, 13, 11, 5, 2, 6],
    [9, 8, 3, 5, 11, 4, 6, 2, 7, 12, 1, 16, 15, 13, 14, 10],
    [6, 2, 11, 4, 14, 10, 15, 13, 8, 9, 5, 3, 12, 7, 16, 1],
    [12, 7, 16, 1, 3, 5, 9, 8, 13, 15, 10, 14, 6, 2, 11, 4],
    [15, 13, 14, 10, 16, 1, 12, 7, 2, 6, 4, 11, 9, 8, 3, 5],
    [10, 14, 15, 7, 12, 8, 1, 16, 11, 4, 13, 6, 5, 3, 9, 2],
    [1, 16, 12, 8, 9, 2, 5, 3, 14, 10, 7, 15, 4, 11, 6, 13],
    [5, 3, 9, 2, 6, 13, 4, 11, 16, 1, 8, 12, 10, 14, 15, 7],
    [4, 11, 6, 13, 15, 7, 10, 14, 3, 5, 2, 9, 1, 16, 12, 8]
];

const sudokuSolution25 = [
    [1, 11, 4, 20, 25, 24, 19, 15, 17, 10, 21, 8, 18, 14, 22, 6, 12, 9, 3, 16, 2, 7, 13, 23, 5],
    [5, 2, 19, 23, 24, 8, 22, 12, 9, 3, 16, 6, 7, 20, 17, 18, 21, 25, 14, 13, 10, 11, 4, 1, 15],
    [17, 14, 9, 6, 3, 25, 21, 5, 7, 20, 11, 10, 2, 1, 13, 4, 8, 24, 23, 15, 18, 12, 16, 22, 19],
    [16, 7, 21, 8, 18, 4, 2, 13, 11, 23, 5, 19, 15, 24, 12, 10, 20, 17, 22, 1, 9, 6, 25, 14, 3],
    [10, 13, 15, 12, 22, 14, 1, 18, 6, 16, 23, 9, 25, 4, 3, 7, 5, 19, 11, 2, 8, 24, 20, 21, 17],
    [12, 1, 11, 10, 6, 5, 13, 23, 24, 15, 7, 16, 8, 17, 21, 25, 19, 3, 4, 9, 22, 14, 2, 20, 18],
    [8, 19, 13, 21, 9, 16, 4, 25, 12, 2, 15, 3, 5, 11, 20, 14, 17, 23, 18, 22, 1, 10, 7, 24, 6],
    [4, 17, 14, 18, 7, 9, 3, 22, 21, 19, 25, 1, 24, 2, 23, 5, 13, 20, 10, 6, 16, 15, 8, 11, 12],
    [22, 3, 24, 15, 23, 18, 20, 11, 1, 7, 10, 13, 4, 6, 14, 16, 2, 12, 21, 8, 5, 19, 17, 25, 9],
    [20, 16, 2, 25, 5, 10, 8, 6, 14, 17, 9, 22, 12, 18, 19, 1, 11, 15, 7, 24, 3, 23, 21, 13, 4],
    [13, 25, 3, 5, 10, 2, 23, 14, 4, 18, 22, 15, 17, 19, 24, 20, 7, 1, 9, 21, 12, 16, 6, 8, 11],
    [14, 23, 1, 24, 12, 19, 16, 8, 15, 6, 2, 7, 20, 25, 10, 3, 4, 13, 17, 11, 21, 9, 5, 18, 22],
    [7, 8, 18, 11, 17, 20, 24, 21, 22, 9, 3, 4, 1, 12, 16, 2, 6, 14, 19, 5, 25, 13, 15, 10, 23],
    [2, 22, 16, 9, 21, 17, 11, 7, 10, 25, 8, 5, 14, 13, 6, 12, 24, 18, 15, 23, 19, 4, 1, 3, 20],
    [6, 15, 20, 19, 4, 13, 12, 3, 5, 1, 18, 11, 23, 21, 9, 8, 22, 16, 25, 10, 7, 17, 24, 2, 14],
    [21, 18, 12, 2, 16, 7, 10, 19, 3, 13, 1, 24, 22, 9, 4, 11, 15, 6, 20, 14, 17, 8, 23, 5, 25],
    [9, 24, 8, 13, 1, 6, 25, 4, 20, 12, 17, 14, 3, 7, 18, 23, 16, 22, 5, 19, 11, 21, 10, 15, 2],
    [23, 10, 22, 7, 15, 21, 5, 9, 18, 14, 6, 20, 16, 8, 11, 17, 1, 2, 13, 25, 4, 3, 19, 12, 24],
    [25, 5, 6, 14, 11, 1, 17, 2, 8, 24, 13, 21, 19, 23, 15, 9, 3, 10, 12, 4, 20, 18, 22, 16, 7],
    [3, 20, 17, 4, 19, 22, 15, 16, 23, 11, 12, 25, 10, 5, 2, 21, 18, 8, 24, 7, 6, 1, 14, 9, 13],
    [19, 6, 23, 22, 8, 15, 18, 1, 25, 4, 14, 2, 9, 3, 7, 13, 10, 11, 16, 20, 24, 5, 12, 17, 21],
    [15, 4, 5, 17, 14, 3, 7, 24, 19, 8, 20, 23, 11, 10, 25, 22, 9, 21, 1, 12, 13, 2, 18, 6, 16],
    [11, 12, 7, 16, 20, 23, 6, 17, 2, 21, 24, 18, 13, 15, 1, 19, 25, 5, 8, 3, 14, 22, 9, 4, 10],
    [18, 9, 25, 1, 2, 11, 14, 10, 13, 22, 4, 12, 21, 16, 5, 24, 23, 7, 6, 17, 15, 20, 3, 19, 8],
    [24, 21, 10, 3, 13, 12, 9, 20, 16, 5, 19, 17, 6, 22, 8, 15, 14, 4, 2, 18, 23, 25, 11, 7, 1]
];

function areAllElementsNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] !== "number") {
                return false;
            }
        }
    }
    return true;
}

function uniqueValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

function validateRows(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueValues(arr[i])) {
            return false;
        }
    }
    return true;
}

console.log(validateRows(sudokuSolution));

function columnsToRows(arr) {
    const parentColumnArr = [];
    for (let i = 0; i < arr.length; i++) {
        const childColumnArr = [];
        for (let j = 0; j < arr[i].length; j++) {
            childColumnArr.push(arr[j][i]);
        }
        parentColumnArr.push(childColumnArr);
    }
    return parentColumnArr;
}

console.log(validateRows(columnsToRows(sudokuSolution)));

// [0,0] i = 0, 4, 8, 12
// [4,0]
// [8,0]
// [12,0]

// [0,4]
// [4,4] i = 1, 5, 9, 13
// [8,4]
// [12,4]

// [0,8]
// [4,8]
// [8,8] i = 2, 6, 10, 14
// [12,8]

// [0,12]
// [4,12]
// [8.12]
// [12,12] i = 3, 7, 11, 15

function solutionSubBoxesToRows(arr) {
    const parentBoxes = [];
    const sqRootSolutionLength = Math.sqrt(arr.length);
    for (let i = 0; i < arr.length; i++) {
        const childBoxes = [];
        const startingRowIndexOFBox = (i % sqRootSolutionLength) * sqRootSolutionLength; // 0 * 4, 1 * 4, 2 * 4. 3 * 4 = 0, 4, 8, 12
        for (let j = startingRowIndexOFBox; j < startingRowIndexOFBox + sqRootSolutionLength; j++) {
            for (let k = i - (i % sqRootSolutionLength); k < i - (i % sqRootSolutionLength) + sqRootSolutionLength; k++) {
                childBoxes.push(arr[j][k]);
            }
        }
        parentBoxes.push(childBoxes);
    }
    return parentBoxes;
}

console.log(solutionSubBoxesToRows(sudokuSolution));

function validateSudoku(solution) {
    if (!areAllElementsNumbers(solution)) {
        return false;
    }
    const columns = columnsToRows(solution);
    const subBoxes = solutionSubBoxesToRows(solution);
    return validateRows(solution) && validateRows(columns) && validateRows(subBoxes);
}

console.log(validateSudoku(sudokuSolution25));
