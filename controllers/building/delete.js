const { Building, validateBuildingSchema } = require("../../models/building");
const BuildingServices = require("../../services/BuildingServices");
const BuildingServicesInstance = new BuildingServices(Building, validateBuildingSchema);
const {
  NotFoundException,
  } = require("../../exceptions/NotFoundException");

module.exports = async (req, res) => {
    const buildingId = req.params['buildingId']
    
    const building = await BuildingServicesInstance.delete(buildingId);
    if (!building) return res.status(400).send(NotFoundException);
  
    return res.status(200).send(building);
  };