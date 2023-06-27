import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export interface PostProps {
	post: Post
}

export default function Post({ post }: PostProps) {
	// const router = useRouter()
	return (
		<>
			<p>User id: {post.userId}</p>
			<p>Id: {post.id}</p>
			<p>Title: {post.title}</p>
			<p>Body: {post.body}</p>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts')
	const posts: Post[] = await response.json()
	const paths = posts.map((post) => ({
		params: { postId: post.id.toString() },
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<PostProps> = async (
	context: GetStaticPropsContext
) => {
	const postId = context.params?.postId

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	)
	const post: Post = await response.json()
	console.log(post)

	return {
		props: {
			post,
		},
	}
}
