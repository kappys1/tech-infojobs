import useSWR from 'swr'
import { fetcher } from './useSWR'
import { useAuth } from './useToken'

export const useUser = () => {
  const { token } = useAuth()

  const { data, error, isLoading } = useSWR(token ? '/api/getUser' : null, async (url) => await fetcher(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }))

  return {
    user: data,
    isLoading,
    isError: error
  }
}
