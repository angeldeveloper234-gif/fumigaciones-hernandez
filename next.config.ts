import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nmnofwinjufyyykyaelc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/Fumcon/**',
      },
    ],
  },
}

export default nextConfig
