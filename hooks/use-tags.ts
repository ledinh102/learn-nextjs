import { tagApi } from '@/api-client'
import { QueryKeys } from '@/constants'
import { ListParams } from '@/models'
import useSWR, { SWRConfiguration } from 'swr'

export interface UseTagsProps {
  params?: Partial<ListParams>
  options?: SWRConfiguration
}

export function useTags({ params = { _page: 1, _limit: 30 }, options }: UseTagsProps) {
  const swrResponse = useSWR([QueryKeys.GET_TAGS, params], () => tagApi.getAll(params), {
    dedupingInterval: 30 * 1000,
    keepPreviousData: true,
    fallbackData: {
      data: [],
      pagination: {
        _page: 1,
        _limit: 10,
        _totalRows: 0
      }
    },
    ...options
  })

  return swrResponse
}
