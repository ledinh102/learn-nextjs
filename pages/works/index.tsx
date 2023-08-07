import { MainLayout } from '@/components/layout'
import { WorkFilters, WorkList } from '@/components/work'
import { useWorks } from '@/hooks'
import { ListPrams, WorkFiltersPayload } from '@/models'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const router = useRouter()
  const filters: Partial<ListPrams> = {
    _page: 1,
    _limit: 3,
    ...router.query
  }
  const initFiltersPayload: WorkFiltersPayload = {
    search: filters.title_like || ''
  }
  const { data, isLoading } = useWorks({ params: filters, enabled: router.isReady })

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: value
        }
      },
      undefined,
      { shallow: true }
    )
  }

  const handleFiltersChange = (newFilters: WorkFiltersPayload) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: 1,
          title_like: newFilters.search
        }
      },
      undefined,
      { shallow: true }
    )
  }

  return (
    <Container>
      <Box my={5}>
        <Typography component='h1' variant='h3' fontWeight='bold'>
          Work
        </Typography>
      </Box>

      {router.isReady && <WorkFilters onSubmit={handleFiltersChange} initialValues={initFiltersPayload} />}

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
