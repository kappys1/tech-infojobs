'use client'

import { Offer } from '@/app/model/offer'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CardOffer } from '../cardOffer/cardOffer.component'
import { CardOfferSkeleton } from '../cardOffer/cardOfferSkeleton.component'

export function ListOfOffers (
  props: { initOffers: Offer[], page: number, totalPages: number, totalResults: number }
) {
  const listRef = useRef(null)
  const { initOffers, page = 1, totalPages } = props
  const [offers, setOffers] = useState(initOffers)
  const [currentPage, setCurrentPage] = useState(page)
  const [allPages, setAllPages] = useState(totalPages)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })

  useEffect(() => {
    setOffers(initOffers)
    setCurrentPage(1)
    console.log('initOffers', initOffers)
  }, [initOffers])

  useEffect(() => {
    if (inView && currentPage + 1 < allPages) {
      const url = new URL(`${location.origin}/api/getOffers${location.search}`)
      url.searchParams.set('page', `${currentPage + 1}`)
      void fetch(url.toString()).then(async (val: any) => {
        const { listOfOffers, totalPages } = await val.json()
        setOffers([...offers, ...listOfOffers])
        setCurrentPage(currentPage + 1)
        setAllPages(totalPages)
        console.log('listOfOffers', listOfOffers)
      })
    }
  }, [inView])

  return (
    <div id='list'>
      <ul ref={listRef} className='w-full lg:max-w-2xl gap-8 flex flex-col justify-center self-center space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
        {offers.map((item, i) => (
          <CardOffer key={item.id} offer={item} />
        ))}
        {currentPage + 1 < allPages && (
          <div ref={ref} key='item-skeleton'>
            <CardOfferSkeleton />
          </div>
        )}
      </ul>
    </div>
  )
}
