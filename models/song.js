import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const songSchema = new Schema({
  text: String,
  //assuming line below will relate to songs database
  isGood: Boolean
})

// Compile the schema into a model and export it
const Song = mongoose.model('Song', songSchema)

export {
  Song
}