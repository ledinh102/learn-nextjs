import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

const baseUrl = process.env.API_URL

export const config = {
  api: {
    bodyParser: false
  }
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise(resolve => {
    const cookies = new Cookies(req, res)
    const accessToken = cookies.get('access_token')
    if (cookies.get('access_token')) {
      req.headers.authorization = `Bearer ${accessToken}`
    }

    proxy.web(req, res, {
      target: baseUrl,
      changeOrigin: true,
      selfHandleResponse: false
    })

    proxy.once('proxyRes', () => {
      return resolve(true)
    })
  })
}
