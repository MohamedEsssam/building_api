const { Building, validateBuildingSchema } = require("../../models/building");
const BuildingServices = require("../../services/BuildingServices");
const BuildingServicesInstance = new BuildingServices(Building, validateBuildingSchema);
const {
    InValidDataException,
  } = require("../../exceptions/InValidDataException");

module.exports = async (req, res) => {
    const buildingObject = req.body;
  
    const building = await BuildingServicesInstance.create(buildingObject);
    if (!building) return res.status(400).send(InValidDataException);
  
    return res.status(200).send(building);
  };