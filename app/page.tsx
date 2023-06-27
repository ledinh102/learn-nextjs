import { NextPage } from 'next'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<h1>Hello world</h1>
			<Link href="/posts">Go to posts</Link>
		</div>
	)
}
