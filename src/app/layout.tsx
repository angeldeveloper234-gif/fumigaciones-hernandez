import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/site'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { LanguageProvider } from '@/context/LanguageContext'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from '@/lib/structured-data'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
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
      className={`antialiased scroll-smooth ${montserrat.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLd
          data={[
            websiteSchema(),
            organizationSchema(),
            localBusinessSchema(),
          ]}
        />
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  )
}
