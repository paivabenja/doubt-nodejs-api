import express from 'express'
import cors from 'cors'
import path from 'path'
import clothesRouter from './routes/clothes'
import mongoose from 'mongoose'

const app = express()

app.use(express.json()) // middleware to make req.body a json
app.use(express.static(path.join(__dirname, 'media'))) // middleware to use static services (media)
app.use(cors({ origin: 'http://localhost:3000' }))
app.set('PORT', 8000)

app.get('/ping', (_req, res) => {
  console.log('received a ping')
  res.send('pong')
})

app.use('/api/clothes', clothesRouter)

app.listen(app.get('PORT'), (): void => {
  console.log(`Server running on port: ${app.get('PORT')}`)
})

const connectToDB = async (): Promise<void> => {
  const DB = await mongoose.connect('mongodb://127.0.0.1:27017/ropa')
  console.log(`Connected to ${DB.connection.db.databaseName} succesfully!`)
}

void connectToDB()
