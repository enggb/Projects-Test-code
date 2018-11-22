var request = require('request');
var url = "https://mac2vendor.com/api/v4/mac/"+process.argv[2]

request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
     }
})