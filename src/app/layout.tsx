import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/site'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from '@/lib/structured-data'

/**
 * Par tipográfico propio de Hernández.
 *
 * El template base venía con Montserrat + Inter, exactamente el mismo par que
 * usa el sitio hermano del estudio. Es la señal más rápida de "estos dos
 * sitios son el mismo".
 *
 * Archivo es una grotesca de raíz industrial, más angosta y de terminaciones
 * más duras que Montserrat: aguanta el peso negro sin verse publicitaria.
 * IBM Plex Sans en cuerpo aporta la lectura técnica que Inter deliberadamente
 * evita. No se suman fuentes: son dos y siguen siendo dos.
 */
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

/**
 * Title de la home: 55 caracteres, con la keyword principal al inicio y el
 * diferenciador (atención 24 h) como gancho de click. Google trunca alrededor de
 * los 60, así que todo lo que importa va delante.
 */
const title = 'Fumigaciones en Tampico, Madero y Altamira | 24 h'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: title,
    template: '%s | Fumigaciones Hernández',
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName }],
  creator: SITE.name,
  publisher: SITE.legalName,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title,
    description: SITE.longDescription,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: 'Fumigaciones Hernández — control profesional de plagas en Tampico y la zona conurbada',
      },
    ],
  },
  formatDetection: { telephone: true, address: true },
  other: {
    // Señales locales explícitas: refuerzan la asociación geográfica del dominio.
    'geo.region': 'MX-TAM',
    'geo.placename': SITE.address.addressLocality,
    'geo.position': `${SITE.geo.latitude};${SITE.geo.longitude}`,
    ICBM: `${SITE.geo.latitude}, ${SITE.geo.longitude}`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  category: 'Pest Control',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`antialiased scroll-smooth ${archivo.variable} ${plex.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLd
          data={[
            websiteSchema(),
            organizationSchema(),
            localBusinessSchema(),
          ]}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
