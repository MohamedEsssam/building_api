const { Unit, validateUnitSchema } = require("../../models/unit");
const UnitServices = require("../../services/UnitServices");
const UnitServicesInstance = new UnitServices(Unit, validateUnitSchema);
const {
  NotFoundException,
  } = require("../../exceptions/NotFoundException");

module.exports = async (req, res) => {
    const units = await UnitServicesInstance.getAll();
    if (!units) return res.status(404).send(NotFoundException);
  
    return res.status(200).send(units);
  };