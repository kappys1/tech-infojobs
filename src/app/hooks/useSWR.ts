import useSwr from 'swr'

export const fetcher = async (url: string, config?: RequestInit) => await fetch(url, config).then(async res => await res.json())

export const useSWR = (url: any, config?: RequestInit) => useSwr(url, async (url: any) => await fetcher(url, config))
