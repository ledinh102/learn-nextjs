import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

const baseUrl = process.env.API_URL

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  req.headers.cookie = ''
  proxy.web(req, res, {
    target: process.env.API_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  })
}
