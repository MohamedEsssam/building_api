const route = require("express").Router();
const createBuilding = require("../../controllers/building/create");
const updateBuilding = require("../../controllers/building/update");
const deleteBuilding = require("../../controllers/building/delete");
const getBuilding = require("../../controllers/building/getOne");
const getAllBuilding = require("../../controllers/building/getAll");
const authJwt = require("../../middleware/authJwt");

route.post("/", authJwt, createBuilding);
route.put("/:buildingId", authJwt, updateBuilding);
route.delete("/:buildingId", authJwt, deleteBuilding);
route.get("/:buildingId", authJwt, getBuilding);
route.get("/", authJwt, getAllBuilding);


module.exports = route;
