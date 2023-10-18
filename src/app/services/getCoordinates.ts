import fs from 'node:fs'
import path from 'node:path'
import { FacetLocation } from '../model/mapOffer'

export async function getCoordinates(city: FacetLocation) {
  const jsonDirectory = path.join(process.cwd(), 'src/app/services/json')
  const fileContents = fs.readFileSync(jsonDirectory + '/cache.json', {
    encoding: 'utf-8',
  })
  const cache: { [key: string]: { lat: number; lng: number } } =
    JSON.parse(fileContents)
  let cityKey = ''
  let cityFind = ''
  try {
    cityKey = `${city.country.key}-${city.province.key}-${city.city.key}`
    cityFind = `${city.country.value}, ${city.province.value}, ${city.city.key}`
  } catch (e) {
    console.log('city', city)
  }

  if (cache[cityKey]) return cache[cityKey]

  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${cityFind}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const { results } = await res.json()
  if (results[0]?.geometry?.location) {
    cache[cityKey] = results[0].geometry.location
  } else {
    cache[cityKey] = { lat: -1, lng: -1 }
  }

  fs.writeFileSync(jsonDirectory + '/cache.json', JSON.stringify(cache))

  return results[0]?.geometry?.location || {}
}
