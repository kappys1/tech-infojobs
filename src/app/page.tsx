
import { FilterNavBar } from './components/filter/filter.component'
import { ListOfOffers } from './components/listOffers/listOffers'
import { Map } from './components/map/map.component'
import { getMapOffers } from './services/getMapOffers'
import { getInfoJobsOffers } from './services/getOffers'

export default async function Home (context: any) {
  const params = {
    queryParams: context.searchParams,
    page: '1'
  }
  const { listOfOffers, currentPage, totalPages, totalResults } = await getInfoJobsOffers(params)
  const mapOffers = await getMapOffers(params)

  const center = mapOffers.find(val => val.city.value === listOfOffers[0].city)

  return (
    <main className='flex flex-col justify-center self-center m-auto p-8 max-w-screen-2xl'>
      <nav className='sticky top-[4.3rem] z-10'><FilterNavBar context={context} /></nav>
      <section className='grid grid-cols-10 mt-6 gap-5'>
        <div className=' col-span-10 lg:col-span-5 order-1 lg:order-0'>
          <ListOfOffers initOffers={listOfOffers} page={currentPage} totalPages={totalPages} />
        </div>
        <div className='flex flex-col col-span-10 lg:col-span-5 gap-5 order-0 lg:order-1'>
          <div className='sticky top-40 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <Map mapOffers={mapOffers} center={center?.coordinates} />
          </div>
        </div>
      </section>
    </main>
  )
}
