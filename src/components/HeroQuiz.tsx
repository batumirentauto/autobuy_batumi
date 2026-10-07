'use client'

import React, { useState } from 'react'
import { MessageSquare, Send, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

export const HeroQuiz: React.FC = () => {
  const [model, setModel] = useState('')
  const [year, setYear] = useState('2016')
  const [condition, setCondition] = useState('На отличном ходу')
  const [desiredPrice, setDesiredPrice] = useState('')

  const wa = process.env.NEXT_PUBLIC_WHATSAPP || '995591050752'
  const tg = process.env.NEXT_PUBLIC_TELEGRAM || 'rentcarvasilii'

  const getMessage = () => {
    return `Здравствуйте! Хочу узнать стоимость выкупа авто в Батуми.
Авто: ${model ? model : 'Марка не указана'}
Год: ${year}
Состояние: ${condition}
${desiredPrice ? `Ориентир по цене: $${desiredPrice}` : ''}
Готов отправить фото техпаспорта и машины для оценки.`
  }

  const waUrl = `https://wa.me/${wa}?text=${encodeURIComponent(getMessage())}`
  const tgUrl = `https://t.me/${tg}?text=${encodeURIComponent(getMessage())}`

  return (
    <div className="relative glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/20 glow-orange">
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <Zap className="w-3.5 h-3.5" /> Экспресс-оценка за 10 мин
        </span>
        <span className="text-[11px] text-slate-400">Без звонков и спама</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        Узнайте предварительную цену
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
        Заполните 3 параметра и перейдите в чат. Оценщик с СТО ответит реальной вилкой стоимости.
      </p>

      <form onSubmit={(e) => { e.preventDefault(); window.open(waUrl, '_blank') }} className="space-y-4">
        {/* Model */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Марка и модель авто
          </label>
          <input
            type="text"
            required
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Например: Toyota Prius, BMW 3, Hyundai Elantra"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
          />
        </div>

        {/* Year and Condition grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Год выпуска
            </label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            >
              {Array.from({ length: 22 }, (_, i) => 2025 - i).map((y) => (
                <option key={y} value={y} className="bg-slate-900 text-white">
                  {y} г.
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Ориентир цены ($)
            </label>
            <input
              type="text"
              value={desiredPrice}
              onChange={(e) => setDesiredPrice(e.target.value)}
              placeholder="Желаемая сумма $"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Condition Chips */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-2">
            Текущее состояние
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              'На отличном ходу',
              'Требует ремонта',
              'После ДТП / Битый',
              'В залоге у банка',
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCondition(item)}
                className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                  condition === item
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                {item}
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
            Получить вилку цены в WhatsApp →
          </a>

          <a
            href={tgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            Узнать стоимость через Telegram
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Отвечает мастер автосервиса, а не робот</span>
        </div>
      </form>
    </div>
  )
}
