const marksMartix = require("../utils/helpher");

// @route POST /api/marked
// @desc  To check marked number & claim price
// @access Public
exports.markElements = async (req, res) => {
  try {
    const { matrix, randomNumbers } = req.body;

    // Using callback function
    // let result;
    // marksMartix(matrix, randomNumbers, (obj) => {
    //   result = obj;
    //   console.log(obj);
    // });

    const result = await marksMartix(matrix, randomNumbers);

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server issue!" });
  }
};
