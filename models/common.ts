import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export interface LayoutProps {
	children: ReactNode
}

export interface Pagination {
	_page: number,
	_limit: number,
	_totalRows: number
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	Layout?: (props: LayoutProps) => ReactElement
}

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}
