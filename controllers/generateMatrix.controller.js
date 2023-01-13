// @route POST /api/generateMatrix
// @desc To generate matrix
// @access Public
exports.generateMatrix = (req, res) => {
  try {
    const { row, column, range } = req.body;

    // To generate unique number between 1 to range & store it in 1D matrix
    const uniqueNumbers = [];
    while (uniqueNumbers.length < row * column) {
      const num = Math.floor(Math.random() * range + 1);
      if (uniqueNumbers.indexOf(num) === -1) uniqueNumbers.push(num);
    }

    // convert unique number 1D matrix to 2D matrix
    const matrix = [];
    for (let x = 0; x < row; x++) {
      matrix.push(uniqueNumbers.splice(0, column));
    }

    res.status(200).send({ matrix, range });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
