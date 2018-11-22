const scanner = require('local-network-scanner');
scanner.scan(devices => {
       // console.log(device)
       // return device
    console.log(devices);
},function(err) {
        console.log(err)
});

