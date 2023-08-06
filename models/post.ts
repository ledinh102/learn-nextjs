import { Pagination } from './api'

export interface Author {
  name: string
  title: string
  profileUrl: string
  avatarUrl: string
}

export interface Post {
  id: string | number
  title: string
  publishedDate: number
  tagList: string[]
  description: string

  thumbnailUrl?: string
  slug: string
  author?: Author

  mdContent?: string
  htmlContent?: string
}

export interface PostPage {
  data: Post[]
  pagination: Pagination
}
