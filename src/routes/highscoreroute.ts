import express from 'express'
import { collection } from '../models/highscore.js'
import Score from '../models/highscore.js'

const router = express.Router()

router.get('/highscores', async (req,res) => {
    try {
        const highscores = await Score.find({})
        res.json(highscores)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/highscores', async(req,res) => {

    if (req.body.name.length > 3) {
        res.status(400).json({message: "Invalid name"})
        return;
    }

    const highscore = new Score({
        name: req.body.name,
        score: req.body.score
    })


    try {
        const newScore = await highscore.save()
        res.status(201).json(newScore)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

export default router
