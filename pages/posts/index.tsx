import * as React from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { Post } from './[postId]'
import styles from './posts.module.scss'

export interface PostsProps {
	posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
	return (
		<>
			<h1>Hello posts page</h1>

			<ul>
				{posts.map((post) => (
					<li className={styles.item} key={post.id}>
						<Link href={`/posts/${post.id}`}>{post.title}</Link>
					</li>
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
	const posts: Post[] = await response.json()
	// console.log(posts)

	return {
		props: {
			posts,
		},
	}
}
