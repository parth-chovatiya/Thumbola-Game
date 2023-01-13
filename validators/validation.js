const generateMatrixValidation = (req, res, next) => {
  try {
    const { row, column, range } = req.body;

    // if row * column > range, throw an Error
    if (row * column > range) {
      throw new Error(`Enter range greater than or equal to ${row * column}`);
    }

    // If any value are -ve, throw an Error
    if (row <= 0 || column <= 0 || range <= 0) {
      throw new Error("Enter +ve number.");
    }

    next();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = generateMatrixValidation;
