import ClotheModel from '../models/Clothe'
import { Request } from 'express'
import { ClotheEntry } from '../types'
import { ObjectId } from 'mongodb'

// interface PostmanRequest extends Request {
//   files:
// }

export const getAllClothes = async (): Promise<ClotheEntry[]> => {
  return await ClotheModel.find()
}

export const getClotheByID = async (id: string): Promise<ClotheEntry | null> => (
  await ClotheModel.findOne({ _id: new ObjectId(id) })
)

export const postClothe = async (req: Request): Promise<void> => {
  const newClth = req.body
  // if (req.files != null) {
  //   newClth.img_front = req.files.img_front[0].path as File
  //   newClth.img_back = req.files.img_back[0].path
  // } else {
  //   newClth.img_front = req.body.img_front[0].path
  //   newClth.img_back = req.body.img_back[0].path
  // }
  //
  console.log(newClth)
  await ClotheModel.create(newClth)
}

export const getClothesByType = async (type: ClotheEntry['type']): Promise<object | null> => {
  return await ClotheModel.findByType(type)
}
