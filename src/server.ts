import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import highscoreroute from './routes/highscoreroute.js'

const app = express()
const port = 4000

dotenv.config()

const atlasUri = process.env.MONGODB_URI

mongoose.connect(atlasUri)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())


app.use(cors());

app.use(highscoreroute)


app.listen(port, () => console.log("listeninig on port ", port))



