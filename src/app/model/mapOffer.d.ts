import { Dictionary } from './dictionary'

export interface MapOffer extends FacetLocation {
  coordinates: Coordinates
}

export interface Coordinates {
  lat?: number
  lng?: number
}

interface FacetLocation {
  city: Dictionary
  province: Dictionary
  country: Dictionary
  count: number
}
