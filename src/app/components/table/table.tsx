'use client'

import { Offer } from '@/app/model/offer'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CardOffer } from '../cardOffer/cardOffer.component'

export function ListOfOffers (props: { initOffers: Offer[] }, context: any) {
  const { initOffers } = props
  const [offers, setOffers] = useState(initOffers)
  const [page, setPage] = useState(1)
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  })

  useEffect(() => {
    setOffers(initOffers)
    setPage(1)
  }, [initOffers])

  useEffect(() => {
    if (inView) {
      const url = new URL(`${location.origin}/api/getOffers${location.search}`)
      url.searchParams.set('page', `${page + 1}`)
      void fetch(url.toString()).then(async (val: any) => {
        const res = await val.json()
        setOffers([...offers, ...res])
        setPage(page + 1)
      })
    }
  }, [inView])

  return (
    <ul className='max-w-2xl gap-8 flex flex-col justify-center self-center space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
      {offers.map((item, i) => (
        <div key={item.id} ref={ref}>
          <CardOffer
            key={item.id}
            offer={item}
          />
        </div>
      ))}
    </ul>
  )
}
