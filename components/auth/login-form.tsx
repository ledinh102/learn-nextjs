import { LoginPayload } from '@/models'
import { yupResolver } from '@hookform/resolvers/yup'
import { VisibilityOff } from '@mui/icons-material'
import Visibility from '@mui/icons-material/Visibility'
import { Box, Button, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { InputField } from '../form'

export interface LoginFormProps {
  onSubmit: (payload: LoginPayload) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = yup.object().shape({
    username: yup.string().required('Please enter username').min(4, 'Username must be at least 4 characters'),
    password: yup.string().required('Please enter password').min(6, 'Password must be at least 6 characters')
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(schema)
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
