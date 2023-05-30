import { DetailOffer } from '@/app/components/detailOffer/detaiOffer.component'
import { Map } from '@/app/components/map/map.component'
import { FacetLocation } from '@/app/model/mapOffer'
import { getCoordinates } from '@/app/services/getCoordinates'
import { getDetailOffer } from '@/app/services/getDetailOffer'
import { getFacetFromOffer } from './utils'

export default async function OfferPage ({ params }: any) {
  const offer = await getDetailOffer(params.id)

  const facet: FacetLocation = await getFacetFromOffer(offer)

  const coordinates = await getCoordinates(facet)
  const mapOffers = [{ ...facet, coordinates }]

  return (
    <main className='flex flex-col justify-center self-center m-auto p-8 max-w-screen-2xl'>
      <section className='flex flex-col lg:flex-row mt-6 gap-5'>
        <aside className='w-full lg:w-1/2 order-1 lg:order-0'>
          <DetailOffer offer={offer} />
        </aside>
        <aside className='flex flex-col w-full lg:w-1/2 gap-5 order-0 lg:order-1'>
          <div className='sticky top-40 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <Map mapOffers={mapOffers} center={coordinates} />
          </div>
        </aside>
      </section>
    </main>
  )
}
