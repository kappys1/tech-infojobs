import { Dictionary } from '../model/dictionary'
import { FacetValue } from '../model/filters'
import { MapOffer } from '../model/mapOffer'
import { getCoordinates } from './getCoordinates'
import { getDictionary } from './getDictionary'
import { getOffers } from './getOffers'

interface QueryParams {
  [key: string]: string
}

interface FacetLocation {
  city: Dictionary
  province: Dictionary
  country: Dictionary
  count: number
}

export const getMapOffers = async ({ page = '1', queryParams = {} }: { page?: string, queryParams: QueryParams }) => {
  queryParams.facets = '1'
  queryParams.maxResults = '1'
  const { facets = [] } = await getOffers(page, queryParams)

  const facetsCity = facets.filter(facet => facet.key === 'city')[0].values

  const countryDict = getDictionary('country')
  const provinceDict = getDictionary('province')
  const cityDict = getDictionary('city')

  const facetsLocations = facetsCity.map((facetCity: FacetValue) => {
    const city = cityDict.find(city => city.key === facetCity.key)
    const province = provinceDict.find(province => province.id === city?.parent)
    const country = countryDict.find(country => country.id === province?.parent)

    return { city, province, country, count: facetCity.count }
  }) || []

  const facetsLocationsFiltered = facetsLocations.filter((facet: FacetLocation) => facet.city && facet.province && facet.country)

  const coordinates = await Promise.all(
    facetsLocationsFiltered.map(async (facet: FacetLocation) => {
      const coordinates = await getCoordinates(facet)
      return { ...facet, coordinates }
    })
  )

  const offers: MapOffer[] = coordinates.flat()

  return offers
}
