import { APIOfferDetail } from '../model/offerDetail'
import { useSWR } from './useSWR'

export const useGetOffer = (id: string) => {
  const { data, error, isLoading } = useSWR('https://api.infojobs.net/api/7/api/getUser')

  return {
    offer: data as APIOfferDetail,
    isLoading,
    isError: error
  }
}
