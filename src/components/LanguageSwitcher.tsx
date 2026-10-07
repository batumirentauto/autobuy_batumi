'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { Lang } from '@/translations'

const languages: Array<{ code: Lang; label: string; flag: string }> = [
  { code: 'ru', label: 'RU', flag: '🇷🇺' },
  { code: 'ka', label: 'ქარ', flag: '🇬🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
]

export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-0.5 sm:gap-1 bg-slate-900/90 p-0.5 sm:p-1 rounded-lg sm:rounded-xl border border-slate-800 shrink-0">
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          className={`flex items-center gap-1 px-1.5 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-md sm:rounded-lg transition-all ${
            lang === l.code
              ? 'bg-amber-500 text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <span className="text-xs sm:text-sm">{l.flag}</span>
          <span className="hidden xs:inline">{l.label}</span>
        </button>
      ))}
    </div>
  )
}
