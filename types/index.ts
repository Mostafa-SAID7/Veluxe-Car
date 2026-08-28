export type Car = {
  brand: string
  model: string
  image: string
  passengers: number
  rating: number
  year: string
  transmission: string
  fuel: string
  price: string
}

export type Review = {
  name: string
  stars: number
  text: string
  active: boolean
}

export type FAQ = {
  num: string
  q: string
  bold: string
  answer: string
}
