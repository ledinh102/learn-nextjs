import * as React from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import styles from './Posts.module.scss'
import { Pagination, Post, PostPage } from '@/models'

const baseUrl = process.env.API_URL

export interface PostsProps {
  postPage: {
    data: Post[]
    pagination: Pagination[]
  }
}

export default function Posts({ postPage }: PostsProps) {
  return (
    <>
      <h1>Hello posts page</h1>

      <ul>
        {postPage.data.map(post => (
          <li className={styles.item} key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <Link href='/'>Go to Homepage</Link>
    </>
  )
}

// export const getStaticProps: GetStaticProps<PostsProps> = async (context: GetStaticPropsContext) => {
//   const response = await fetch(`${baseUrl}/api/posts?_page=1`)
//   const postPage: PostPage = await response.json()

//   return {
//     props: {
//       postPage,
//     },
//   }
// }
