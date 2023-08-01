import { Post } from '@/models'
import { Box, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import * as React from 'react'

export interface PostItemProps {
  post: Post
}

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography component='h3' variant='h5' fontWeight='bold'>
        {post.title}
      </Typography>
      <Stack spacing={3} direction='row' mt={2}>
        <Typography borderRight='1px solid' pr={3}>
          {format(new Date(post.publishedDate), 'dd MMM yyyy')}
        </Typography>
        <Typography>{post.tagList.join(', ')}</Typography>
      </Stack>
      <Typography mt={2}>{post.description}</Typography>
    </Box>
  )
}
