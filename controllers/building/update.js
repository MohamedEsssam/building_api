const { Building, validateBuildingSchema } = require("../../models/building");
const BuildingServices = require("../../services/BuildingServices");
const BuildingServicesInstance = new BuildingServices(Building, validateBuildingSchema);
const {
  NotFoundException,
  } = require("../../exceptions/NotFoundException");

module.exports = async (req, res) => {
    const builingId = req.params['builingId']
    const buildingObject = req.body;

    const building = await BuildingServicesInstance.update(builingId, buildingObject);
    if (!building) return res.status(400).send(NotFoundException);
  
    return res.status(200).send(building);
  };