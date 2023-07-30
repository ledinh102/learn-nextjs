import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import { ROUTE_lIST } from './routes'
import NextLink from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter()

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction='row' justifyContent='flex-end'>
          {ROUTE_lIST.map(route => (
            <MuiLink
              className={clsx({ active: router.pathname === route.path })}
              fontWeight='medium'
              sx={{ ml: 2 }}
              key={route.path}
              component={NextLink}
              href={route.path}
            >
              {route.label}
            </MuiLink>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
