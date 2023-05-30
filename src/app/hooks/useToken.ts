'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useSWR } from './useSWR'

export const useAuth = (code?: string | null) => {
  const router = useRouter()
  const sessionStorage = useRef<Storage>()

  const handleSignOut = () => {
    sessionStorage.current?.removeItem('token')
    router.refresh()
  }

  useEffect(() => {
    sessionStorage.current = window.sessionStorage
  }, [])

  const token = sessionStorage.current?.getItem('token') ?? ''
  const errorTokens = ['invalid_grant', 'invalid_token']
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE}/api/auth?code=${code}`)

  if (token) {
    return { token, loading: false, error: false, signOut: handleSignOut }
  }

  if (!isLoading) {
    if (error || (data && errorTokens.includes(data.error))) {
      return { token: undefined, loading: false, error: true, signOut: handleSignOut }
    }

    if (!code) router.replace('/')

    if (data) {
      sessionStorage.current?.setItem('token', data.access_token)
      router.replace('/')
      router.refresh()
      return { token: data, loading: false, error: false, signOut: handleSignOut }
    }
  }

  // router.replace('/')
  return { token: undefined, loading: isLoading, error, signOut: handleSignOut }
}
