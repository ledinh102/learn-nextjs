import { WorkFiltersPayload } from '@/models'
import { Search } from '@mui/icons-material'
import { Box, IconButton, InputAdornment, debounce } from '@mui/material'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import { ChangeEvent } from 'react'

export interface WorkFiltersProps {
  onSubmit: (payload: WorkFiltersPayload) => void
}

export function WorkFilters({ onSubmit }: WorkFiltersProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<WorkFiltersPayload>({
    defaultValues: {
      search: ''
    }
  })

  const handleLoginSubmit = async (payload: WorkFiltersPayload) => {
    console.log('form submit', payload)
    await onSubmit?.(payload)
  }

  const debounceSearchChange = debounce(handleSubmit(handleLoginSubmit), 1000)

  return (
    <Box component='form' onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField
        label='Search'
        name='search'
        placeholder='Search work by title'
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton edge='end'>
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          console.log('change', event.target.value)
          debounceSearchChange()
        }}
      />
    </Box>
  )
}
