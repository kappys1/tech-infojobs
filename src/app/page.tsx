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
  const { listOfOffers, currentPage, totalPages, totalResults } = await getInfoJobsOffers(
    params
  )
  const { totalResults: allOffers } = await getInfoJobsOffers({
    page: '1',
    queryParams: {}
  })
  const mapOffers = await getMapOffers(params)

  const center = mapOffers.find(
    (val) => val.city.value === listOfOffers[0].city
  )

  return (
    <main className='flex flex-col justify-center self-center m-auto p-8 max-w-screen-2xl'>
      <section className=''>
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'>
          <h1 className=' mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-infojobs-500  md:text-5xl lg:text-6xl lg:leading-[1.2] dark:text-blue-infojobs-500'>
            Encuentra la oferta Tech que mas se adapte a tu perfil
          </h1>
          <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200' />
          <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-200'>
            Encontrarás todo tipo de ofertas del sector tecnológico que puedas imaginar <br />
            Actualmente tenemos {allOffers} listas para ti
          </p>
        </div>
        {/* workaround for scroll on refresh page */}
        <div id='ref-top' className='relative bottom-12 opacity-0'>top </div>
      </section>

      <nav className='sticky top-[4.3rem] z-10'>
        {/* @ts-expect-error Async Server Component */}
        <FilterNavBar context={context} />
      </nav>
      <section className='flex flex-col lg:flex-row mt-6 gap-5'>
        <aside className='w-full lg:w-1/2 order-1 lg:order-0'>
          <p className='block pb-8 pl-1 text-xl text-blue-infojobs-500 dark:text-blue-infojobs-400'>{totalResults} ofertas encontradas</p>
          <ListOfOffers
            initOffers={listOfOffers}
            page={currentPage}
            totalPages={totalPages}
            totalResults={totalResults}
          />
        </aside>
        <aside className='flex flex-col w-full lg:w-1/2 gap-5 order-0 lg:order-1'>
          <div className='sticky top-40 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            <Map mapOffers={mapOffers} center={center?.coordinates} />
          </div>
        </aside>
      </section>
    </main>
  )
}
