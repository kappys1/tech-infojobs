import { NextRequest, NextResponse } from 'next/server'

export async function GET (req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  if (!code) return new Response('code', { status: 400 })

  const url = new URL('https://www.infojobs.net/oauth/authorize')
  url.searchParams.set('grant_type', 'authorization_code')
  url.searchParams.set('client_id', `${process.env.NEXT_PUBLIC_CLIENT_ID}`)
  url.searchParams.set('client_secret', `${process.env.CLIENT_SECRET}`)
  url.searchParams.set('code', `${code}`)
  url.searchParams.set('redirect_uri', `${process.env.NEXT_PUBLIC_REDIRECT_URI}`)
  const res = await fetch(url, {
    method: 'POST'
  })
  const data = await res.json()
  return NextResponse.json(data)
}
