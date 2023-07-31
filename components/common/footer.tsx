import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material'
import { Box, Stack, Typography, Icon, Divider } from '@mui/material'

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/' },
    { icon: Instagram, url: 'https://www.instagram.com/' },
    { icon: Twitter, url: 'https://www.twitter.com/' },
    { icon: LinkedIn, url: 'https://www.linkedin.com/' }
  ]
  return (
    <Box component='footer' mt={10} pb={4} textAlign='center'>
      <Divider />
      <Stack direction='row' justifyContent='center' mt={4}>
        {socialLinks.map((item, idx) => (
          <Box key={idx} component='a' p={2} href={item.url} target='_blank' rel='noopener noreferrer'>
            <Icon component={item.icon} sx={{ fontSize: '48px', color: 'text.primary' }}></Icon>
          </Box>
        ))}
      </Stack>
      <Typography>Copyright © {new Date().getFullYear()} All rights reserved </Typography>
    </Box>
  )
}
