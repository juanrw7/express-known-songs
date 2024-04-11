// Import the model that we exported in the Todo.js model file
import { Song } from '../models/song.js'

import { songs } from "../data/songs-data.js"

function index (req, res) {
  Song.find({})
  .then(songs => {
    res.render('songs/index', {
      songs: songs
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}






export {
  index,
}