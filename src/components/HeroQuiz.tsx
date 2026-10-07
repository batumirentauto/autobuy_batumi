'use client'

import React, { useState } from 'react'
import { MessageSquare, Send, ShieldCheck, Zap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export const HeroQuiz: React.FC = () => {
  const { t } = useLanguage()
  const [model, setModel] = useState('')
  const [year, setYear] = useState('2018')
  const [conditionKey, setConditionKey] = useState<'good' | 'needs_repair' | 'accident' | 'pledged'>('good')
  const [desiredPrice, setDesiredPrice] = useState('')

  const wa = process.env.NEXT_PUBLIC_WHATSAPP || '995558140677'
  const tg = process.env.NEXT_PUBLIC_TELEGRAM || 'ppl93'

  const getMessage = () => {
    return `${t.quiz.waPreFill}
Model: ${model ? model : '-'}
Year: ${year}
Condition: ${t.quiz.conditions[conditionKey]}
${desiredPrice ? `Price: $${desiredPrice}` : ''}`
  }

  const waUrl = `https://wa.me/${wa}?text=${encodeURIComponent(getMessage())}`
  const tgUrl = `https://t.me/${tg}?text=${encodeURIComponent(getMessage())}`

  return (
    <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/20 glow-orange">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Zap className="w-3.5 h-3.5" /> {t.quiz.badge}
        </span>
        <span className="text-[11px] text-slate-400">{t.quiz.noSpam}</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        {t.quiz.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
        {t.quiz.desc}
      </p>

      <form onSubmit={(e) => { e.preventDefault(); window.open(waUrl, '_blank') }} className="space-y-4">
        {/* Model */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            {t.quiz.modelLabel}
          </label>
          <input
            type="text"
            required
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder={t.quiz.modelPlaceholder}
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        {/* Year and Condition grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t.quiz.yearLabel}
            </label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            >
              {Array.from({ length: 12 }, (_, i) => 2026 - i).map((y) => (
                <option key={y} value={y} className="bg-slate-900 text-white">
                  {y} {t.quiz.yearSuffix}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              {t.quiz.priceLabel}
            </label>
            <input
              type="text"
              value={desiredPrice}
              onChange={(e) => setDesiredPrice(e.target.value)}
              placeholder={t.quiz.pricePlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Condition Chips */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            {t.quiz.conditionLabel}
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {(
              [
                { key: 'good', label: t.quiz.conditions.good },
                { key: 'needs_repair', label: t.quiz.conditions.needs_repair },
                { key: 'accident', label: t.quiz.conditions.accident },
                { key: 'pledged', label: t.quiz.conditions.pledged },
              ] as const
            ).map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setConditionKey(item.key)}
                className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                  conditionKey === item.key
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            {t.quiz.btnWhatsapp}
          </a>

          <a
            href={tgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            {t.quiz.btnTelegram}
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t.quiz.trustNote}</span>
        </div>
      </form>
    </div>
  )
}
