const { Unit, validateUnitSchema } = require("../../models/unit");
const UnitServices = require("../../services/UnitServices");
const UnitServicesInstance = new UnitServices(Unit, validateUnitSchema);
const {
    InValidDataException,
  } = require("../../exceptions/InValidDataException");

module.exports = async (req, res) => {
    const number = req.body.number;
    const name = req.body.name;
    const area = req.body.area;
    const numberOfBuilding = req.body.numberOfBuilding;
    const buildings = req.body.buildings;
  
    const unit = await UnitServicesInstance.create(number, name, area, numberOfBuilding, buildings);
    if (!unit) return res.status(400).send(InValidDataException);
  
    return res.status(200).send(unit);
  };