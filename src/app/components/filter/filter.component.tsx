
import { getFilters } from '@/app/services/getFilters'

import { DropdownComponent } from '../dropdown/dropdown.component'
export const FilterNavBar = async ({context}) => {
  console.log(context)
  const filters = await getFilters(context.searchParams)

  return (
    <div className='max-w-screen-2xl mx-auto w-full'>
      <div className='relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg'>
        <div className='flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
          <div className='flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3'>
            <div className='flex flex-wrap items-center w-full space-x-3 md:w-auto'>
              {filters.map(filter => (
                <DropdownComponent label={filter.name} key={`filter-${filter.key}`} facet={filter} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
