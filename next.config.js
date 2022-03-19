const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

/*
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
*/