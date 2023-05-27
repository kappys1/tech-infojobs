'use client'

import { Offer } from '@/app/model/offer'
import { CardOffer } from '../cardOffer/cardOffer.component'

export function ListOfOffers (props: {
  offers: Offer[]
}) {
  const { offers } = props

  const Offers = () => <>{offers.map(item => (<CardOffer key={item.id} offer={item} />))}</>
  return (

    <ul className='max-w-2xl gap-8 flex flex-col justify-center self-center space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
      <Offers />
    </ul>

  )
}
