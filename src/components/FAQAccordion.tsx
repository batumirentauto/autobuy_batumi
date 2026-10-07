'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export const FAQAccordion: React.FC = () => {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3 max-w-4xl mx-auto">
      {t.faq.questions.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={idx}
            className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors"
            >
              <span className="pr-4">{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
