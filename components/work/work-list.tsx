import { Work } from '@/models'
import { Box, Divider, Stack } from '@mui/material'
import Image from 'next/image'
import { Fragment } from 'react'
import { WorkCard } from './word-card'
import { WorkSkeleton } from './word-skeleton'

export interface WorkListProps {
  works: Work[]
  loading: Boolean
}

export function WorkList({ works, loading }: WorkListProps) {
  if (loading) {
    return (
      <Box mt={3}>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Fragment key={idx}>
            <WorkSkeleton />
            {idx < works.length - 1 && <Divider sx={{ my: 3 }} />}
          </Fragment>
        ))}
      </Box>
    )
  }
  if (works.length === 0)
    return (
      <Stack alignItems='center' my={3}>
        <Image
          src='https://res.cloudinary.com/dtsbsc6r6/image/upload/v1691326222/nextjs-project/no-data.jpg'
          width={200}
          height={150}
          alt='no data'
        />
      </Stack>
    )
  return (
    <Box mt={3}>
      {works.map((work, idx) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          {idx < works.length - 1 && <Divider sx={{ my: 3 }} />}
        </Fragment>
      ))}
    </Box>
  )
}
