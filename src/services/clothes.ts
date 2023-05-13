import ClotheModel from '../models/Clothe'
import { ClotheEntry, ClotheType } from '../types'

export const getAllClothes = async (): Promise<object> => {
  const clths = await ClotheModel.find({}, { _id: 0 })
  return clths
}

export const getClotheByID = async (id: string): Promise<object | null> => {
  const clth = await ClotheModel.findOne({ _id: id })
  return clth
}

export const postClothe = async (req: ClotheEntry): Promise<void> => {
  const clth = await ClotheModel.create(req)
}

export const getClothesByType = async (type: ClotheType): Promise<object | null> => {
  const clths = await ClotheModel.find({}, { type })
  return clths
}
