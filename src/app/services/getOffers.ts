import { APIResultOffer, Offer } from '../model/offer';

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''

export async function getAllInfoJobsOffers (page:number = 1, result: APIResultOffer[] =[]): Promise<APIResultOffer[]> {
  const res = await fetch(
    `https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones&order=updated&maxResults=100&page=${page}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${infoJobsToken}`
      }
    }
  )

  const { items, currentPage, totalPages }: { items: APIResultOffer[], currentPage: number, totalPages:number } = await res.json()
  // console.log(currentPage, totalPages)
  // if(currentPage < totalPages) {
  //   return getAllInfoJobsOffers( currentPage + 1, [...result, ...items])
  // }
  return [...result, ...items]
}

export async function getInfoJobsOffers () {
 
  const items: APIResultOffer[] = await getAllInfoJobsOffers()
  
  const listOfOffers: Offer[] = items.map((item) => {
    const { id, title, province, experienceMin, link, teleworking, city, salaryDescription, author } = item

    return {
      id,
      title,
      province: province.value,
      city,
      experienceMin: experienceMin.value,
      link,
      salaryDescription,
      teleworking: teleworking?.value ?? 'No especificado',
      author
    }
  })

  return listOfOffers
}
