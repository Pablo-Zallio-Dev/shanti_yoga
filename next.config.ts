import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.16'],  // ✅ nivel raíz
 
  experimental: {
    // otras opciones experimentales válidas si las tienes
  },
}

export default nextConfig