import { LayoutProps } from '@/models'
import { Box, Stack } from '@mui/material'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { Footer } from '../common'

const Header = dynamic(() => import('../common/header').then(mod => mod.Header), { ssr: false })

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <Header />

      <Box component='main' flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
