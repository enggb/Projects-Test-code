var network = require('network');
var colour = require('colour')
 
network.get_public_ip(function(err, ip) {
  if(err)console.log("Error in getting Publick IP".red);
  console.log("Your public IP is ".green+ ip.blue); // should return your public IP address
})

network.get_private_ip(function(err, ip) {
  if(err)console.log("Error in getting Publick IP".red);
  console.log("Your private IP is ".green+ ip.blue); // err may be 'No active network interface found'.
})

network.get_gateway_ip(function(err, ip) {
  if(err)console.log("Error in getting Publick IP".red);
  console.log("Your gateway IP is ".green+ ip.blue); // err may be 'No active network interface found.'
})

network.get_active_interface(function(err, obj) {
 if(err)console.log("Error in getting Publick IP".red);
  console.log("Your active interface for the network ".green + JSON.stringify(obj));
  /* obj should be:
 
  { name: 'eth0',
    ip_address: '10.0.1.3',
    mac_address: '56:e5:f9:e4:38:1d',
    type: 'Wired',
    netmask: '255.255.255.0',
    gateway_ip: '10.0.1.1' }
 
  */
})

network.get_interfaces_list(function(err, list) {
 if(err)console.log("Error in getting Publick IP".red);
  console.log("Your interface list for the network ".green+ JSON.stringify(list));
  /* list should be:
 
  [{
    name: 'eth0',
    ip_address: '10.0.1.3',
    mac_address: '56:e5:f9:e4:38:1d',
    type: 'Wired',
    netmask: '255.255.255.0',
    gateway_ip: '10.0.1.1' 
   },
   { ... }, { ... }]
 
  */
})
