import { Facet } from '../model/filters'

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''

interface QueryParams {
  [key: string]: string
}

export async function getFilters (queryParams: QueryParams = {}) {
  const params = new URLSearchParams(queryParams)
  params.set('category', 'informatica-telecomunicaciones')
  params.set('maxResults', '1')
  params.set('facets', '1')
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

  const { facets }: { facets: Facet[] } = await res.json()

  const facetFiltered = facets.filter(facet => facet.key !== 'category')

  // add order
  facetFiltered.push({
    key: 'order',
    name: 'Ordenar por',
    values: [
      {
        key: 'relevancia-desc',
        value: 'Relevancia'
      },
      {
        key: 'updated-desc',
        value: 'Fecha de publicación'
      },
      {
        key: 'title-desc',
        value: 'Título'
      },
      {
        key: 'applicants-asc',
        value: 'Solicitantes a la oferta'
      },
      {
        key: 'city-desc',
        value: 'Ciudad'
      }
    ]

  })
  return facetFiltered
}
