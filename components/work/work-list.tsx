import { Work } from '@/models'
import { Box, Divider } from '@mui/material'
import { Fragment } from 'react'
import { WorkCard } from './word-card'

export interface WorkListProps {
  works: Work[]
}

export function WorkList({ works }: WorkListProps) {
  if (works.length === 0) return null
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
