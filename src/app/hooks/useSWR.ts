import useSwr from 'swr'

const fetcher = async (...rest: any) => await fetch({ ...rest }).then(async res => await res.json())

export const useSWR = (url: string, config?: RequestInit) => useSwr(url, async (url) => await fetcher(url, config))
