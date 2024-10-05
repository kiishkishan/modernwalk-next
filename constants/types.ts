// ******************************** Author : Kishanth S ********************************
// constants/types.ts

export type ClothingItemTypes = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: RatingTypes
}

type RatingTypes = {
  rate: number
  count: number
}
