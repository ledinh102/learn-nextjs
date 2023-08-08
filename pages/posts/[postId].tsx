import { Post } from '@/models'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

const baseUrl = process.env.API_URL

export interface PostProps {
  post: Post
}

export default function Post({ post }: PostProps) {
  // const router = useRouter()

  // if (router.isFallback) return <h2>Loading...</h2>
  // if (!post) return null

  return (
    <>
      {/* <p>Id: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.description}</p>
      <p>Created by: </p> */}
    </>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const response = await fetch(`${baseUrl}/api/posts?_page=1`)
//   const data = await response.json()
//   const posts: Post[] = data.data
//   const paths = posts.map(post => ({
//     params: { postId: String(post.id) }
//   }))

//   return {
//     paths,
//     fallback: true
//   }
// }

// export const getStaticProps: GetStaticProps<PostProps> = async (context: GetStaticPropsContext) => {
//   const postId = context.params?.postId

//   const response = await fetch(`${baseUrl}/api/posts/${postId}`)

//   const post: Post = await response.json()
//   console.log(post)
//   if (!post?.id) return { notFound: true }

//   return {
//     props: {
//       post
//     },
//     revalidate: 5
//   }
// }
