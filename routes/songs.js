import { Router } from 'express'

import * as songsCtrl from "../controllers/songs.js"

const router = Router()

// GET localhost:3000/songs
router.get('/', songsCtrl.index)

// GET localhost:3000/songs/new
router.get('/new', songsCtrl.new)

// GET localhost:3000/songs/:songId
router.get('/:songId',songsCtrl.show)

// POST localhost:3000/songs
router.post('/', songsCtrl.create)

export { router }
