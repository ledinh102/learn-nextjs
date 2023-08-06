import { MainLayout } from '@/components/layout'
import { WorkList } from '@/components/work'
import { useWorks } from '@/hooks'
import { ListPrams } from '@/models'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const [filter, setFilter] = useState<Partial<ListPrams>>({ _page: 1, _limit: 3 })
  const { data, isLoading } = useWorks({ params: filter })
  console.log({ data, isLoading })

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setFilter(prev => ({ ...prev, _page: value }))
  }

  return (
    <Container>
      <Box my={5}>
        <Typography component='h1' variant='h3' fontWeight='bold'>
          Work
        </Typography>
      </Box>

      <WorkList works={data?.data || []} loading={isLoading} />

      <Stack alignItems='center' mt={5}>
        <Pagination
          count={Math.ceil(data?.pagination._totalRows / data?.pagination._limit) || 0}
          shape='rounded'
          page={data?.pagination._page || 1}
          onChange={handleChangePage}
          size='large'
        />
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
