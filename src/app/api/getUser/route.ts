import { NextRequest, NextResponse } from 'next/server'

const infoJobsToken = process.env.INFOJOBS_TOKEN ?? ''

export async function GET (req: NextRequest) {
  const authorization = req.headers.get('Authorization')
  if (!authorization) return new Response('code', { status: 400 })

  const url = new URL('https://api.infojobs.net/api/6/candidate')
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${infoJobsToken}, ${authorization}`
    }
  })
  const data = await res.json()
  return NextResponse.json(data)
}
