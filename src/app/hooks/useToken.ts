'use-client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AuthResponse, User } from '../model/auth'

export default function useAuth (code?: string | null) {
  const [token, setToken] = useState<string>(sessionStorage.getItem('token') ?? '')
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSignOut = () => {
    sessionStorage.removeItem('token')
    setToken('')
    setUser(undefined)
  }

  useEffect(() => {
    if (token) {
      setLoading(true)
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/getUser`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(async (res) => await res.json())
        .then((data) => { setUser(data) })
        .catch(() => sessionStorage.removeItem('token'))
        .finally(() => {
          setLoading(false)
        })
    }
  }, [token])

  useEffect(() => {
    const getToken = () => {
      setLoading(true)
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/auth?code=${code}`)
        .then(async (res) => await res.json())
        .then((data: AuthResponse) => {
          setToken(data.access_token)
          sessionStorage.setItem('token', data.access_token)
          setLoading(false)
        }).catch(() => {
          sessionStorage.removeItem('token')
        })
        .finally(() => {
          setLoading(false)
          router.replace('/')
        })
    }

    if (token) return router.replace('/')
    if (!code) return router.replace('/')
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getToken()
  }, [code, router])

  return { token, loading, user, signOut: handleSignOut }
}
