// import Header from '@/components/common/header'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AdminLayout, MainLayout } from '@/components/layout'
import { Post, PostPage } from '@/models'

const baseUrl = process.env.API_URL

const Header = dynamic(() => import(`@/components/common/header`), {
  ssr: false,
})

export interface AboutProps {}

export default function About(props: AboutProps) {
  const [posts, setPosts] = useState<Post[]>()

  const router = useRouter()
  // console.log(router.query)

  const page = router.query?.page
  // console.log(page)

  useEffect(() => {
    ;(async () => {
      if (!page) return
      const response = await fetch(`${baseUrl}/api/posts?_page=${page}`)
      const data: PostPage = await response.json()

      setPosts(data.data)
    })()
  }, [page])

  const handleNextPage = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: Number(page) + 1 || 1,
        },
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <>
      <h1>Query router: {JSON.stringify(router.query)}</h1>
      <Header />
      <ul>
        {posts?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextPage}>Next page</button>
    </>
  )
}

About.Layout = AdminLayout

// export async function getServerSideProps() {
// 	return {
// 		props: {},
// 	}
// }
