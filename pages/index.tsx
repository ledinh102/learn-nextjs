import { MainLayout } from '@/components/layout'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <Box>Home page</Box>
}

Home.Layout = MainLayout
