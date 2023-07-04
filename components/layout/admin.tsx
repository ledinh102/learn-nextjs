import { LayoutProps } from '@/models'
import Link from 'next/link'

export function AdminLayout({ children }: LayoutProps) {
	return (
		<div>
			<h1>Admin layout</h1>

			<Link href="/">Home</Link>
			<Link href="/about">About</Link>

			<div>{children}</div>
		</div>
	)
}
