import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    /**
     * Hosts habilitados para las fotos finales de secciones y plagas.
     *
     * Con esto, pegar una URL externa en `src/config/section-media.ts` no exige
     * tocar código. Si la foto viene de un host que no está en esta lista,
     * `next/image` la rechaza en build: agregá el hostname acá.
     *
     * No se usa `hostname: '**'` a propósito. Un comodín deja el optimizador de
     * imágenes abierto a que cualquiera lo use de proxy contra hosts de
     * terceros, y eso se paga en ancho de banda de Netlify.
     */
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'ik.imagekit.io' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },
}

export default nextConfig
