const express = require('express');
const cepController = require('../controllers/cep');

const router = express.Router();

router.get('/:cep', cepController.getByCEP);

module.exports = router;