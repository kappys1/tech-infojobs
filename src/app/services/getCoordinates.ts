import { GeoCoding } from "../model/geocoding";
import { cache } from "./cache";

export async function getCoordinates (city: string) {
    if(cache[city]) return cache[city]

    const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    )
    const { results }: {results: GeoCoding[]} = await res.json()
    if(results[0]?.geometry?.location) cache[city] = results[0].geometry.location
    console.log(cache);
    return results[0]?.geometry?.location || {}
}