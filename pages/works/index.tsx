import { MainLayout } from '@/components/layout'
import { useWorks } from '@/hooks'
import { ListPrams } from '@/models'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  const [filter, setFilter] = useState<Partial<ListPrams>>({ _page: 1, _limit: 10 })
  const { data, isLoading } = useWorks({ params: filter })
  console.log({ data, isLoading })

  const handleNextPage = () => {
    setFilter(prev => ({ ...prev, _page: (prev?._page || 0) + 1 }))
  }

  return (
    <div>
      Works page
      <Box>
        <Button variant='contained' onClick={handleNextPage}>
          Next page
        </Button>
      </Box>
    </div>
  )
}

WorksPage.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: {}
  }
}
