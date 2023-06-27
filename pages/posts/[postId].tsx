import { useRouter } from 'next/router'
import * as React from 'react'

export interface PostProps {}

export default function Post(props: PostProps) {
	const router = useRouter()
	return <h1>{JSON.stringify(router.query)}</h1>
}
