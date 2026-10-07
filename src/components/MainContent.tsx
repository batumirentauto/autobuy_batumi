'use client'

import React from 'react'
import { Header } from '@/components/Header'
import { HeroQuiz } from '@/components/HeroQuiz'
import { FAQAccordion } from '@/components/FAQAccordion'
import { Footer } from '@/components/Footer'
import { FloatingBar } from '@/components/FloatingBar'
import { useLanguage } from '@/context/LanguageContext'
import { 
  CheckCircle2, 
  Banknote, 
  Wrench, 
  FileCheck2, 
  AlertTriangle, 
  Plane, 
  Truck, 
  Shield, 
  ArrowRight 
} from 'lucide-react'

export const MainContent: React.FC = () => {
  const { t } = useLanguage()
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || '995558140677'

  return (
    <>
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
                  {t.hero.badge}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  {t.hero.h1Title} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                    {t.hero.h1Accent}
                  </span>{' '}
                  {t.hero.h1End}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  {t.hero.subtitle}
                </p>

                {/* Value bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Banknote className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.bullet1Title}</h4>
                      <p className="text-xs text-slate-400">{t.hero.bullet1Desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Wrench className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.bullet2Title}</h4>
                      <p className="text-xs text-slate-400">{t.hero.bullet2Desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <FileCheck2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.bullet3Title}</h4>
                      <p className="text-xs text-slate-400">{t.hero.bullet3Desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <Shield className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{t.hero.bullet4Title}</h4>
                      <p className="text-xs text-slate-400">{t.hero.bullet4Desc}</p>
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
                {t.discount.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                {t.discount.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t.discount.desc}
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
                    {t.discount.card1Badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">
                    {t.discount.card1Title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {t.discount.card1Desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">{t.discount.solutionPrefix}</span> {t.discount.card1Solution}
                </div>
              </div>

              {/* Card 2 */}
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-slate-800 hover:border-amber-500/30 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
                    {t.discount.card2Badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">
                    {t.discount.card2Title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {t.discount.card2Desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">{t.discount.solutionPrefix}</span> {t.discount.card2Solution}
                </div>
              </div>

              {/* Card 3 */}
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-slate-800 hover:border-amber-500/30 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                    {t.discount.card3Badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">
                    {t.discount.card3Title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {t.discount.card3Desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">{t.discount.solutionPrefix}</span> {t.discount.card3Solution}
                </div>
              </div>

              {/* Card 4 */}
              <div className="glass-card rounded-2xl p-6 flex flex-col justify-between border-slate-800 hover:border-amber-500/30 transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400">
                    {t.discount.card4Badge}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-2">
                    {t.discount.card4Title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {t.discount.card4Desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                  <span className="font-semibold text-emerald-400">{t.discount.solutionPrefix}</span> {t.discount.card4Solution}
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
                  {t.service.badge}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {t.service.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {t.service.desc}
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.service.feat1Title}</h4>
                      <p className="text-xs text-slate-400">{t.service.feat1Desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.service.feat2Title}</h4>
                      <p className="text-xs text-slate-400">{t.service.feat2Desc}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.service.feat3Title}</h4>
                      <p className="text-xs text-slate-400">{t.service.feat3Desc}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <span className="font-bold text-white">{t.service.brokenBannerTitle}</span>
                        <p className="text-slate-400">{t.service.brokenBannerDesc}</p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${wa}?text=${encodeURIComponent(t.service.brokenBannerMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shrink-0 transition-colors"
                    >
                      {t.service.brokenBannerBtn}
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Box Mockup / Location preview */}
              <div className="lg:col-span-6">
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border-slate-800 relative">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-semibold text-amber-400">{t.service.locationLabel}</span>
                      <h3 className="text-lg font-bold text-white">{t.service.stoTitle}</h3>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                      {t.service.boxLabel}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <p className="leading-relaxed">
                      📍 <strong className="text-white">{t.service.addrLabel}</strong> {t.service.addrValue}
                    </p>
                    <p className="leading-relaxed">
                      ⏱ <strong className="text-white">{t.service.hoursLabel}</strong> {t.service.hoursValue}
                    </p>
                    <p className="leading-relaxed">
                      ☕ <strong className="text-white">{t.service.clientsLabel}</strong> {t.service.clientsValue}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex gap-3">
                    <a
                      href="https://maps.app.goo.gl/paKrzJftPzEZDA1G7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-center text-xs font-semibold text-white transition-colors"
                    >
                      {t.service.btnGoogle}
                    </a>
                    <a
                      href="https://yandex.ru/maps/?text=Batumi+Varshanidze+154"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-center text-xs font-semibold text-white transition-colors"
                    >
                      {t.service.btnYandex}
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
                {t.steps.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                {t.steps.title}
              </h2>
              <p className="text-sm text-slate-300">
                {t.steps.desc}
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
                <h3 className="text-base font-bold text-white mb-2">{t.steps.step1Title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.steps.step1Desc}
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
                <h3 className="text-base font-bold text-white mb-2">{t.steps.step2Title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.steps.step2Desc}
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
                <h3 className="text-base font-bold text-white mb-2">{t.steps.step3Title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.steps.step3Desc}
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
                <h3 className="text-base font-bold text-white mb-2">{t.steps.step4Title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {t.steps.step4Desc}
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
                {t.carTypes.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                {t.carTypes.title}
              </h2>
              <p className="text-sm text-slate-300">
                {t.carTypes.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.carTypes.items.map((car, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                      {car.badge}
                    </span>
                    <h3 className="text-base font-bold text-white mt-3 mb-2">{car.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{car.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                    <span>{t.carTypes.sameDayPayout}</span>
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
                {t.faq.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                {t.faq.title}
              </h2>
              <p className="text-sm text-slate-300">
                {t.faq.desc}
              </p>
            </div>

            <FAQAccordion />

            {/* Direct question CTA */}
            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-slate-400 mb-3">
                {t.faq.customQuestionNote}
              </p>
              <a
                href={`https://wa.me/${wa}?text=${encodeURIComponent(t.quiz.waPreFill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-xs font-semibold transition-all"
              >
                {t.faq.askMasterBtn}
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
