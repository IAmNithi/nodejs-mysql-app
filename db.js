'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'mydb',
    insecureAuth : true,
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
      }
     
      console.log('Connected to the MySQL server.');
});

module.exports = connection;