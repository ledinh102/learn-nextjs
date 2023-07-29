import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href='/posts'>Go to posts</Link>
    </div>
  )
}

Home.Layout = MainLayout
