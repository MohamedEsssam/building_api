const path = require("path").resolve(__dirname, "../public");
const fs = require("fs");

module.exports = function (req, res, next) {
  const uid = req.query.uid;
  const pdf = req.file;

  fs.rename(
    path + "/" + pdf.filename,
    path + "/" + uid + "-pdf",
    function (err) {
      if (err) console.log("ERROR: " + err);
    }
  );
  pdf.filename = uid + "-pdf";

  next();
};
