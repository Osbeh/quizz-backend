import mongoose from 'mongoose'

const scoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
})

export default mongoose.model('highscores', scoreSchema)

// module.exports = mongoose.model('highscores', scoreSchema)