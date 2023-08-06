import { MainLayout } from '@/components/layout'
import { CircleLoading } from '@/components/loading'
import { WorkList } from '@/components/work'
import { useWorks } from '@/hooks'
import { ListPrams } from '@/models'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const [filter, setFilter] = useState<Partial<ListPrams>>({ _page: 1, _limit: 3 })
  const { data, isLoading } = useWorks({ params: filter })
  console.log({ data, isLoading })

  const handleNextPage = () => {
    setFilter(prev => ({ ...prev, _page: (prev?._page || 0) + 1 }))
  }

  const handlePreviousPage = () => {
    setFilter(prev => ({ ...prev, _page: (prev?._page || 0) - 1 }))
  }

  return (
    <Container>
      <Box my={5}>
        <Typography component='h1' variant='h3' fontWeight='bold'>
          Work
        </Typography>
      </Box>

      <WorkList works={data?.data || []} loading={isLoading} />

      <Stack spacing={2} direction='row' justifyContent='center' mt={3}>
        <Button variant='contained' onClick={handlePreviousPage}>
          Previous page
        </Button>
        <Button variant='contained' onClick={handleNextPage}>
          Next page
        </Button>
      </Stack>
    </Container>
  )
}

WorksPage.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: {}
  }
}
