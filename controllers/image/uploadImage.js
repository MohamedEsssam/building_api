const {
  InValidDataException,
} = require("../../exceptions/InValidDataException");
module.exports = async (req, res) => {
  if (!req.file) return res.status(400).send(InValidDataException);

  res.status(200).json("image upload successfully");
};
