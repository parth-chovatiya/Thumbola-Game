// Find position of the element in the matrix
const findElementInMatrix = (matrix, element) => {
  for (let row in matrix) {
    const column = matrix[row].indexOf(element);
    if (column !== -1) return { row, column };
  }
  return { row: -1, column: -1 };
};

// To count the total marked element in the 1D array (every row)
const noOfElementMarked = (arr) => {
  return arr.reduce((noOfMarked, ele) => noOfMarked + (ele === -1 ? 1 : 0), 0);
};

// Ṭo count the total marked element in the matrix
const totalNoOfMarkedElements = (matrix) => {
  return matrix.reduce((noOfMarked, arr) => {
    return noOfMarked + noOfElementMarked(arr);
  }, 0);
};

// To check the first marked element
const markedFirst = (matrix) => {
  return totalNoOfMarkedElements(matrix) >= 1;
};

// To check all elements are marked or not
const allMarked = (matrix) => {
  let len = matrix.length * matrix[0].length;
  return len === totalNoOfMarkedElements(matrix);
};

// To check the 7 elements are marked or not
const sevenMarked = (matrix) => {
  return totalNoOfMarkedElements(matrix) >= 7;
};

// To check corners are marked or not
const fourCorner = (matrix) => {
  let row = matrix.length;
  let column = matrix[0].length;

  const corner = [
    [0, 0],
    [row - 1, 0],
    [0, column - 1],
    [row - 1, column - 1],
  ];

  return (
    4 ===
    corner.reduce((noOfMarked, ele) => {
      const [row, column] = ele;
      return noOfMarked + (matrix[row][column] === -1 ? 1 : 0);
    }, 0)
  );
};

// To check all the middle are marked or not
const allMiddle = (matrix) => {
  let row = matrix.length;
  let column = matrix[0].length;

  let middle = Math.floor(row / 2);
  if (row & 1) return noOfElementMarked(matrix[middle]) === column;

  return (
    noOfElementMarked(matrix[middle - 1]) +
      noOfElementMarked(matrix[middle]) ===
    column * 2
  );
};

// To marks the element of matrix
const marksMatrix = (matrix, random, callback) => {
  return new Promise((resolve, reject) => {
    try {
      for (let element of random) {
        const { row, column } = findElementInMatrix(matrix, element);
        if (row === -1 && column === -1) continue;
        matrix[row][column] = -1;
      }

      const obj = {
        allMarked: allMarked(matrix),
        sevenMarked: sevenMarked(matrix),
        fourCorner: fourCorner(matrix),
        allMiddle: allMiddle(matrix),
        markedFirst: markedFirst(matrix),
      };
      resolve(obj);
    } catch (error) {
      reject(error);
    }
  });

  // using callback function
  // callback(obj);
};

module.exports = marksMatrix;
