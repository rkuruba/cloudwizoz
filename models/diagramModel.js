// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const diagramModel = {
  getDiagrams: function(id, cb) {
    orm.getDiagrams('objects', id, function(err, res) {
        if (err) {
            cb(err);
        }
      cb(null, res);
    });
  },

};



// Export the database functions for the controller (catsController.js).
module.exports = diagramModel;
