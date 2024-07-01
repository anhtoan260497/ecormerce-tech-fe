import { IProductPromotion } from "./Promotion"

export interface IProductItem {
    name: string,
    image: string,
    truePrice: number,
    oldPrice?: number,
    smember?: {
        base: number,
        student: number
    },
    promotions?: IProductPromotion[]
}