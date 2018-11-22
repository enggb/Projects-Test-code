'use strict';

const express = require('express');
const router = express.Router();

//const Car = require('./controllers/car')
const Temprature = require('./controllers/temprature')
//Developer debugging routes

//router.get('/car',Car.start);
router.get('/temp',Temprature.getTemprature)

//To dos
/*

PATCH /sites/{siteID}/devices/{id}/icon --- save new device friendly icon
GET /sites/{siteID}/devices/{id}/icon --- get device friendly icon
GET /sites/{siteID}/devices/icon --- list all devices friendly icon
*/

module.exports = router;
