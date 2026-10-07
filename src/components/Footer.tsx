'use client'

import React from 'react'
import { MapPin, Phone, MessageSquare, Send, Clock, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export const Footer: React.FC = () => {
  const { t } = useLanguage()
  const phone = process.env.NEXT_PUBLIC_PHONE || '+995 558 140 677'
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || '995558140677'
  const tg = process.env.NEXT_PUBLIC_TELEGRAM || 'ppl93'

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-sm pb-20 sm:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-black text-white">
                SellPoint<span className="text-amber-500"> BATUMI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {t.footer.about}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.footer.officialDeal}</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.footer.contactsTitle}</h4>
            
            <a
              href="https://maps.app.goo.gl/paKrzJftPzEZDA1G7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 text-xs text-slate-300 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">г. Батуми, ул. Мамия Варшанидзе 154</p>
                <p className="text-slate-400">{t.footer.boxText}</p>
              </div>
            </a>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{t.footer.hoursText}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 font-bold text-white">
                {phone}
              </a>
            </div>
          </div>

          {/* Col 3: Quick Messengers */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">{t.footer.contactMaster}</h4>
            <p className="text-xs text-slate-400 mb-4">
              {t.footer.masterNote}
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={`https://wa.me/${wa}?text=${encodeURIComponent(t.quiz.waPreFill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white text-xs font-semibold transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://t.me/${tg}?text=${encodeURIComponent(t.quiz.waPreFill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600/20 text-sky-300 border border-sky-500/30 hover:bg-sky-500 hover:text-white text-xs font-semibold transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t.footer.rights}</p>
          <p>{t.footer.cityService}</p>
        </div>
      </div>
    </footer>
  )
}
