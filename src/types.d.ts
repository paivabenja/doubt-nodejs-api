export type ClotheType = 'pant' | 'hoodie' | 'shirt'

export interface ClotheSizes {
  's': number
  'm': number
  'l': number
  'xl': number
  '2xl': number
  '3xl': number
}

export interface ClotheEntry {
  id: number
  type: ClotheType
  sizes: ClotheSizes
  img_front: string
  img_back: string
}
