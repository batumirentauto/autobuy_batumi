import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'carModel',
    defaultColumns: ['carModel', 'year', 'condition', 'phone', 'createdAt'],
  },
  fields: [
    {
      name: 'carModel',
      type: 'text',
      label: 'Марка и модель авто',
      required: true,
    },
    {
      name: 'year',
      type: 'text',
      label: 'Год выпуска',
    },
    {
      name: 'condition',
      type: 'select',
      label: 'Состояние',
      options: [
        { label: 'На отличном ходу', value: 'good' },
        { label: 'Требует ремонта', value: 'needs_repair' },
        { label: 'После ДТП / аварийный', value: 'accident' },
        { label: 'В залоге / кредите банка', value: 'pledged' },
        { label: 'Иностранные номера', value: 'foreign_plates' },
      ],
    },
    {
      name: 'desiredPrice',
      type: 'text',
      label: 'Желаемая сумма ($)',
    },
    {
      name: 'contactType',
      type: 'select',
      label: 'Способ связи',
      options: [
        { label: 'WhatsApp', value: 'whatsapp' },
        { label: 'Telegram', value: 'telegram' },
        { label: 'Телефон', value: 'phone' },
      ],
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Контакт клиента',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Статус заявки',
      defaultValue: 'new',
      options: [
        { label: 'Новая', value: 'new' },
        { label: 'В обработке', value: 'in_progress' },
        { label: 'Осмотр на СТО', value: 'inspecting' },
        { label: 'Сделка завершена', value: 'completed' },
        { label: 'Отказ', value: 'cancelled' },
      ],
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Заметки оценщика',
    },
  ],
}
