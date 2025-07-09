// src/types/comic.ts
export interface Comic {
  _id: string
  title: string
  slug: { current: string }
  description: string
  price: number
  coverImage: string
  categories: string[]
  authors: string[]
  releaseDate: string
  stock: number
}
