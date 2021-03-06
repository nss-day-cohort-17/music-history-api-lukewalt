'use strict';


// require a song model
const { bookshelf } = require('../db/database');
const Songs = require('../models/songMd');

// use model methods for getting all songs and one song then send the response back with the data

const getSongs = (req, res, next) => {
  Songs.getAll()
  .then( allSongs => {
    res.status(200).json(allSongs);
  })
  .catch( err => {
    next(err)
  })
}

// const createSong = (req, res, next) => {
//   Songs.forge({id, title, SongLength, })
// }

// stretch goal: methods for adding, deleting, editing a song


module.exports = { getSongs };
