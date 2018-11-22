var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var temp = new Schema({
    temprature: {
        type: String,
        required: true
    },
    humidity: {
       type: String,
       required: true
    },
    timestamp: {
      type: String,
      required:true
    }
});

module.exports = mongoose.model('EC_dht11', temp);
