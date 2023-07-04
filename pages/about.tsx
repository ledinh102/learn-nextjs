// import Header from '@/components/common/header'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Post } from './posts/[postId]'
import { AdminLayout, MainLayout } from '@/components/layout'

const Header = dynamic(() => import(`@/components/common/header`), {
	ssr: false,
})

export interface AboutProps {}

export default function About(props: AboutProps) {
	const [post, setPost] = useState<Post>()

	const router = useRouter()
	// console.log(router.query)

	const page = router.query.page

	useEffect(() => {
		;(async () => {
			if (!page) return
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${page}`
			)
			const post: Post = await response.json()

			setPost(post)
		})()
	}, [page])

	const handleNextPage = () => {
		router.push(
			{
				pathname: '/about',
				query: {
					page: page ? Number(page) + 1 : 1,
				},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<>
			<h1>Query router: {JSON.stringify(router.query)}</h1>
			<Header />
			<p>{post?.title}</p>
			<button onClick={handleNextPage}>Next page</button>
		</>
	)
}

About.Layout = AdminLayout

// export async function getServerSideProps() {
// 	return {
// 		props: {},
// 	}
// }
