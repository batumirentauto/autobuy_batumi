'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Lang, TranslationDict, translations } from '@/translations'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: TranslationDict
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('ru')

  useEffect(() => {
    const saved = localStorage.getItem('sellpoint_lang') as Lang
    if (saved && (saved === 'ru' || saved === 'ka' || saved === 'en')) {
      setLangState(saved)
    } else {
      // detect browser language
      const navLang = navigator.language.toLowerCase()
      if (navLang.startsWith('ka')) {
        setLangState('ka')
      } else if (navLang.startsWith('en')) {
        setLangState('en')
      }
    }
  }, [])

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('sellpoint_lang', newLang)
    document.documentElement.lang = newLang
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
