import { workApi } from '@/api-client'
import { MainLayout } from '@/components/layout'
import { useEffect } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  useEffect(() => {
    ;(async () => {
      try {
        const works = await workApi.getAll({})
        console.log({ works })
      } catch (error) {
        console.log('error', error)
      }
    })()
  }, [])

  return <div>Works page</div>
}

WorksPage.Layout = MainLayout

export async function getStaticProps() {
  return {
    props: {}
  }
}
