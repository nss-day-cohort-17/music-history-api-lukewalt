'use strict';

const { bookshelf } = require('../db/database');

const Albums = bookshelf.Model.extend({
  tableName: 'album'
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

module.exports = bookshelf.model('Album', Albums);
