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

function newSong(req, res) {
  res.render('songs/new')
}

function create(req, res) {
  req.body.isGood = true
  console.log(req.body)
  Song.create(req.body)
  .then(song => {
    res.redirect('/songs')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/songs')
  })
}

function show(req,res){
  Song.findById(req.params.songId)
  .then(song =>{
    res.render("songs/show",{
      song: song
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect("/songs")
  })
}

export {
  index,
  newSong as new,
  create,
  show
}