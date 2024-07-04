const express = require('express');
const  AuthController = require("../controller/auth.controller");
const router = express.Router();

router.post('/registration', AuthController.registrations);
router.post('/login', AuthController.login);


module.exports = router
