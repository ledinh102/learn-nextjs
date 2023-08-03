import { authApi } from '@/api-client'
import { LoginForm } from '@/components/auth'
import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  })

  const handleLoginClick = async () => {
    try {
      await login()
      console.log('redirect to dashboard')
      router.push('/about')
    } catch (error) {
      console.log('failed to login', error)
    }
  }
  // const handleGetProfileClick = async () => {
  //   try {
  //     await authApi.getProfile()
  //   } catch (error) {
  //     console.log('failed to get profile', error)
  //   }
  // }
  const handleLogoutClick = async () => {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <p>Profile: {JSON.stringify(profile)}</p>

      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
      <LoginForm />
    </div>
  )
}
