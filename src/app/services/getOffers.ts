import { APIOfferReturn, APIResultOffers, Offer } from '../model/offer'
import { getDetailOffer } from './getDetailOffer'

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''
export interface QueryParams {
  [key: string]: string
}

export async function getOffers (page = '1', queryParams: QueryParams = {}) {
  const params = new URLSearchParams(queryParams)
  params.set('category', 'informatica-telecomunicaciones')
  params.set('page', `${page}`)
  if (!params.has('maxResults')) {
    params.set('maxResults', '10')
  }
  const url = `https://api.infojobs.net/api/7/offer?${params.toString()}`

  const res = await fetch(
    url,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${infoJobsToken}`
      }
    }
  )

  const responseJson: APIResultOffers = await res.json()
  return responseJson
}

export async function getInfoJobsOffers ({ page = '1', queryParams }: { page: string, queryParams: QueryParams }): Promise<APIOfferReturn> {
  const { items, currentPage, totalPages, totalResults } = await getOffers(page, queryParams)
  if (!items) {
    return { currentPage: 0, listOfOffers: [] as any, totalPages: 0, totalResults: 0 }
  }
  const listOfOffers: Offer[] = await Promise.all(items.map(async (item) => {
    const detailOffer = await getDetailOffer(item.id)
    const {
      id,
      title,
      province,
      experienceMin,
      link,
      teleworking,
      city,
      salaryDescription,
      bold,
      workDay,
      contractType,
      applications,
      published,
      updated,
      urgent,
      author,
      requirementMin

    } = item

    return {
      id,
      title,
      province: province.value,
      city,
      published,
      bold,
      applications,
      urgent,
      workDay: workDay.value,
      experienceMin: experienceMin.value,
      link,
      contractType: contractType.value,
      updated,
      requirementMin,
      salaryDescription,
      teleworking: teleworking?.value ?? 'No especificado',
      author,
      description: detailOffer.description,
      highlights: detailOffer.highlights
    }
  }))

  return { listOfOffers, currentPage, totalPages, totalResults }
}
