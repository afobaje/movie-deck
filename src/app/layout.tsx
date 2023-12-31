import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans, Rubik, Dai_Banna_SIL } from 'next/font/google'
import localFont from '@next/font/local'
import clsx from 'clsx'
import { getMovies } from '../../Services'
import { createContext } from 'react'
import Footer from '@/components/Footer'


const Recoleta = localFont({
  src: [
    {

      path: '../../public/Recoleta Font/recoleta-regulardemo.otf',
      weight: '700'
    }
  ],
  variable: '--font-recoleta'
})

// const daiBannaSil = Dai_Banna_SIL({ subsets: ['latin', 'latin-ext', 'new-tai-lue'], weight: ['300', '400', '500', '600', '700'] })

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MovieHubb',
  description: 'A movie streaming application',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en"  className={clsx(Recoleta.variable)}>
      <body className={clsx(openSans.className,'font-recoleta')}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
