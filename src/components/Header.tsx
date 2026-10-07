'use client'

import React from 'react'
import { MapPin, Phone, MessageSquare, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export const Header: React.FC = () => {
  const { t } = useLanguage()
  const phone = process.env.NEXT_PUBLIC_PHONE || '+995 558 140 677'
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || '995558140677'
  const tg = process.env.NEXT_PUBLIC_TELEGRAM || 'ppl93'

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          {/* Logo & Descriptor */}
          <div className="flex flex-col shrink-0">
            <a href="/" className="flex items-center gap-1.5 group">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                SellPoint<span className="text-amber-500"> BATUMI</span>
              </span>
            </a>
            <span className="text-[11px] text-slate-400 font-medium hidden md:block">
              {t.header.descriptor}
            </span>
          </div>

          {/* Location & Status Badge (Center Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium">{t.header.onlineStatus}</span>
            </div>
            <a
              href="https://maps.app.goo.gl/paKrzJftPzEZDA1G7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.header.boxAddress}</span>
            </a>
          </div>

          {/* Language Switcher & Quick Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <LanguageSwitcher />

            <a
              href={`https://wa.me/${wa}?text=${encodeURIComponent(t.quiz.waPreFill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`https://t.me/${tg}?text=${encodeURIComponent(t.quiz.waPreFill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-sky-600/20 text-sky-300 border border-sky-500/30 hover:bg-sky-500 hover:text-white transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>

            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 p-2 sm:px-2.5 sm:py-2 text-[11px] font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg whitespace-nowrap transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden md:inline whitespace-nowrap">{phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
