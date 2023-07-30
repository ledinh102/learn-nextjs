import { LayoutProps } from '@/models'
import { Box, Container, Stack } from '@mui/material'
import Link from 'next/link'
import { useEffect } from 'react'
import { Footer, Header } from '../common'

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('mounting...')

    return () => {
      console.log('unmounting...')
    }
  }, [])
  return (
    <Stack minHeight='100vh'>
      <Header />

      <Box component='main' flexGrow={1}>
        <Container>container</Container>
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/works'>Works</Link>
        {children}
      </Box>

      <Footer />
    </Stack>
  )
}
