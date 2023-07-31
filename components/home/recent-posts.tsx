import { Post } from '@/models'
import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material'
import NextLink from 'next/link'
import { PostCard } from './post-card'
export interface RecentPostsSectionProps {}

export function RecentPostsSection(props: RecentPostsSectionProps) {
  const posts: Post[] = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      publishedDate: 1390776056149,
      tagList: ['Design', 'Pattern'],
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      publishedDate: 1620776056149,
      tagList: ['Figma', 'Icon Design'],
    },
  ]
  return (
    <Box sx={{ bgcolor: 'secondary.light' }} component='section'>
      <Container>
        <Stack direction='row' justifyContent={{ xs: 'center', md: 'space-between' }} alignItems='center' py={3}>
          <Typography variant='h5' component='h2'>
            Recent Posts
          </Typography>
          <MuiLink
            display={{ xs: 'none', md: 'block' }}
            component={NextLink}
            href='/blog'
            color='secondary.main'
            passHref
          >
            View all
          </MuiLink>
        </Stack>
        <Stack spacing={2.5} direction={{ xs: 'column', md: 'row' }} pb={4}>
          {posts.map(post => (
            <Box key={post.id} bgcolor='white'>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
