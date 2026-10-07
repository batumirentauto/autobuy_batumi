import React from 'react'
import { Header } from '@/components/Header'
import { HeroQuiz } from '@/components/HeroQuiz'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Footer } from '@/components/Footer'
import { FloatingBar } from '@/components/FloatingBar'
import { 
  CheckCircle2, 
  Banknote, 
  Wrench, 
  FileCheck2, 
  Clock, 
  AlertTriangle, 
  Plane, 
  HelpCircle,
  Truck,
  Car,
  Shield,
  ArrowRight
} from 'lucide-react'

export default function HomePage() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || '995591050752'
  const tg = process.env.NEXT_PUBLIC_TELEGRAM || 'rentcarvasilii'
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
      <Header />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-900">
          {/* Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (Offer) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  Батуми • Выкуп авто день в день
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Срочный выкуп авто в Батуми за 2 часа. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    Деньги сразу,
                  </span>{' '}
                  оформление берем на себя.
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Осмотр на подъемнике нашего автосервиса за 20 минут. Без пустых показов и уличных перекупов. Окончательная выплата в кассе наличными или USDT.
                </p>

                {/* Value bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Banknote className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Расчет на месте</h4>
                      <p className="text-xs text-slate-400">Наличные USD / GEL или USDT в момент передачи ключей</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Wrench className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Свой автосервис</h4>
                      <p className="text-xs text-slate-400">Осмотр на подъемнике. Фиксируем честную цену без сбивания</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <FileCheck2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Service Agency за наш счет</h4>
                      <p className="text-xs text-slate-400">Снятие с учета и переоформление в МВД берем полностью на себя</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Shield className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Закрываем залоги</h4>
                      <p className="text-xs text-slate-400">Погасим автокредит в TBC или Bank of Georgia в день сделки</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Quiz) */}
              <div className="lg:col-span-5">
                <HeroQuiz />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY DISCOUNT 15-25% */}
        <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Открытая бизнес-модель
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                Мы выкупаем авто с дисконтом 15–25% ниже рынка. <br className="hidden sm:inline" />
                Честно объясняем, за что именно вы платите.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Если у вас есть 1–2 месяца свободного времени, желание отвечать на десятки звонков и торговаться на парковках — выгоднее продать на MyAuto. Мы — решение для тех, кому время, безопасность и деньги прямо сейчас дороже ожидания.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-slate-800 hover:border-amber-500/30 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                    <Plane className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Срочный выезд / релокация
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">
                    Горят билеты и виза
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    До рейса осталось 2 дня. Нельзя бросить машину на улице или доверить случайным знакомым по доверенности.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">Решение:</span> В 11:00 на подъемнике — в 13:00 у вас наличные USD/USDT и авто снято с учета.
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-slate-800 hover:border-amber-500/30 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                    Банковские долги
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">
                    Кредит в TBC или BOG
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Покупатели на MyAuto требуют сначала закрыть кредит за свой счет, а свободных денег на закрытие нет.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">Решение:</span> Сами вносим остаток в кассу банка, снимаем арест, разницу отдаем вам на руки.
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-slate-800 hover:border-amber-500/30 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                    Нервы и безопасность
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">
                    Устали от перекупов
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Звонки посреди ночи, предложения отдать в рассрочку, пустые тест-драйвы и сбивание цены на каждом осмотре.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">Решение:</span> Всего 1 визит в наш чистый бокс. Никаких ночных звонков и сомнительных личностей.
                </div>
              </div>

              {/* Card 4 */}
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-slate-800 hover:border-amber-500/30 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    Технические дефекты
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">
                    Сложный ремонт / ДТП
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Стучит мотор, коробка в аварии или кузов разбит. Вкладывать тысячи долларов в ремонт перед продажей бессмысленно.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">Решение:</span> Оцениваем по оптовому прайсу деталей нашего СТО. Вы не тратите ни одного лари.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: TRUST TRIGGER - OUR AUTO SERVICE */}
        <section className="py-16 sm:py-20 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Защита от нечестного торга
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Осмотр в нашем автосервисе: <br />
                  почему это выгодно продавцу
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Мы принципиально не осматриваем автомобили на темных парковках у супермаркетов и не пытаемся «сбить цену на слух». Вы приезжаете на стационарное СТО с современным оборудованием и зоной ожидания.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Подъемник и сканер Launch за 20 минут</h4>
                      <p className="text-xs text-slate-400">Если есть проблема — показываем ее пальцем при вас, а не выдумываем скрытые поломки.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Аргументированная смета по оптовому прайсу</h4>
                      <p className="text-xs text-slate-400">Любой дисконт рассчитывается по себестоимости деталей нашего сервиса, а не фантазиям перекупщика.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Фиксация суммы до выезда в Агентство</h4>
                      <p className="text-xs text-slate-400">Сумма, зафиксированная на СТО, не изменится в Сервисном Агентстве МВД ни на один доллар.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white">Машина не на ходу или после ДТП?</span>
                        <p className="text-slate-400">Выезд мастера со сканером или наш эвакуатор бесплатно.</p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${wa}?text=${encodeURIComponent('Здравствуйте! Машина не на ходу, нужен выезд мастера/эвакуатор в Батуми.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shrink-0 transition-colors"
                    >
                      Вызвать
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Box Mockup / Location preview */}
              <div className="lg:col-span-6">
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border-slate-800 relative">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-semibold text-amber-400">Локация осмотра</span>
                      <h3 className="text-lg font-bold text-white">СТО CheckPoint</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      Бокс 4
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <p className="leading-relaxed">
                      📍 <strong className="text-white">Адрес:</strong> г. Батуми, ул. Мамия Варшанидзе 154 (напротив здания Apolo)
                    </p>
                    <p className="leading-relaxed">
                      ⏱ <strong className="text-white">Время работы:</strong> с 10:00 до 19:00 ежедневно без перерывов
                    </p>
                    <p className="leading-relaxed">
                      ☕ <strong className="text-white">Для клиентов:</strong> чистая зона ожидания, кофе, Wi-Fi и счетная машинка для купюр
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex gap-3">
                    <a
                      href="https://maps.app.goo.gl/paKrzJftPzEZDA1G7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-center text-xs font-semibold text-white transition-colors"
                    >
                      Открыть в Google Maps
                    </a>
                    <a
                      href="https://yandex.ru/maps/?text=Batumi+Varshanidze+154"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-center text-xs font-semibold text-white transition-colors"
                    >
                      Открыть в Яндекс Картах
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: 4 STEPS TIMELINE */}
        <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Прозрачная сделка
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                От сообщения в WhatsApp до денег на руках: <br />
                4 шага за 2 часа
              </h2>
              <p className="text-sm text-slate-300">
                Вам не придется разбираться в оформлении — все этапы мы сопровождаем лично.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="glass-card rounded-2xl p-6 relative border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-500/40">01</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    ~10 мин
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Оценка по фото</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Отправляете фото машины и техпаспорта в мессенджер. Оценщик анализирует рынок и дает твердую вилку цен.
                </p>
              </div>

              {/* Step 2 */}
              <div className="glass-card rounded-2xl p-6 relative border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-500/40">02</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    ~20 мин
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Осмотр на СТО</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Приезжаете в наш сервис в Батуми. Диагностика на подъемнике, фиксация окончательной суммы без сюрпризов.
                </p>
              </div>

              {/* Step 3 */}
              <div className="glass-card rounded-2xl p-6 relative border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-500/40">03</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    ~40 мин
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Service Agency MIA</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Едем вместе в Сервисное Агентство Батуми. Закрываем залоги, снимаем с учета. Пошлины оплачиваем мы.
                </p>
              </div>

              {/* Step 4 */}
              <div className="glass-card rounded-2xl p-6 relative border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-emerald-500/40">04</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ~10 мин
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">Выплата 100%</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Наличные доллары ($) / лари (₾) с проверкой на счетчике, перевод в TBC / BOG или моментальный USDT.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: WHAT CARS WE BUY */}
        <section className="py-16 sm:py-20 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Любые ситуации
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                С какими автомобилями мы работаем
              </h2>
              <p className="text-sm text-slate-300">
                Выкупаем от идеальных иномарок до проблемных и аварийных автомобилей по всей Грузии.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'На грузинских номерах (GE)',
                  desc: 'Седаны, кроссоверы, гибриды, электрокары от 2015 года. Быстрая сделка за 1,5 часа.',
                  badge: 'Стандарт',
                },
                {
                  title: 'В залоге и автокредите',
                  desc: 'Кредиты в TBC Bank, Bank of Georgia, лизинг или МФО. Погасим задолженность в день сделки.',
                  badge: 'Сложные случаи',
                },
                {
                  title: 'С техническими поломками',
                  desc: 'Проблемы с двигателем, АКПП, вариатором, батареей гибрида. Оценим с учетом ремонта на СТО.',
                  badge: 'Требуют ремонта',
                },
                {
                  title: 'После ДТП и аварийные',
                  desc: 'Кузовные повреждения, сработавшие подушки безопасности. Бесплатный эвакуатор в сервисный бокс.',
                  badge: 'Битые авто',
                },
                {
                  title: 'На иностранных номерах',
                  desc: 'Автомобили на номерах РФ, Армении, Украины, Беларуси, Казахстана. Помощь с растаможкой.',
                  badge: 'Иностранный учет',
                },
                {
                  title: 'Коммерческий транспорт',
                  desc: 'Минивэны под туризм (Toyota Alphard, Vito) и фургоны (Ford Transit, Sprinter).',
                  badge: 'Минивэны / Бусы',
                },
              ].map((car, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                      {car.badge}
                    </span>
                    <h3 className="text-base font-bold text-white mt-3 mb-2">{car.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{car.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <span>Выплата в день обращения</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ */}
        <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                Честные ответы на сложные вопросы
              </h2>
              <p className="text-sm text-slate-300">
                Все, что важно знать перед тем, как продать автомобиль нашему сервису.
              </p>
            </div>

            <FAQAccordion />

            {/* Direct question CTA */}
            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-slate-400 mb-3">
                Остался индивидуальный вопрос по документам или банку?
              </p>
              <a
                href={`https://wa.me/${wa}?text=${encodeURIComponent('Здравствуйте! Есть вопрос по выкупу авто в Батуми.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-xs font-semibold transition-all"
              >
                Задать вопрос мастеру напрямую в WhatsApp →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingBar />
    </>
  )
}
