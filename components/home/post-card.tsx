import { Post } from '@/models'
import { Card, CardContent, Typography, Stack } from '@mui/material'
import { format } from 'date-fns'

export interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography component='h3' variant='h5' fontWeight='bold'>
          {post.title}
        </Typography>
        <Stack spacing={3} direction='row' mt={2}>
          <Typography borderRight='1px solid' pr={3}>
            {format(post.publishedDate, 'dd MMM yyyy')}
          </Typography>
          <Typography>{post.tagList.join(', ')}</Typography>
        </Stack>
        <Typography mt={2}>{post.description}</Typography>
      </CardContent>
    </Card>
  )
}
