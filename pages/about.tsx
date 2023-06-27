import { useRouter } from 'next/router'
import * as React from 'react'

export interface AboutProps {}

export default function About(props: AboutProps) {
	const router = useRouter()
	console.log(router.query)
	return (
		<>
			<h1>Query router: {JSON.stringify(router.query)}</h1>
		</>
	)
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
