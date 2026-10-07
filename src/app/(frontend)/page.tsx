import React from 'react'
import { LanguageProvider } from '@/context/LanguageContext'
import { MainContent } from '@/components/MainContent'

export default function HomePage() {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://autobuybatumi-production.up.railway.app'

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoDealer',
        '@id': `${serverUrl}/#organization`,
        name: 'SellPoint Batumi',
        url: serverUrl,
        logo: `${serverUrl}/icon.png`,
        description: 'Срочный выкуп автомобилей в Батуми за 2 часа с осмотром на собственном СТО CheckPoint.',
        telephone: '+995 558 140 677',
        priceRange: '$$$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Мамия Варшанидзе 154, бокс 4 (СТО CheckPoint)',
          addressLocality: 'Батуми',
          addressRegion: 'Аджария',
          addressCountry: 'GE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 41.6239948640617,
          longitude: 41.63840215223446,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '10:00',
            closes: '19:00',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${serverUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Почему мне просто не продать машину дороже на MyAuto?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Если у вас есть запас времени от 3 недель до 2 месяцев, вы готовы ежедневно отвечать на звонки и торговаться у капота — MyAuto может принести на 10–20% больше. Но если деньги нужны сегодня, горят билеты, машина не на ходу или вы не хотите тратить нервы — мы решаем задачу за 2 часа под ключ.',
            },
          },
          {
            '@type': 'Question',
            name: 'Что если на авто висит автокредит или залог в TBC / Bank of Georgia?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Мы запрашиваем справку об остатке задолженности в банке, переводим деньги банку для моментального закрытия кредита, снимаем обременение в Service Agency и разницу выплачиваем вам наличными в кассе или переводом.',
            },
          },
          {
            '@type': 'Question',
            name: 'В какой валюте и как я получу расчет?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Вы получаете 100% суммы сразу: наличными USD или GEL с проверкой на счетчике, переводом на счета TBC/BOG или криптовалютой USDT.',
            },
          },
          {
            '@type': 'Question',
            name: 'Изменится ли цена после приезда в ваш автосервис CheckPoint?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Если состояние соответствует отправленным фото в WhatsApp — сумма остается строго внутри названной онлайн-вилки. Торг возможен только при выявлении скрытых критических дефектов, которые мастер лично покажет на подъемнике.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </>
  )
}
