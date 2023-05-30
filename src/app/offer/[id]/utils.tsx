import { FacetLocation } from '@/app/model/mapOffer'
import { APIOfferDetail } from '@/app/model/offerDetail'
import { getDictionary } from '@/app/services/getDictionary'

export const getFacetFromOffer = (offer: APIOfferDetail): FacetLocation => {
  const cityDictionary = getDictionary('city')
  const provinceDictionary = getDictionary('province')
  const countryDictionary = getDictionary('country')

  const city = cityDictionary.find((c) => c.value === offer.city)
  const province = provinceDictionary.find((p) => p.id === offer.province.id)
  const country = countryDictionary.find((c) => c.id === offer.country.id)

  return {
    city,
    province,
    country,
    count: 1
  } as FacetLocation
}
