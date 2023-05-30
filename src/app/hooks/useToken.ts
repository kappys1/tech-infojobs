'use client'
import { useRouter } from 'next/navigation'
import useSWR from 'swr'
import { fetcher } from './useSWR'

export const useAuth = (code?: string | null) => {
  const router = useRouter()

  const handleSignOut = () => {
    window.sessionStorage?.removeItem('token')
    router.refresh()
  }

  const token = window.sessionStorage?.getItem('token') ?? ''
  const errorTokens = ['invalid_grant', 'invalid_token']

  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE}/api/auth?code=${code}`, fetcher)

  if (token) {
    return { token, loading: false, error: false, signOut: handleSignOut }
  }

  if (!isLoading) {
    if (error || (data && errorTokens.includes(data.error))) {
      return { token: undefined, loading: false, error: true, signOut: handleSignOut }
    }

    if (!code) router.replace('/')

    if (data) {
      window.sessionStorage?.setItem('token', data.access_token)
      // workaround to refresh the page
      setTimeout(() => {
        router.replace('/')
        router.refresh()
      }, 100)

      return { token: data, loading: false, error: false, signOut: handleSignOut }
    }
  }

  return { token: undefined, loading: isLoading, error, signOut: handleSignOut }
}
