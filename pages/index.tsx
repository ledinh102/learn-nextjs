import { Seo } from '@/components/common'
import { FeaturedWorksSection, HeroSection, RecentPostsSection } from '@/components/home'
import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box>
      <Seo
        data={{
          title: 'NextJS Tutorials | Easy Frontend',
          description: 'Step by step tutorials to build a full CRUD website using NextJS for beginners.',
          url: `${process.env.HOST_URL}`,
          thumbnailUrl: 'https://res.cloudinary.com/dtsbsc6r6/image/upload/v1690794825/Rectangle_32_gmu9i7.jpg'
        }}
      />
      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
    </Box>
  )
}

Home.Layout = MainLayout
