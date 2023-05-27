export interface Facet {
  key: string
  name: string
  values: Value[]
}

export interface FacetValue {
  key: string
  value: string
  count: number
}
