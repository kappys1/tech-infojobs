import { APIOfferDetail } from '../model/offerDetail'
import { useSWR } from './useSWR'

export const useGetOffer = (id: string) => {
  const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE}/api/getUser`)

  return {
    offer: data as APIOfferDetail,
    isLoading,
    isError: error
  }
}
