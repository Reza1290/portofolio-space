import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(
    'https://pemrograman-tech.blogspot.com/feeds/posts/default?alt=json&max-results=3',
    { cache: 'no-store' }
  )

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch blogger' }, { status: 500 })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
