import { Pagination } from './common'
export interface Post {
	userId: string
	id: string
	title: string
	body: string
}

export interface PostPage {
	data: Post[]
	pagination: Pagination[]
}
