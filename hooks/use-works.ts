import { workApi } from '@/api-client'
import { QueryKeys } from '@/constants'
import { ListPrams } from '@/models'
import useSWR, { SWRConfiguration } from 'swr'

export interface UseWorksProps {
  params: Partial<ListPrams>
  options?: SWRConfiguration
}

export function useWorks({ params, options }: UseWorksProps) {
  const swrResponse = useSWR([QueryKeys.GET_WORKS, params], () => workApi.getAll(params), {
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