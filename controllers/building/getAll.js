const { Building, validateBuildingSchema } = require("../../models/building");
const BuildingServices = require("../../services/BuildingServices");
const BuildingServicesInstance = new BuildingServices(Building, validateBuildingSchema);
const {
  NotFoundException,
  } = require("../../exceptions/NotFoundException");

module.exports = async (req, res) => {
    const buildings = await BuildingServicesInstance.getAll();
    if (!buildings) return res.status(404).send(NotFoundException);
  
    return res.status(200).send(buildings);
  };