// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Pagination, Post } from '@/models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
  | {
      data: Post[]
      pagination: Pagination
    }
  | { name: string }

const baseUrl = process.env.API_URL

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await fetch(`${baseUrl}/api/products?_page=1`)
  const data = await response.json()

  res.status(200).json(data)
}
