import useSwr from 'swr'

const fetcher = async (url: string, config?: RequestInit) => await fetch(url, config).then(async res => await res.json())

export const useSWR = (url: string, config?: RequestInit) => useSwr(url, async (url) => await fetcher(url, config))
