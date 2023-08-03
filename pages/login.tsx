import { authApi } from '@/api-client'
import { LoginForm } from '@/components/auth'
import { useAuth } from '@/hooks'
import { LoginPayload } from '@/models'
import { Box, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false
  })

  const handleLoginClick = async (payload: LoginPayload) => {
    try {
      await login(payload)
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

  const handleLoginSubmit = async (payload: LoginPayload) => {
    try {
      await login(payload)
      console.log('redirect to dashboard')
      router.push('/')
    } catch (error) {
      console.log('failed to login', error)
    }
  }

  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          mx: 'auto',
          mt: 20,
          p: 4,
          maxWidth: '480px',
          textAlign: 'center'
        }}
      >
        <Typography component='h1' variant='h5' mb={2}>
          Login
        </Typography>

        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>
    </Box>
  )
}
