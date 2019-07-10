// Import MySQL connection.
const connection = require('../config/connection.js');

// extra function to help with the way I am doing the SQL query



const sqlObj = (ob) => {
  let arr = [];

  for (let key in ob) {
      let value = ob[key];
    
      if (Object.hasOwnProperty.call(ob, key)) {
       
          if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
          }

          arr.push(key + "=" + value);
      }
  }

  return arr.toString();
}
const orm = {
  all: function(tableInput, cb) {
    connection.query('SELECT * FROM ??', tableInput, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
/*
  select: function(tableInput, cb) {
    connection.query('SELECT * FROM ?? where current_flag', tableInput, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
*/


getDiagrams: function(table, id, cb) {
  const queryString = 'SELECT * FROM ?? where App_ID = ?'
  // insert into events(campus,title,date,start_time,end_time,type,future) values ('Alpharetta','Icecream Social','2019-05-20','10:00','12:00','Social','1');
  connection.query(queryString, [table, id], function(err, result) {
    if (err) {
      cb(err);
    }
    cb(null, result);
  });
},

  create: function(table, cols, vals, cb) {
    const queryString = 'INSERT INTO ?? (??) VALUES (?)'
    // insert into events(campus,title,date,start_time,end_time,type,future) values ('Alpharetta','Icecream Social','2019-05-20','10:00','12:00','Social','1');
    connection.query(queryString, [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(queryString);
      cb(result);
    });
  },

  delete: function(table, cols, cb) {
    const queryString = 'Delete from ?? where id ??'
    // insert into events(campus,title,date,start_time,end_time,type,future) values ('Alpharetta','Icecream Social','2019-05-20','10:00','12:00','Social','1');
    connection.query(queryString, [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(queryString);
      cb(result);
    });
  },

update: (table, objColVals, condition, callback) => {
  let queryString = "UPDATE " + table;

  queryString += " SET ";
  queryString += sqlObj(objColVals);
  queryString += " WHERE ";
  queryString += condition;
  console.log(queryString);
  connection.query(queryString, (err, results) => {
      if (err) throw err;

      callback(results);
      
  });
}

}
module.exports = orm;
