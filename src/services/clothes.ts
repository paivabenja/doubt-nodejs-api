import ClotheModel from '../models/Clothe'
import { ClotheEntry } from '../types'
import { ObjectId } from 'mongodb'

export const getAllClothes = async (): Promise<ClotheEntry[]> => {
  return await ClotheModel.find()
}

export const getClotheByID = async (id: string): Promise<ClotheEntry | null> => (
  await ClotheModel.findOne({ _id: new ObjectId(id) })
)

export const postClothe = async (req: ClotheEntry): Promise<void> => {
  await ClotheModel.create(req)
}

export const getClothesByType = async (type: ClotheEntry['type']): Promise<object | null> => {
  return await ClotheModel.findByType(type)
}
