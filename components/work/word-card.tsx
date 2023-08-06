import { Work } from '@/models'
import { Box, Chip, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import Image from 'next/image'

export interface WorkCardProps {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', md: '246px' }} flexShrink={0}>
        <Image
          src={work.thumbnailUrl}
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          width={246}
          height={180}
          alt='work thumbnail'
        />
      </Box>
      <Box>
        <Typography variant='h4' fontWeight='bold'>
          {work.title}
        </Typography>
        <Stack direction='row' spacing={3} mt={2}>
          <Chip color='secondary' label={format(work.updatedAt, 'yyyy')} size='small' />
          <Typography color='GrayText'>{work.tagList.join(', ')}</Typography>
        </Stack>
        <Typography mt={3}>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
