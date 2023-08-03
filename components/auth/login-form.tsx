import { VisibilityOff } from '@mui/icons-material'
import Visibility from '@mui/icons-material/Visibility'
import { Box, Button, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import { LoginPayload } from '@/models'

export interface LoginFormProps {
  onSubmit: (payload: LoginPayload) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const handleLoginSubmit = (payload: LoginPayload) => {
    console.log(payload)
    onSubmit?.(payload)
  }

  return (
    <Box component='form' onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name='username' control={control} />
      <InputField
        type={showPassword ? 'text' : 'password'}
        name='password'
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <Button type='submit' variant='contained'>
        Submit form
      </Button>
    </Box>
  )
}
