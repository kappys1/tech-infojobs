'use client'
import { useRouter } from 'next/navigation'
import { useSWR } from './useSWR'

export const useAuth = (code?: string | null) => {
  // const [token, setToken] = useState<string>(sessionStorage.getItem('token') ?? '')
  // const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSignOut = () => {
    sessionStorage.removeItem('token')
    router.refresh()
    // setToken('')
  }

  // useEffect(() => {
  //   const getToken = () => {
  //     setLoading(true)
  //     fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/auth?code=${code}`)
  //       .then(async (res) => await res.json())
  //       .then((data: AuthResponse) => {
  //         setToken(data.access_token)
  //         sessionStorage.setItem('token', data.access_token)
  //         setLoading(false)
  //       }).catch(() => {
  //         sessionStorage.removeItem('token')
  //       })
  //       .finally(() => {
  //         setLoading(false)
  //         router.replace('/')
  //       })
  //   }
  // }, [code, router])

  // if (token) return router.replace('/')
  // if (!code) return router.replace('/')
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  // getToken()

  const token = sessionStorage.getItem('token') ?? ''
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
      sessionStorage.setItem('token', data.access_token)
      router.replace('/')
      router.refresh()
      return { token: data, loading: false, error: false, signOut: handleSignOut }
    }
  }

  // router.replace('/')
  return { token: undefined, loading: isLoading, error, signOut: handleSignOut }
}
