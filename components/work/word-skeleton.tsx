import { Box, Skeleton, Stack, Typography } from '@mui/material'

export function WorkSkeleton() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', md: '246px' }} flexShrink={0}>
        <Skeleton variant='rectangular' width={246} height={180} />
      </Box>
      <Box flexGrow={1}>
        <Typography variant='h4' fontWeight='bold'>
          <Skeleton />
        </Typography>
        <Stack direction='row' spacing={3} mt={2}>
          <Skeleton width={50} height={24} />
          <Typography flexGrow={1}>
            <Skeleton />
          </Typography>
        </Stack>
        <Typography mt={3}>
          <Skeleton />
          <Skeleton />
          <Skeleton width='40%' />
        </Typography>
      </Box>
    </Stack>
  )
}
