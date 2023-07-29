import { LayoutProps } from '@/models'
import Link from 'next/link'
import { useEffect } from 'react'
import { Auth } from '../common'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter()
  const { logout } = useAuth()

  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
      router.push('/login')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <Auth>
      <h1>Admin layout</h1>

      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>

      <button onClick={handleLogoutClick}>Logout</button>

      <div>{children}</div>
    </Auth>
  )
}
