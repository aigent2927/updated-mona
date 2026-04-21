import type { Metadata } from 'next'
import { Beth_Ellen, Courier_Prime } from 'next/font/google'
import './globals.css'

const bethEllen = Beth_Ellen({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-logo',
})

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Mona | Fashion Designer & Pattern Maker | Barcelona',
  description:
    'Barcelona-based fashion designer shaped through contrast, visual strength, and ornament — creating work that sparks curiosity and commands presence. Open for commissions.',
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://www.monasmona.com',
  },
  openGraph: {
    title: 'Mona — Fashion Designer | Barcelona',
    description:
      'Fashion designer from Barcelona shaped through contrast, visual strength, and ornament. Work that sparks curiosity and commands presence.',
    url: 'https://www.monasmona.com',
    siteName: 'Mona — Fashion Designer',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_03-Vqb1bfz56IBsZaGXI6g8RzQNQ9gtQn.jpg',
        width: 1200,
        height: 800,
        alt: 'Mona FW25 Puppet Riot — Editorial fashion photography, Barcelona',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mona — Fashion Designer | Barcelona',
    description: 'Theatrical knitwear, brocade editorials, and bespoke commissions.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_03-Vqb1bfz56IBsZaGXI6g8RzQNQ9gtQn.jpg',
    ],
  },
}

export const viewport = {
  themeColor: '#f8f5f0',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Mariona Ramos',
      alternateName: 'Mona',
      jobTitle: 'Fashion Designer & Pattern Maker',
      url: 'https://www.monasmona.com',
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_03-Vqb1bfz56IBsZaGXI6g8RzQNQ9gtQn.jpg',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Barcelona',
        addressCountry: 'ES',
      },
      sameAs: [
        'https://www.instagram.com/01.mariona',
        'https://www.linkedin.com/in/mariona-ramos-91a637155',
      ],
      email: 'requestsmona@gmail.com',
      description:
        'Barcelona-based fashion designer specializing in theatrical knitwear, brocade, and editorial collections. Experienced at Viktor & Rolf and Tania Morenilla.',
    },
    {
      '@type': 'CreativeWork',
      name: 'Puppet Riot FW25',
      creator: { '@type': 'Person', name: 'Mariona Ramos' },
      description:
        'Puppet Riot is a celebration of self-expression, theatricality, and rebellion. Inspired by the Blitz Kids of 1980s London, the collection reinterprets their irreverent and maximalist spirit through the symbolism of puppets. Uses repurposed and vintage fabrics — upholstery, curtains, and domestic textiles.',
      dateCreated: '2025',
      locationCreated: { '@type': 'Place', name: 'Barcelona, Spain' },
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TFEModa2425_Mariona_Ramos_Editorial_03-Vqb1bfz56IBsZaGXI6g8RzQNQ9gtQn.jpg',
      award: 'Finalist, Runhua Award Contest 2025 — Jiangxi Institute of Fashion Technology, China',
    },
    {
      '@type': 'WebSite',
      name: 'Mona — Fashion Designer',
      url: 'https://www.monasmona.com',
      author: { '@type': 'Person', name: 'Mariona Ramos' },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${courierPrime.variable} ${bethEllen.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
