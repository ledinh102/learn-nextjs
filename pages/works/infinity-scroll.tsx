import { MainLayout } from '@/components/layout'
import { WorkFilters, WorkList } from '@/components/work'
import { useWorksInfinite } from '@/hooks/use-works-infinity'
import { ListParams, ListResponse, Work, WorkFiltersPayload } from '@/models'
import { Box, Button, CircularProgress, Container, Skeleton, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

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

  const works: Array<Work> =
    data?.reduce((result: Array<Work>, currentPage: ListResponse<Work>) => {
      result.push(...currentPage.data)

      return result
    }, []) || []

  const totalRows = data?.[0].pagination?._totalRows || 0
  const showLoadMore = totalRows > works.length
  const loadingMore = isValidating && works.length > 0
  const { ref } = useInView({
    onChange(inView, entry) {
      console.log({ inView, entry })
      if (inView) {
        setSize(x => x + 1)
      }
    }
  })

  const handleFiltersChange = (newFilters: WorkFiltersPayload) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...filters,
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

      {isClient ? (
        <WorkFilters onSubmit={handleFiltersChange} initialValues={initFiltersPayload} />
      ) : (
        <Skeleton variant='rectangular' height={40} sx={{ mt: 2, mb: 1, display: 'inline-block', width: '100%' }} />
      )}

      <WorkList works={works} loading={!router.isReady || isLoading} />

      {showLoadMore && (
        <Button ref={ref} variant='contained' onClick={() => setSize(x => x + 1)} disabled={loadingMore}>
          Load more {loadingMore && <CircularProgress size={12} sx={{ ml: 1 }} />}
        </Button>
      )}
    </Container>
  )
}

WorksPage.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: {}
  }
}
