import { Facet } from '../model/filters'

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''

export async function getFilters (queryParams = {}) {
  const query = { q: Object.values(queryParams).join(', ') }
  const params = new URLSearchParams(query)

  const url = `https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones&maxResults=1&facets=1&${params.toString()}`
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

  const { facets }: { facets: Facet[] } = await res.json()

  const facetFiltered = facets.filter(facet => facet.key !== 'category')
  return facetFiltered
}
