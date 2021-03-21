const path = require("path").resolve(__dirname, "../public");
const fs = require("fs");

module.exports = function (req, res, next) {
  const uid = req.query.uid;
  const image = req.file;

  fs.rename(
    path + "/" + image.filename,
    path + "/" + uid + "-img",
    function (err) {
      if (err) console.log("ERROR: " + err);
    }
  );
  image.filename = uid + "-img";

  next();
};
