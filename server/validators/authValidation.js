const joi = require("joi");

function validateUser(user) {
  const Schema = joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().required(),
    password: joi.string().required(),
    phone: joi.string().length(11).required(),
  });
  return Schema.validate(user);
}

function validateUserRegisteration(cred) {
  const Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });

  return Schema.validate(cred);
}

exports.validateUser = validateUser;
exports.validateUserRegisteration = validateUserRegisteration;
