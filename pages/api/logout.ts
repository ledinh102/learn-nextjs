import Cookies from 'cookies'
import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

const baseUrl = process.env.API_URL

export const config = {
  api: {
    bodyParser: false
  }
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'method not supported' })
  }

  const cookies = new Cookies(req, res)
  cookies.set('access_token')

  return res.status(200).json({ message: 'logout successfully' })
}
