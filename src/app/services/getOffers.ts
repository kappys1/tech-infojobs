import { APIResultOffer, Offer } from '../model/offer'
import { getDetailOffer } from './getDetailOffer'

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''
interface QueryParams {
  [key: string]: string
}

export async function getInfoJobsOffers ({ page = 1, queryParams }: { page: number, queryParams: QueryParams }) {
  const params = new URLSearchParams(queryParams)
  const url = `https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones&maxResults=10&page=${page}&${params.toString()}`
  console.log(url)
  const res = await fetch(
    url,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${infoJobsToken}`
      }
    }
  )

  const { items }: { items: APIResultOffer[] } = await res.json()

  if (!items) {
    return []
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

  return listOfOffers
}
