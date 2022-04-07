const joi = require('joi');
// const { notFound } = require('../../helpers/errors');

const scheme = joi.object({
  username: joi.string().min(5).required(),
  password: joi.string().min(5).required(),
});

const validateFields = ({ userName, password }) => {
  const { error } = scheme.validate(userName, password);

  if (error) throw error;
};

const isAdmin = ({ username, password }) => username === 'admin' && password === 's3nh4S3gur4???';

module.exports = {
  validateFields,
  isAdmin,
};
