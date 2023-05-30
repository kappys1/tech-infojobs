import { getInfoJobsOffers } from '@/app/services/getOffers'
import { NextResponse } from 'next/server'

export async function GET (request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')
  const entriesParams = searchParams.entries()
  const queryParams = Object.fromEntries(entriesParams)
  if (page == null) return new Response('Missing page', { status: 400 })

  searchParams.delete('page')
  const offer = await getInfoJobsOffers({ page, queryParams })

  try {
    return NextResponse.json(offer)
  } catch {
    return new Response('No se ha podido transformar el JSON', { status: 500 })
  }
}
