import httpProxy, { ProxyResCallback } from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'
import Cookies from 'cookies'

const baseUrl = process.env.API_URL

type Data = {
  message: string
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') return res.status(404).json({ message: 'method not supported' })

  return new Promise(resolve => {
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''
      proxyRes.on('data', function (chunk) {
        body += chunk
      })
      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body)

          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          })

          res.end('my response to cli')
        } catch (error) {
          console.log(error)
        }

        resolve(true)
      })
    }

    proxy.once('proxyRes', handleLoginResponse)
    proxy.web(req, res, {
      target: baseUrl,
      changeOrigin: true,
      selfHandleResponse: true,
    })
  })
}
