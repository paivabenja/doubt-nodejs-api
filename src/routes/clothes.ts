import express from 'express'
import * as clothesServices from '../services/clothes'

const router = express.Router()

router.get('/', (_req, res): void => {
  const getData = async (): Promise<void> => {
    res.send(await clothesServices.getAllClothes())
  }
  getData().catch(err => console.log(err))
})

router.post('/', (req, res) => {
  res.send(clothesServices.postClothe(req.body))
})

export default router
