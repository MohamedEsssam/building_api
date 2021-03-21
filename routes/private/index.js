const router = require("express").Router();
const user = require("./user");
const unit = require("./unit");
const building = require("./building");
const image = require("./image");
const pdf = require("./pdf");

router.use("/user", user);
router.use("/unit", unit);
router.use("/building", building);
router.use("/image", image);
router.use("/pdf", pdf);

module.exports = router;
