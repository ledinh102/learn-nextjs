import { LayoutProps } from '@/models'
import Link from 'next/link'
import { useEffect } from 'react'

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('mounting...')
		return () => {
			console.log('unmounting...')
		}
	}, [])
	return (
		<div>
			<h1>Main layout</h1>

			<Link href="/">Home</Link>
			<Link href="/about">About</Link>

			<div>{children}</div>
		</div>
	)
}
