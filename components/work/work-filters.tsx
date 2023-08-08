import { WorkFiltersPayload } from '@/models'
import { Search } from '@mui/icons-material'
import { Box, IconButton, InputAdornment, debounce } from '@mui/material'
import { useForm } from 'react-hook-form'
import { AutocompleteField, InputField } from '../form'
import { ChangeEvent } from 'react'
import { useTags } from '@/hooks'

export interface WorkFiltersProps {
  initialValues?: WorkFiltersPayload
  onSubmit?: (payload: WorkFiltersPayload) => void
}

export function WorkFilters({ initialValues, onSubmit }: WorkFiltersProps) {
  const { data } = useTags({})
  const tags = data?.data || []

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<WorkFiltersPayload>({
    defaultValues: {
      search: '',
      selectedTagList: [],
      ...initialValues
    }
  })

  const handleLoginSubmit = async (payload: WorkFiltersPayload) => {
    if (!payload) return

    console.log('form submit', payload)
    payload.tagList_like = payload.selectedTagList?.join('|') || ''
    delete payload.selectedTagList
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
      <AutocompleteField
        name='selectedTagList'
        label='Filter by category'
        placeholder='Categories'
        control={control}
        options={tags}
        getOptionLabel={option => option}
        isOptionEqualToValue={(option, value) => option === value}
        onChange={() => debounceSearchChange()}
      />
    </Box>
  )
}
