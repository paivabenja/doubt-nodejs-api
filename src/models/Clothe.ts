import { ClotheEntry, ClotheSizes } from '../types'
import { prop, getModelForClass, ReturnModelType } from '@typegoose/typegoose'

class Clothe {
  @prop({ required: true, trim: true })
    name: string

  @prop({ required: true })
    price: number

  @prop({ required: true })
    type: ClotheEntry['type']

  @prop({ required: true })
    sizes: ClotheSizes

  @prop({ required: true })
    img_front: string

  @prop({ required: true })
    img_back: string

  static async findByType (
    this: ReturnModelType<typeof Clothe>,
    type: string
  ): Promise<object> {
    return await this.find({ type })
  }
}

const ClotheModel = getModelForClass(Clothe)

export default ClotheModel
