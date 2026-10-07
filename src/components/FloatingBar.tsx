'use client'

import React from 'react'
import { MessageSquare, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export const FloatingBar: React.FC = () => {
  const { t } = useLanguage()
  const wa = process.env.NEXT_PUBLIC_WHATSAPP || '995558140677'
  const tg = process.env.NEXT_PUBLIC_TELEGRAM || 'ppl93'

  const defaultMsg = encodeURIComponent(t.quiz.waPreFill)

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:hidden bg-slate-950/90 backdrop-blur-md border-t border-slate-800">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`https://wa.me/${wa}?text=${defaultMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/25 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>{t.floating.btnWa}</span>
        </a>

        <a
          href={`https://t.me/${tg}?text=${defaultMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-sky-600 text-white font-bold text-xs shadow-lg shadow-sky-600/25 active:scale-95 transition-transform"
        >
          <Send className="w-4 h-4" />
          <span>{t.floating.btnTg}</span>
        </a>
      </div>
    </div>
  )
}
