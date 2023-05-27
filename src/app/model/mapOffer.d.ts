export interface MapOffer {
  city: City
  count: number
  country: string
  coordinates: Coordinates
}

export interface City {
  key: string
  value: string
  count: number
}

export interface Coordinates {
  lat?: number
  lng?: number
}
