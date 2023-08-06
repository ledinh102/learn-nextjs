import { MainLayout } from '@/components/layout'
import { WorkList } from '@/components/work'
import { useWorks } from '@/hooks'
import { ListPrams } from '@/models'
import { Box, Button, Stack, Typography } from '@mui/material'
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
    <Box>
      <Box>
        <Typography component='h1' variant='h3' fontWeight='bold'>
          Work
        </Typography>
      </Box>

      <WorkList works={data?.data || []} />

      <Stack spacing={2} direction='row' justifyContent='center' mt={3}>
        <Button variant='contained' onClick={handlePreviousPage}>
          Previous page
        </Button>
        <Button variant='contained' onClick={handleNextPage}>
          Next page
        </Button>
      </Stack>
    </Box>
  )
}

WorksPage.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: {}
  }
}
