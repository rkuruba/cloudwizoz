const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) { 
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'p27w9o0j5oworgwf',
    password: 'gnxr0bw37fze6b4u',
    database: 'events_db'
  });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;