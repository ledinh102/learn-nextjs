import { useAuth } from '@/hooks'
import { Box, Container, Link as MuiLink, Stack } from '@mui/material'
import clsx from 'clsx'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ROUTE_lIST } from './routes'
export interface HeaderDesktopProps {}

export default function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter()
  const { profile, logout } = useAuth()
  const isLoggedIn = Boolean(profile?.username)

  const routes = ROUTE_lIST.filter(route => !route.requireLogin || isLoggedIn)

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction='row' justifyContent='flex-end'>
          {routes.map(route => (
            <MuiLink
              className={clsx({
                active: route.path === '/' ? router.pathname === '/' : router.pathname.startsWith(route.path)
              })}
              fontWeight='medium'
              sx={{ ml: 2 }}
              key={route.path}
              component={NextLink}
              href={route.path}
            >
              {route.label}
            </MuiLink>
          ))}

          {!isLoggedIn ? (
            <MuiLink fontWeight='medium' sx={{ ml: 2 }} component={NextLink} href='/login'>
              Login
            </MuiLink>
          ) : (
            <MuiLink fontWeight='medium' sx={{ ml: 2, cursor: 'pointer' }} onClick={logout}>
              Logout
            </MuiLink>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
