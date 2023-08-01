import { getPosts } from '@/utils'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'

const baseUrl = process.env.API_URL

export interface BlogsPageProps {
  posts: any
}

export default function BlogsPage({ posts }: BlogsPageProps) {
  return (
    <>
      <h1>Hello blogs page</h1>

      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Link href='/'>Go to Homepage</Link>
    </>
  )
}

export const getStaticProps: GetStaticProps<BlogsPageProps> = async (context: GetStaticPropsContext) => {
  // const response = await fetch(`${baseUrl}/api/posts?_page=1`)
  // const postPage: PostPage = await response.json()
  const data = await getPosts()

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title }))
    }
  }
}
