import { getPosts } from '@/utils'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'

const baseUrl = process.env.API_URL

export interface BlogsPageProps {
  posts: any
}

export default function BlogsPage({ posts }: BlogsPageProps) {
  console.log('posts', posts)
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
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}
