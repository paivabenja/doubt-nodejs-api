import express from 'express'
import * as clothesServices from '../services/clothes'
import { ClotheEntry } from '../types'
import multer from 'multer'
const upload = multer({ dest: 'media/' })

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

const clthImgs = upload.fields([{ name: 'img_front', maxCount: 1 }, { name: 'img_back', maxCount: 1 }])

router.post('/', clthImgs, (req, res) => {
  res.send(clothesServices.postClothe(req))
})

export default router
