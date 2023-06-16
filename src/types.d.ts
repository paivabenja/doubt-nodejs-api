import { ObjectId } from 'mongodb'

export interface ClotheSizes {
  's': number
  'm': number
  'l': number
  'xl': number
  '2xl': number
  '3xl': number
}

export interface ClotheEntry {
  _id: ObjectId
  type: 'pant' | 'hoodie' | 'shirt'
  sizes: ClotheSizes
  img_front: string
  img_back: string
}
