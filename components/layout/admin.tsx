import { LayoutProps } from '@/models'
import Link from 'next/link'
import { useEffect } from 'react'

export function AdminLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('mount')

    return () => {
      console.log('unmount')
    }
  })

  return (
    <div>
      <h1>Admin layout</h1>

      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>

      <div>{children}</div>
    </div>
  )
}
