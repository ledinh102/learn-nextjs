import { Box, CircularProgress } from '@mui/material'

export function CircleLoading() {
  return (
    <Box
      bgcolor='rgba(255, 255, 255, 0.7)'
      position='absolute'
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <CircularProgress size={100} />
    </Box>
  )
}
