// unix epic Jan 1 1970 00:00:00 am 

var moment = require('moment'); 
// var date = new Date(); 
// console.log(date.getMonth());
// var date = moment(); 
// date.add(100,'years').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

var date = moment();
console.log(date.format('LT'));
console.log(date.format('h:mm a'));

var date1 = moment(1234); 
var timestamp = moment().valueOf(); 
console.log(timestamp);