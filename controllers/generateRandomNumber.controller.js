// @route GET /api/generateRandomNumber
// @desc To generate random number between 1 to 100
// @access Public
exports.generateRandomNumber = (req, res) => {
  try {
    const range = parseInt(req.query.range);
    const randomNumber = Math.floor(Math.random() * range + 1);

    res.status(200).send({ randomNumber: randomNumber.toString() });
  } catch (error) {
    res.status(500).send({ error: "Server issue!" });
  }
};
