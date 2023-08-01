import { PostItem } from '@/components/blog'
import { MainLayout } from '@/components/layout'
import { Post } from '@/models'
import { getPosts } from '@/utils'
import styled from '@emotion/styled'
import { Box, Container, Divider, Link as MuiLink, Typography } from '@mui/material'
import { GetStaticProps, GetStaticPropsContext } from 'next'

const baseUrl = process.env.API_URL

export interface BlogsPageProps {
  posts: Post[]
}

const MuiLinkCustom = styled(MuiLink)(({ theme }) => ({
  '&:hover': {
    color: 'inherit'
  }
}))

export default function BlogsPage({ posts }: BlogsPageProps) {
  console.log('posts', posts)
  return (
    <Container>
      <Typography variant='h4' fontWeight='bold' mt={4} mb={3} component='h1'>
        Blog
      </Typography>
      <Box component='ul' sx={{ listStyle: 'none', p: 0 }}>
        {posts.map(post => (
          <li key={post.id}>
            <MuiLinkCustom href={`/posts/${post.slug}`}>
              <PostItem post={post} />
            </MuiLinkCustom>
            <Divider sx={{ my: 3 }} />{' '}
          </li>
        ))}
      </Box>
    </Container>
  )
}

BlogsPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<BlogsPageProps> = async (context: GetStaticPropsContext) => {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}
