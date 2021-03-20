const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const pick = require("lodash/pick");
const config = require("config");
const Joi = require("@hapi/joi");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 3,
    required: true,
  },
});

userSchema.methods.toJSON = function () {
  const obj = this.toObject();

  return pick(obj, ["_id", "username"]);
};

userSchema.methods.generateAuthToken = function () {
  const user = this.toObject();

  const payload = {
    ...pick(user, ["_id", "username"]),
  };
  const token = jwt.sign(payload, config.get("authSecret"));
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUserSchema(user) {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(3).required(),
  });

  return schema.validate(user);
}

module.exports.User = User;
exports.validateUserSchema = validateUserSchema;
