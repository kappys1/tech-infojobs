/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @next/next/no-img-element */

import { Offer } from '@/app/model/offer'
import { differenceInDays, differenceInHours, formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'
import { useEffect, useRef } from 'react'

export const OfferTime = ({ offer }: { offer: Offer }) => {
  const isUpdated = offer.published !== offer.updated
  const date = isUpdated ? new Date(offer.updated) : new Date(offer.published)

  const isFrom1Day = differenceInDays(
    new Date(),
    date
  ) < 1
  const isLess5Days = differenceInHours(
    new Date(),
    date
  ) < 5
  const dateFormated = formatDistanceToNow(date, { locale: es })

  return (
    <span className={`flex gap-3 ${isFrom1Day ? 'text-green-400' : ''}`}>
      {dateFormated} {isUpdated && '(Publicada de nuevo)'} {!isUpdated && isLess5Days && <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>Nueva</span>}
    </span>
  )
}

export const CardOffer = ({ offer }: { offer: Offer }) => {
  const city = offer.city === offer.province ? offer.city : `${offer.city}, ${offer.province}`
  const location = useRef<Location>()
  useEffect(() => {
    location.current = window.location
  }, [])

  return (

    <div onClick={() => { location.current && (location.current.href = offer.link) }} className='flex flex-row items-center cursor-pointer min-h-[200px] max-h-[250px] bg-white border border-gray-200 rounded-lg shadow lg:w-full md:flex-row lg:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 '>
      <img className='object-cover w-24 h-24 md:w-36 md:h-36 ml-6 rounded-sm' src={offer.author?.logoUrl ?? '/none-logo.jpg'} alt='image author' />
      <div className='flex flex-col p-4 leading-normal w-full h-full grow md:self-start'>
        {offer.bold && <span className='w-[85px] text-center mb-2 bg-blue-infojobs-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-infojobs-500 dark:text-blue-infojobs-50'>Destacada</span>}
        <h2 className='mb-0 md:text-lg font-bold tracking-tight text-gray-700 dark:text-blue-infojobs-400'>{offer.title}</h2>
        <a className='mb-2 text-sm font-normal dark:text-gray-300 text-blue-infojobs-500 hover:underline' href={offer.author.uri}>{offer.author.name}</a>
        <p className=' text-xs font-normal text-gray-700 dark:text-gray-300 flex items-center gap-2'><span> {city} </span>  |  <span>{offer.teleworking}</span> | <OfferTime offer={offer} /> </p>
        <p className='mb-4 mt-4 text-sm font-normal dark:text-gray-300 text-gray-700 line-clamp-2'>{offer?.description ?? 'no description provided'}</p>
        <p className='align-bottom text-xs font-normal text-gray-700 dark:text-gray-300 flex items-center gap-3'><span>{offer.contractType} </span>  |  <span>Jornada {offer.workDay} </span> | {offer.salaryDescription} </p>
      </div>
    </div>

  )
}
