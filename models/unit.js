const mongoose = require("mongoose");
const pick = require("lodash/pick");
const Joi = require("@hapi/joi");

const unitSchema = new mongoose.Schema({
  number: {
      type: String,
      required: true,
  },
  name: {
      type: String,
      required: true,
  },
  area: {
      type: String,
      required: true,
  },
  numberOfBuilding: {
      type: String,
      required: true
  },
  buildings: [{
    buildingId: 
      { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Building" 
      },
    buildingType:{ type: String, enum : ['floor', 'building'], default: 'building' }
  }],
});

unitSchema.methods.toJSON = function () {
  const obj = this.toObject();

  return pick(obj, ["_id", "number", "name", "area", "numberOfBuilding", "buildings"]);
};

const Unit = mongoose.model("Unit", unitSchema);

function validateUnitSchema(unit) {
  const schema = Joi.object({
    number: Joi.string().required(),
    name: Joi.string().required(),
    area: Joi.string().required(),
    numberOfBuilding: Joi.string().required(),
    buildings: Joi.array().items(Joi.object({
      buildingId: Joi.string(),
      buildingType: Joi.string()
    })),
  });

  return schema.validate(unit);
}

module.exports.Unit = Unit;
exports.validateUnitSchema = validateUnitSchema;
