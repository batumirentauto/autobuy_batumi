import type { Metadata, Viewport } from 'next'
import React from 'react'
import './globals.css'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://autobuybatumi-production.up.railway.app'

export const viewport: Viewport = {
  themeColor: '#090d16',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(serverUrl),
  title: {
    default: 'Срочный выкуп авто в Батуми за 2 часа | Выкуп автомобилей SellPoint Batumi',
    template: '%s | SellPoint Batumi',
  },
  description: 'Честный срочный выкуп автомобилей в Батуми за 2 часа с дисконтом 15-25% от рынка. Осмотр на подъемнике собственного СТО CheckPoint за 20 минут. Расчет на месте наличными (USD, GEL) или USDT. Закрытие залогов TBC / Bank of Georgia.',
  keywords: [
    'срочный выкуп авто батуми',
    'продать авто батуми',
    'выкуп автомобилей батуми',
    'автовыкуп батуми',
    'продать машину батуми срочно',
    'выкуп битых авто батуми',
    'выкуп кредитных авто грузия',
    'SellPoint batumi',
    'СТО CheckPoint батуми',
    'авторынок батуми',
  ],
  authors: [{ name: 'SellPoint Batumi' }],
  creator: 'SellPoint Batumi',
  publisher: 'SellPoint Batumi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: serverUrl,
  },
  openGraph: {
    title: 'Срочный выкуп авто в Батуми за 2 часа — SellPoint Batumi',
    description: 'Осмотр на подъемнике собственного СТО CheckPoint за 20 мин. Мгновенная выплата всей суммы (USD, GEL, USDT). Оформление в Service Agency за наш счет.',
    url: serverUrl,
    siteName: 'SellPoint Batumi',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Срочный выкуп авто в Батуми за 2 часа — SellPoint Batumi',
    description: 'Осмотр на СТО CheckPoint, деньги сразу (USD/GEL/USDT), оформление за наш счет.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  )
}
