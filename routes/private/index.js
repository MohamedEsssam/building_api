const router = require("express").Router();
const user = require("./user");
const unit = require("./unit");
const building = require("./building");


router.use("/user", user);
router.use("/unit", unit);
router.use("/building", building);

module.exports = router;
