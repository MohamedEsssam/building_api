const mongoose = require("mongoose");
const pick = require("lodash/pick");
const Joi = require("@hapi/joi");

const buildingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  numberOfFloors: {
    type: Number,
    required: true,
  },
  constrictiveArea: {
    type: Number,
    required: true,
  },
  totalArea: {
    type: Number,
    required: true,
  },
  interfaceSpace: {
    type: Number,
    required: true,
  },
  dateCreated: {
    type: String,
    required: true,
  },
  buildType: {
    type: String,
    required: true,
  },
  lastMaintenanceDate: {
    type: String,
    required: true,
  },
  lastMaintenanceCost: {
    type: Number,
    required: true,
  },
  license: {
    type: Boolean,
    required: true,
  },
  record140: {
    type: Boolean,
    required: true,
  },
  originatorJob: {
    type: String,
    required: true,
  },
});

buildingSchema.methods.toJSON = function () {
  const obj = this.toObject();

  return pick(obj, [
    "_id",
    "name",
    "code",
    "length",
    "width",
    "height",
    "numberOfFloors",
    "constrictiveArea",
    "totalArea",
    "interfaceSpace",
    "dateCreated",
    "buildType",
    "lastMaintenanceDate",
    "lastMaintenanceCost",
    "license",
    "record140",
    "originatorJob",
  ]);
};

const Building = mongoose.model("Building", buildingSchema);

function validateBuildingSchema(building) {
  const schema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string().required(),
    length: Joi.number().required(),
    width: Joi.number().required(),
    height: Joi.number().required(),
    numberOfFloors: Joi.number().required(),
    constrictiveArea: Joi.number().required(),
    totalArea: Joi.number().required(),
    interfaceSpace: Joi.number().required(),
    dateCreated: Joi.string().required(),
    buildType: Joi.string().required(),
    lastMaintenanceDate: Joi.string().required(),
    lastMaintenanceCost: Joi.number().required(),
    license: Joi.boolean().required(),
    record140: Joi.boolean().required(),
    originatorJob: Joi.string().required(),
  });

  return schema.validate(building);
}

module.exports.Building = Building;
exports.validateBuildingSchema = validateBuildingSchema;
