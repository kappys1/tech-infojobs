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

  const { data, error, isLoading } = useSWR(code ? `/api/auth?code=${code}` : null, fetcher)

  if (token) {
    if (code) router.replace('/')
    return { token, loading: false, error: false, signOut: handleSignOut }
  }

  if (!isLoading) {
    if (error || (data && errorTokens.includes(data.error))) {
      return { token: undefined, loading: false, error: true, signOut: handleSignOut }
    }

    if (data) {
      window.sessionStorage?.setItem('token', data.access_token)
      // workaround to refresh the page
      router.replace('/')
      return { token: data, loading: false, error: false, signOut: handleSignOut }
    }
  }

  return { token: undefined, loading: isLoading, error, signOut: handleSignOut }
}
