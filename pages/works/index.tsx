import { MainLayout } from '@/components/layout'
import { WorkFilters, WorkList } from '@/components/work'
import { useWorks } from '@/hooks'
import { ListPrams, WorkFiltersPayload } from '@/models'
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

  const handleFiltersChange = (newFilters: WorkFiltersPayload) => {
    console.log('new filters', newFilters)
    setFilter(prev => ({ ...prev, _page: 1, title_like: newFilters.search }))
  }

  return (
    <Container>
      <Box my={5}>
        <Typography component='h1' variant='h3' fontWeight='bold'>
          Work
        </Typography>
      </Box>

      <WorkFilters onSubmit={handleFiltersChange} />

      <WorkList works={data?.data || []} loading={isLoading} />

      <Stack alignItems='center' mt={5}>
        {data?.data.length > 0 && (
          <Pagination
            count={Math.ceil(data?.pagination._totalRows / data?.pagination._limit) || 0}
            shape='rounded'
            page={data?.pagination._page || 1}
            onChange={handleChangePage}
            size='large'
          />
        )}
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
