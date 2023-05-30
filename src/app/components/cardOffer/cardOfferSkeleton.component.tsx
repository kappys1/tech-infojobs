/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @next/next/no-img-element */

export const CardOfferSkeleton = () => {
  return (
    <div role='status' className='max-w-sm animate-pulse flex flex-row items-center cursor-pointer min-h-[200px] max-h-[250px] bg-white border border-gray-200 rounded-lg shadow lg:w-full md:flex-row lg:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 '>
      <img className='object-cover w-24 h-24 md:w-36 md:h-36 ml-6 rounded-sm' src='/none-logo.jpg' alt='image author' />
      <div className='flex flex-col p-4 leading-normal w-full h-full grow md:self-start'>
        <div className='mt-3 h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4' />
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px] mb-4' />
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-500 mb-2.5' />
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[330px] mb-2.5' />
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[300px] mb-2.5' />
        <div className='h-3 bg-gray-200 rounded-full dark:bg-gray-500 max-w-[360px]' />
      </div>
    </div>
  )
}
