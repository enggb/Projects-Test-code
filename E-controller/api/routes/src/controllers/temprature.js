const mongoose = require('mongoose').connection;
const tempHumi = mongoose.model('EC_dht11');

//Logger
const Logger = require('./../../../../utils/logger');
const logger = new Logger( {moduleName: 'Temp', color: 'green'} );

let getTemprature = (req, res) => {
	return new Promise((resolve, reject) => {
		temp = req.query.temp
		hum = req.query.hum
		let TH_Model = {temprature:temp,humidity:hum,timestamp:Date.now()};
		let newTH_Model = new tempHumi(TH_Model);
	    newTH_Model.save(function(err, tp) {
	        if(err) {
	            console.error('Failed ', err);
	            res.status(500).send(err);
	            return;
	        }
	        res.status(200).send(tp);
	    });
	})
}

module.exports ={
	getTemprature	
}