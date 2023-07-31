import { Pagination } from './common'
export interface Post {
  id: string | number
  title: string
  publishedDate: number
  tagList: string[]
  description: string
}

export interface PostPage {
  data: Post[]
  pagination: Pagination[]
}
