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
    <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
      {languages.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
            lang === l.code
              ? 'bg-amber-500 text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <span>{l.flag}</span>
          <span>{l.label}</span>
        </button>
      ))}
    </div>
  )
}
