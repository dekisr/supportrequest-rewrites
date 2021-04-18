module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/rewrite/:path*',
        destination: `/test/:path*`,
      },
      {
        source: '/test/123/:path*',
        destination: `https://www.vercel.com`,
      },
    ]
  },
}
