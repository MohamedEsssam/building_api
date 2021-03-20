const route = require("express").Router();
const createUnit = require("../../controllers/unit/create");
const updateUnit = require("../../controllers/unit/update");
const deleteUnit = require("../../controllers/unit/delete");
const getUnit = require("../../controllers/unit/getOne");
const getAllUnit = require("../../controllers/unit/getAll");
const authJwt = require("../../middleware/authJwt");

route.post("/", authJwt, createUnit);
route.put("/:unitId", authJwt, updateUnit);
route.delete("/:unitId", authJwt, deleteUnit);
route.get("/:unitId", authJwt, getUnit);
route.get("/", authJwt, getAllUnit);


module.exports = route;
