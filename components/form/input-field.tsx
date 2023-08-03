import { Box, TextField, TextFieldProps } from '@mui/material'
import { Control, useController } from 'react-hook-form'

export type InputFieldProps = TextFieldProps & {
  name: string
  control: Control<any>
}

export function InputField({ name, label, control, ...rest }: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control
  })

  return (
    <TextField
      fullWidth
      size='small'
      margin='normal'
      name={name}
      value={value}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...rest}
    />
  )
}
