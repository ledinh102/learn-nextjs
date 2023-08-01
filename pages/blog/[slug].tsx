import { Post } from '@/models'
import { getPosts } from '@/utils'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import { reporter } from 'vfile-reporter'
import { Container, Divider } from '@mui/material'
import { MainLayout } from '@/components/layout'
const baseUrl = process.env.API_URL

export interface BlogPageProps {
  post: Post
}

export default function BlogDetailPage({ post }: BlogPageProps) {
  if (!post) return null

  return (
    <Container>
      <h1>{post.title}</h1>

      <Divider />

      <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
    </Container>
  )
}

BlogDetailPage.Layout = MainLayout

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()

  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug

  const posts = await getPosts()
  const post = posts.find(post => post.slug === slug)
  console.log(post)

  if (!post) return { notFound: true }

  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '')

  post.htmlContent = file.toString()

  return {
    props: {
      post
    }
  }
}
