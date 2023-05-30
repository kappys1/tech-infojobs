import { APIOfferDetail } from '../model/offerDetail'

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''

export async function getDetailOffer (id = '') {
  const res = await fetch(
    `https://api.infojobs.net/api/7/offer/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${infoJobsToken}`
      }
    }
  )

  const item: APIOfferDetail = await res.json()

  return item
}
