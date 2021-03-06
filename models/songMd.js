'use strict'

// Define a model using bookshelf that describes a song object, as well as
// static methods for getting one or all songs from the db
const { bookshelf } = require('../db/database');
// When adding the 'table' property use your old friend DB Browser for SQLite to
// open up the musichistory db and inspect the tables. Add the appropriate table name for
// interfacing with the songs collection
const Songs = bookshelf.Model.extend({
  tableName: 'song'
}, {
  getAll: function() {
     return this.forge()
    .fetchAll()
    .then( rows => {
      return rows
    })
    .catch( error => {
      return error
    })
  }

})

module.exports = bookshelf.model('Songs', Songs);
