import { useSWR } from './useSWR'
import { useAuth } from './useToken'

export const useUser = () => {
  const { token } = useAuth()

  const { data, error, isLoading } = useSWR(token ? `${process.env.NEXT_PUBLIC_API_BASE}/api/getUser` : '', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  return {
    user: data,
    isLoading,
    isError: error
  }
}
