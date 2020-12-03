const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

router.get('/wellHello', controllers.wellHello);

module.exports = router;