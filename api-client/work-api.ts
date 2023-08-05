import { axiosClient } from './axios-client'
import { ListPrams, ListResponse, LoginPayload, Work } from '@/models'

export const workApi = {
  getAll(params: Partial<ListPrams>): Promise<ListResponse<Work>> {
    return axiosClient.get('/works', { params })
  },
  get(id: string): Promise<Work> {
    return axiosClient.get(`/works/${id}`)
  }
}
