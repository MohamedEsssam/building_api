const { Unit, validateUnitSchema } = require("../../models/unit");
const UnitServices = require("../../services/UnitServices");
const UnitServicesInstance = new UnitServices(Unit, validateUnitSchema);
const {
  NotFoundException,
  } = require("../../exceptions/NotFoundException");

module.exports = async (req, res) => {
    const unitId = req.params['unitId']
    const unitObject = req.body;

    const unit = await UnitServicesInstance.update(unitId, unitObject);
    if (!unit) return res.status(400).send(NotFoundException);
  
    return res.status(200).send(unit);
  };