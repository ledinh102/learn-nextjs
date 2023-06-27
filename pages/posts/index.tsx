import * as React from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPropsContext } from 'next'

interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export interface PostsProps {
	posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
	return (
		<>
			<h1>Hello posts page</h1>

			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>

			<Link href="/">Go to Homepage</Link>
		</>
	)
}

export const getStaticProps: GetStaticProps<PostsProps> = async (
	context: GetStaticPropsContext
) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data: Post[] = await response.json()
	console.log(data)

	return {
		props: {
			posts: data,
		},
	}
}
