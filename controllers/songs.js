import { songs } from "../data/songs-data.js"

function index (req, res) {
  res.render('songs/index', {
    songs: songs
  })
}

export {
  index,
}