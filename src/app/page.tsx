import { Card, Col, Grid, Text, Title } from '@tremor/react'
import mapOffersJson from '../db/mapOffers.json' assert { type: 'json' }

import Map from './components/map/map.component'
import { ListOfOffers } from './components/table/table'
import { getInfoJobsOffers } from './services/getOffers'

export default async function Home () {
  const listOfOffers = await getInfoJobsOffers()
  const mapOffers = mapOffersJson as any

  const points = mapOffers.map(city => ({
    type: 'Feature',
    properties: { cluster: false, coordinateId: `${city.city}-${city.province}`, category: `${city.city}-${city.province}`, count: city.count },
    geometry: {
      type: 'Point',
      coordinates: [
        city.coordinates.lng,
        city.coordinates.lat
      ]
    }
  }))

  return (
    <main className='flex flex-col justify-center self-center m-auto p-8 max-w-[1920px]'>
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <Grid numColsMd={10} className='mt-6 gap-6'>
        <Col numColSpanLg={6}>
          <ListOfOffers offers={listOfOffers} />
        </Col>
        {/* KPI sidebar */}
        <Col numColSpanLg={4} className='flex flex-col gap-4'>
          <Card>
            {/* <Map mapOffers={mapOffers}/> */}
            <Map mapOffers={mapOffers} points={points} />
          </Card>
        </Col>

      </Grid>
    </main>
  )
}
