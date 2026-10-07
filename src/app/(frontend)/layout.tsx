import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Срочный выкуп авто в Батуми за 2 часа | Собственное СТО | AUTOBUY BATUMI',
  description: 'Честный выкуп автомобилей в Батуми и Аджарии. Осмотр на подъемнике нашего автосервиса за 20 минут. Выплата на месте наличными (USD, GEL) или USDT. Закрываем залоги TBC / BOG.',
  keywords: 'срочный выкуп авто батуми, продать авто батуми, выкуп машин грузия, автовыкуп аджария, авторынок батуми',
  openGraph: {
    title: 'Срочный выкуп авто в Батуми за 2 часа — AUTOBUY BATUMI',
    description: 'Осмотр на собственном СТО за 20 мин. Деньги на месте (USD, GEL, USDT). Оформление в Service Agency берем на себя.',
    type: 'website',
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
