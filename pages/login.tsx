import { authApi } from '@/api'

export default function LoginPage() {
  const handleLoginClick = async () => {
    try {
      await authApi.login({
        username: 'test',
        password: '1231231',
      })
    } catch (error) {
      console.log('failed to login', error)
    }
  }
  const handleGetProfileClick = async () => {
    try {
      const profile = await authApi.getProfile()
      console.log('profile', profile)
    } catch (error) {
      console.log('failed to get profile', error)
    }
  }
  const handleLogoutClick = async () => {
    try {
      await authApi.logout()
    } catch (error) {
      console.log('failed to logout', error)
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  )
}
