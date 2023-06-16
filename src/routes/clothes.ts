import express from 'express'
import * as clothesServices from '../services/clothes'
import { ClotheEntry } from '../types'

const router = express.Router()

router.get('/', (_req, res): void => {
  const getData = async (): Promise<void> => {
    res.send(await clothesServices.getAllClothes())
  }
  getData().catch((err) => console.log(err))
})

router.get('/id/:id', (req, res): void => {
  const getData = async (): Promise<void> => {
    res.send(await clothesServices.getClotheByID(req.params.id))
    // res.send(`q pasa mi g, tu id es ${req.params.id}`)
  }
  getData().catch((err) => console.log(err))
})

router.get('/type/:type', (req, res): void => {
  console.log(req)
  const getData = async (): Promise<void> => {
    res.send(
      await clothesServices.getClothesByType(req.params.type as ClotheEntry['type'])
    )
  }
  void getData()
})

router.post('/', (req, res) => {
  res.send(clothesServices.postClothe(req.body as ClotheEntry))
})

export default router
