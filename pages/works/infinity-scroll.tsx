import { MainLayout } from '@/components/layout'
import { WorkFilters, WorkList } from '@/components/work'
import { useWorksInfinite } from '@/hooks/use-works-infinity'
import { ListParams, WorkFiltersPayload } from '@/models'
import { Box, Container, Skeleton, Typography } from '@mui/material'
import { useRouter } from 'next/router'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const router = useRouter()
  const filters: Partial<ListParams> = {
    ...router.query
  }
  const initFiltersPayload: WorkFiltersPayload = {
    selectedTagList: filters.tagList_like?.split('|'),
    search: filters.title_like || ''
  }
  const { data, isLoading, isValidating, size, setSize } = useWorksInfinite({
    params: filters,
    enabled: router.isReady
  })
  console.log('data', { data, isLoading, isValidating, size })

  const handleFiltersChange = (newFilters: WorkFiltersPayload) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
          _page: 1,
          title_like: newFilters.search,
          tagList_like: newFilters.tagList_like
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

      {router.isReady ? (
        <WorkFilters onSubmit={handleFiltersChange} initialValues={initFiltersPayload} />
      ) : (
        <Skeleton variant='rectangular' height={40} sx={{ mt: 2, mb: 1, display: 'inline-block', width: '100%' }} />
      )}

      <WorkList works={[]} loading={!router.isReady || isLoading} />
    </Container>
  )
}

WorksPage.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: {}
  }
}
