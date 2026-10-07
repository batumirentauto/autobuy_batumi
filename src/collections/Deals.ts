import type { CollectionConfig } from 'payload'

export const Deals: CollectionConfig = {
  slug: 'deals',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'payoutAmount', 'timeToClose', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Автомобиль (напр. Toyota Prius 2017)',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      label: 'Год выпуска',
    },
    {
      name: 'conditionDescription',
      type: 'text',
      label: 'Описание нюансов (напр. Залог в TBC, закрыли за 30 мин)',
    },
    {
      name: 'payoutAmount',
      type: 'text',
      label: 'Сумма выплаты клиенту (напр. $7,400)',
      required: true,
    },
    {
      name: 'currency',
      type: 'select',
      label: 'Валюта выплаты',
      defaultValue: 'USD',
      options: [
        { label: 'USD ($)', value: 'USD' },
        { label: 'GEL (₾)', value: 'GEL' },
        { label: 'USDT (TRC-20)', value: 'USDT' },
      ],
    },
    {
      name: 'timeToClose',
      type: 'text',
      label: 'Время сделки (напр. 1 час 40 минут)',
      defaultValue: '2 часа',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Ссылка на фото авто',
    },
  ],
}
