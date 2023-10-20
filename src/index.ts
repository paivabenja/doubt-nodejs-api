import express from 'express'
import cors from 'cors'
import clothesRouter from './routes/clothes'
import mongoose from 'mongoose'

const app = express()

app.use(express.json()) // middleware to make req.body a json
app.use(express.static('media')) // middleware to use static services (media)
app.use(cors({ origin: 'http://localhost:3000' }))
app.set('PORT', 8000)

app.get('/ping', (_req, res) => {
  console.log('Ping')
  res.send('Pong!!')
})

app.get('/', (_req, res) => {
  res.send('Root!!!')
})

app.use('/api/clothes', clothesRouter)
app.get('/media', express.static('media'))

app.listen(app.get('PORT'), (): void => {
  console.log(`Server running on http://localhost:${app.get('PORT') as number}/`)
})

const connectToDB = async (): Promise<void> => {
  const DB = await mongoose.connect(
    'mongodb://paiva:contrasenia@mongo-doubt:27017/ropa?authSource=admin'
  )
  console.log(`Connected to ${DB.connection.db.databaseName} succesfully!`)
}

void connectToDB()
