import { Post } from '@/models'
import { Card, CardContent, Typography, Stack } from '@mui/material'
import { format } from 'date-fns'
import { PostItem } from '../blog'

export interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  )
}
