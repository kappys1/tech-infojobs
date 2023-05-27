import { OfferDetail } from '@/app/model/offerDetail'
import { getDetailOffer } from '@/app/services/getDetailOffer'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id == null) return new Response('Missing id', { status: 400 })

  const offer: OfferDetail = await getDetailOffer(id)

  try {
    return NextResponse.json(offer)
  } catch {
    return new Response('No se ha podido transformar el JSON', { status: 500 })
  }
}
