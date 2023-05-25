import ClotheModel from '../models/Clothe'
import { ClotheEntry, ClotheType } from '../types'

export const getAllClothes = async (): Promise<object> => {
  return await ClotheModel.find()
}

export const getClotheByID = async (id: string): Promise<object | null> => {
  return await ClotheModel.findOne({ _id: id })
}

export const postClothe = async (req: ClotheEntry): Promise<void> => {
  await ClotheModel.create(req)
}

export const getClothesByType = async (
  type: ClotheType
): Promise<object | null> => {
  return await ClotheModel.findByType(type)
}
