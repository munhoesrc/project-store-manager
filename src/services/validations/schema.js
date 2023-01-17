const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const newProduct = Joi.object({ name: Joi.string().min(5).required() });

module.exports = {
  idSchema,
  newProduct,
};