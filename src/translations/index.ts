export type Lang = 'ru' | 'ka' | 'en'

export interface TranslationDict {
  header: {
    descriptor: string
    onlineStatus: string
    boxAddress: string
    whatsapp: string
    telegram: string
  }
  hero: {
    badge: string
    h1Title: string
    h1Accent: string
    h1End: string
    subtitle: string
    bullet1Title: string
    bullet1Desc: string
    bullet2Title: string
    bullet2Desc: string
    bullet3Title: string
    bullet3Desc: string
    bullet4Title: string
    bullet4Desc: string
  }
  quiz: {
    badge: string
    noSpam: string
    title: string
    desc: string
    modelLabel: string
    modelPlaceholder: string
    yearLabel: string
    yearSuffix: string
    priceLabel: string
    pricePlaceholder: string
    conditionLabel: string
    conditions: {
      good: string
      needs_repair: string
      accident: string
      pledged: string
    }
    btnWhatsapp: string
    btnTelegram: string
    trustNote: string
    waPreFill: string
  }
  discount: {
    badge: string
    title: string
    desc: string
    card1Badge: string
    card1Title: string
    card1Desc: string
    card1Solution: string
    card2Badge: string
    card2Title: string
    card2Desc: string
    card2Solution: string
    card3Badge: string
    card3Title: string
    card3Desc: string
    card3Solution: string
    card4Badge: string
    card4Title: string
    card4Desc: string
    card4Solution: string
    solutionPrefix: string
  }
  service: {
    badge: string
    title: string
    desc: string
    feat1Title: string
    feat1Desc: string
    feat2Title: string
    feat2Desc: string
    feat3Title: string
    feat3Desc: string
    brokenBannerTitle: string
    brokenBannerDesc: string
    brokenBannerBtn: string
    brokenBannerMsg: string
    locationLabel: string
    stoTitle: string
    boxLabel: string
    addrLabel: string
    addrValue: string
    hoursLabel: string
    hoursValue: string
    clientsLabel: string
    clientsValue: string
    btnGoogle: string
    btnYandex: string
  }
  steps: {
    badge: string
    title: string
    desc: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    step4Title: string
    step4Desc: string
  }
  carTypes: {
    badge: string
    title: string
    desc: string
    sameDayPayout: string
    items: Array<{
      badge: string
      title: string
      desc: string
    }>
  }
  faq: {
    badge: string
    title: string
    desc: string
    customQuestionNote: string
    askMasterBtn: string
    questions: Array<{
      q: string
      a: string
    }>
  }
  footer: {
    about: string
    officialDeal: string
    contactsTitle: string
    boxText: string
    hoursText: string
    contactMaster: string
    masterNote: string
    rights: string
    cityService: string
  }
  floating: {
    btnWa: string
    btnTg: string
  }
}

export const translations: Record<Lang, TranslationDict> = {
  ru: {
    header: {
      descriptor: 'Срочный автовыкуп со своим СТО',
      onlineStatus: 'Оценка онлайн 10:00 – 19:00',
      boxAddress: 'ул. Мамия Варшанидзе 154 (Бокс СТО)',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
    },
    hero: {
      badge: 'Батуми • Выкуп авто день в день',
      h1Title: 'Срочный выкуп авто в Батуми за 2 часа.',
      h1Accent: 'Деньги сразу,',
      h1End: 'оформление берем на себя.',
      subtitle: 'Осмотр на подъемнике нашего автосервиса за 20 минут. Без пустых показов и уличных перекупов. Окончательная выплата в кассе наличными или USDT.',
      bullet1Title: 'Расчет на месте',
      bullet1Desc: 'Наличные USD / GEL или USDT в момент передачи ключей',
      bullet2Title: 'Свой автосервис CheckPoint',
      bullet2Desc: 'Осмотр на подъемнике. Фиксируем честную цену без сбивания',
      bullet3Title: 'Service Agency за наш счет',
      bullet3Desc: 'Снятие с учета и переоформление в МВД берем полностью на себя',
      bullet4Title: 'Закрываем залоги',
      bullet4Desc: 'Погасим автокредит в TBC или Bank of Georgia в день сделки',
    },
    quiz: {
      badge: 'Экспресс-оценка за 10 мин',
      noSpam: 'Без звонков и спама',
      title: 'Узнайте предварительную цену',
      desc: 'Заполните 3 параметра и перейдите в чат. Оценщик с СТО ответит реальной вилкой стоимости.',
      modelLabel: 'Марка и модель авто',
      modelPlaceholder: 'Например: Toyota Prius, BMW 3, Hyundai Elantra',
      yearLabel: 'Год выпуска',
      yearSuffix: 'г.',
      priceLabel: 'Ориентир цены ($)',
      pricePlaceholder: 'Желаемая сумма $',
      conditionLabel: 'Текущее состояние',
      conditions: {
        good: 'На отличном ходу',
        needs_repair: 'Требует ремонта',
        accident: 'После ДТП / Битый',
        pledged: 'В залоге у банка',
      },
      btnWhatsapp: 'Получить вилку цены в WhatsApp →',
      btnTelegram: 'Узнать стоимость через Telegram',
      trustNote: 'Отвечает мастер автосервиса, а не робот',
      waPreFill: 'Здравствуйте! Хочу узнать стоимость выкупа авто в Батуми.',
    },
    discount: {
      badge: 'Открытая бизнес-модель',
      title: 'Мы выкупаем авто с дисконтом 15–25% ниже рынка. Честно объясняем, за что именно вы платите.',
      desc: 'Если у вас есть 1–2 месяца свободного времени, желание отвечать на десятки звонков и торговаться на парковках — выгоднее продать на MyAuto. Мы — решение для тех, кому время, безопасность и деньги прямо сейчас дороже ожидания.',
      card1Badge: 'Срочный выезд / релокация',
      card1Title: 'Горят билеты и виза',
      card1Desc: 'До рейса осталось 2 дня. Нельзя бросить машину на улице или доверить случайным знакомым по доверенности.',
      card1Solution: 'В 11:00 на подъемнике — в 13:00 у вас наличные USD/USDT и авто снято с учета.',
      card2Badge: 'Банковские долги',
      card2Title: 'Кредит в TBC или BOG',
      card2Desc: 'Покупатели на MyAuto требуют сначала закрыть кредит за свой счет, а свободных денег на закрытие нет.',
      card2Solution: 'Сами вносим остаток в кассу банка, снимаем арест, разницу отдаем вам на руки.',
      card3Badge: 'Нервы и безопасность',
      card3Title: 'Устали от перекупов',
      card3Desc: 'Звонки посреди ночи, предложения отдать в рассрочку, пустые тест-драйвы и сбивание цены на каждом осмотре.',
      card3Solution: 'Всего 1 визит в наш чистый бокс. Никаких ночных звонков и сомнительных личностей.',
      card4Badge: 'Технические дефекты',
      card4Title: 'Сложный ремонт / ДТП',
      card4Desc: 'Стучит мотор, коробка в аварии или кузов разбит. Вкладывать тысячи долларов в ремонт перед продажей бессмысленно.',
      card4Solution: 'Оцениваем по оптовому прайсу деталей нашего СТО. Вы не тратите ни одного лари.',
      solutionPrefix: 'Решение:',
    },
    service: {
      badge: 'Защита от нечестного торга',
      title: 'Осмотр в автосервисе CheckPoint: почему это выгодно продавцу',
      desc: 'Мы принципиально не осматриваем автомобили на темных парковках у супермаркетов и не пытаемся «сбить цену на слух». Вы приезжаете на стационарное СТО с современным оборудованием и зоной ожидания.',
      feat1Title: 'Подъемник и сканер Launch за 20 минут',
      feat1Desc: 'Если есть проблема — показываем ее пальцем при вас, а не выдумываем скрытые поломки.',
      feat2Title: 'Аргументированная смета по оптовому прайсу',
      feat2Desc: 'Любой дисконт рассчитывается по себестоимости деталей нашего сервиса, а не фантазиям перекупщика.',
      feat3Title: 'Фиксация суммы до выезда в Агентство',
      feat3Desc: 'Сумма, зафиксированная на СТО, не изменится в Сервисном Агентстве МВД ни на один доллар.',
      brokenBannerTitle: 'Машина не на ходу или после ДТП?',
      brokenBannerDesc: 'Выезд мастера со сканером или наш эвакуатор бесплатно.',
      brokenBannerBtn: 'Вызвать',
      brokenBannerMsg: 'Здравствуйте! Машина не на ходу, нужен выезд мастера/эвакуатор в Батуми.',
      locationLabel: 'Локация осмотра',
      stoTitle: 'СТО CheckPoint',
      boxLabel: 'Бокс 4',
      addrLabel: 'Адрес:',
      addrValue: 'г. Батуми, ул. Мамия Варшанидзе 154 (напротив здания Apolo)',
      hoursLabel: 'Время работы:',
      hoursValue: 'с 10:00 до 19:00 ежедневно без перерывов',
      clientsLabel: 'Для клиентов:',
      clientsValue: 'чистая зона ожидания, кофе, Wi-Fi и счетная машинка для купюр',
      btnGoogle: 'Открыть в Google Maps',
      btnYandex: 'Открыть в Яндекс Картах',
    },
    steps: {
      badge: 'Прозрачная сделка',
      title: 'От сообщения в WhatsApp до денег на руках: 4 шага за 2 часа',
      desc: 'Вам не придется разбираться в оформлении — все этапы мы сопровождаем лично.',
      step1Title: 'Оценка по фото',
      step1Desc: 'Отправляете фото машины и техпаспорта в мессенджер. Оценщик анализирует рынок и дает твердую вилку цен.',
      step2Title: 'Осмотр на СТО',
      step2Desc: 'Приезжаете в наш сервис в Батуми. Диагностика на подъемнике, фиксация окончательной суммы без сюрпризов.',
      step3Title: 'Service Agency MIA',
      step3Desc: 'Едем вместе в Сервисное Агентство Батуми. Закрываем залоги, снимаем с учета. Пошлины оплачиваем мы.',
      step4Title: 'Выплата 100%',
      step4Desc: 'Наличные доллары ($) / лари (₾) с проверкой на счетчике, перевод в TBC / BOG или моментальный USDT.',
    },
    carTypes: {
      badge: 'Любые ситуации',
      title: 'С какими автомобилями мы работаем',
      desc: 'Выкупаем от идеальных иномарок до проблемных и аварийных автомобилей в Батуми.',
      sameDayPayout: 'Выплата в день обращения',
      items: [
        {
          badge: 'Стандарт',
          title: 'На грузинских номерах (GE)',
          desc: 'Седаны, кроссоверы, гибриды, электрокары от 2015 года. Быстрая сделка за 1,5 часа.',
        },
        {
          badge: 'Сложные случаи',
          title: 'В залоге и автокредите',
          desc: 'Кредиты в TBC Bank, Bank of Georgia, лизинг или МФО. Погасим задолженность в день сделки.',
        },
        {
          badge: 'Требуют ремонта',
          title: 'С техническими поломками',
          desc: 'Проблемы с двигателем, АКПП, вариатором, батареей гибрида. Оценим с учетом ремонта на СТО.',
        },
        {
          badge: 'Битые авто',
          title: 'После ДТП и аварийные',
          desc: 'Кузовные повреждения, сработавшие подушки безопасности. Бесплатный эвакуатор в сервисный бокс.',
        },
        {
          badge: 'Иностранный учет',
          title: 'На иностранных номерах',
          desc: 'Автомобили на номерах РФ, Армении, Украины, Беларуси, Казахстана. Помощь с растаможкой.',
        },
        {
          badge: 'Минивэны / Бусы',
          title: 'Коммерческий транспорт',
          desc: 'Минивэны под туризм (Toyota Alphard, Vito) и фургоны (Ford Transit, Sprinter).',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Честные ответы на сложные вопросы',
      desc: 'Все, что важно знать перед тем, как продать автомобиль нашему сервису.',
      customQuestionNote: 'Остался индивидуальный вопрос по документам или банку?',
      askMasterBtn: 'Задать вопрос мастеру напрямую в WhatsApp →',
      questions: [
        {
          q: 'Почему мне просто не продать машину дороже на MyAuto?',
          a: 'Если у вас есть запас времени от 3 недель до 2 месяцев, вы готовы ежедневно отвечать на звонки, устраивать показы незнакомцам и торговаться у капота — MyAuto действительно может принести на 10–20% больше. Но если деньги нужны сегодня, горят билеты, машина не на ходу или вы не хотите тратить нервы — мы решаем задачу за 2 часа «под ключ».',
        },
        {
          q: 'Что если на авто висит автокредит или залог в TBC / Bank of Georgia?',
          a: 'Это типовой кейс. Мы запрашиваем в отделении банка точную справку об остатке задолженности, переводим деньги банку для моментального закрытия кредита, снимаем обременение в Service Agency и оставшуюся разницу выплачиваем вам наличными в кассе или переводом.',
        },
        {
          q: 'Изменится ли цена после приезда в ваш автосервис CheckPoint?',
          a: 'Если фото и состояние, которые вы отправили в WhatsApp, соответствуют действительности — сумма останется строго внутри предварительной онлайн-вилки. Торг возможен только в случае обнаружения скрытых критических дефектов (например, трещина в блоке, сильная деформация лонжеронов), которые мастер лично покажет на подъемнике.',
        },
        {
          q: 'В какой валюте и как я получу расчет?',
          a: 'Вы получаете 100% суммы сразу после подписания документов в любой удобной форме: 1) Наличные доллары ($ USD) или грузинские лари (₾ GEL) с пересчетом на детекторе; 2) Безналичный перевод на счет в TBC Bank или Bank of Georgia; 3) Криптовалюта USDT (TRC-20 / BEP-20) на ваш кошелек без комиссий.',
        },
        {
          q: 'Как продать машину, если она не на ходу или после серьезной аварии?',
          a: 'Сделайте несколько детальных фото повреждений и отправьте их в наш WhatsApp. Мы рассчитаем стоимость выкупа с учетом остаточной стоимости. Если цена вас устраивает — мы направляем собственный эвакуатор по Батуми, забираем авто и оформляем сделку. Эвакуатор для вас бесплатен.',
        },
        {
          q: 'Какие документы нужны для сделки?',
          a: 'Всего два документа: ваш паспорт (загранпаспорт для иностранцев) и свидетельство о регистрации авто (техпаспорт). Заявления и госпошлины в Service Agency оформляются на месте.',
        },
      ],
    },
    footer: {
      about: 'Специализированный центр экспресс-выкупа автомобилей в Батуми с собственным диагностическим автосервисом CheckPoint. Юридическая чистота, закрытие банковских залогов и моментальный расчет в кассе.',
      officialDeal: 'Официальное оформление в Service Agency MIA',
      contactsTitle: 'Контакты и адрес СТО',
      boxText: 'Бокс 4 (СТО CheckPoint)',
      hoursText: 'СТО: Пн–Вс с 10:00 до 19:00 (Оценка в мессенджерах)',
      contactMaster: 'Связь с оценщиком',
      masterNote: 'Отправьте фото машины и техпаспорта в мессенджер — мастер пришлет вилку цен через 10 минут.',
      rights: '© 2026 SellPoint BATUMI. Все права защищены.',
      cityService: 'Срочный выкуп автомобилей в Батуми.',
    },
    floating: {
      btnWa: 'Оценить в WhatsApp',
      btnTg: 'В Telegram',
    },
  },

  ka: {
    header: {
      descriptor: 'ავტომობილების სასწრაფო გამოსყიდვა საკუთარი სერვისით',
      onlineStatus: 'ონლაინ შეფასება 10:00 – 19:00',
      boxAddress: 'მამია ვარშანიძის 154 (CheckPoint ბოქსი)',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
    },
    hero: {
      badge: 'ბათუმი • ავტომობილის გამოსყიდვა ერთ დღეში',
      h1Title: 'ავტომობილების სასწრაფო გამოსყიდვა ბათუმში 2 საათში.',
      h1Accent: 'თანხა ადგილზევე,',
      h1End: 'გაფორმება ჩვენს ხარჯზე.',
      subtitle: 'დათვალიერება ჩვენს ავტოსერვისში ამწეზე 20 წუთში. გადამყიდველების და ზედმეტი ზარების გარეშე. სრული ანაზღაურება ნაღდი ფულით ან USDT-ით.',
      bullet1Title: 'ანგარიშსწორება ადგილზე',
      bullet1Desc: 'ნაღდი USD / GEL ან USDT გასაღების გადაცემისთანავე',
      bullet2Title: 'საკუთარი სერვისი CheckPoint',
      bullet2Desc: 'შემოწმება ამწეზე. ვაფიქსირებთ რეალურ ფასს ხელოვნური დაკლების გარეშე',
      bullet3Title: 'მომსახურების სააგენტო ჩვენზეა',
      bullet3Desc: 'აღრიცხვიდან მოხსნა და გადაფორმება შსს-ს სააგენტოში სრულად ჩვენი ხარჯით',
      bullet4Title: 'გირავნობის დაფარვა',
      bullet4Desc: 'TBC ან Bank of Georgia-ს ავტოსესხის დაფარვა გარიგების დღესვე',
    },
    quiz: {
      badge: 'ექსპრეს-შეფასება 10 წუთში',
      noSpam: 'ზარების და სპამის გარეშე',
      title: 'გაიგეთ სავარაუდო ღირებულება',
      desc: 'შეავსეთ 3 პარამეტრი და მოგვწერეთ ჩატში. სერვისის ოსტატი მოგწერთ რეალურ ფასს.',
      modelLabel: 'მარკა და მოდელი',
      modelPlaceholder: 'მაგ: Toyota Prius, BMW 3, Hyundai Elantra',
      yearLabel: 'გამოშვების წელი',
      yearSuffix: 'წ.',
      priceLabel: 'სასურველი ფასი ($)',
      pricePlaceholder: 'ფასი $',
      conditionLabel: 'მიმდინარე მდგომარეობა',
      conditions: {
        good: 'იდეალურ მდგომარეობაში',
        needs_repair: 'საჭიროებს შეკეთებას',
        accident: 'ავარიული / ნაავარიები',
        pledged: 'ბანკის გირავნობაში',
      },
      btnWhatsapp: 'ფასის გაგება WhatsApp-ში →',
      btnTelegram: 'ფასის გაგება Telegram-ში',
      trustNote: 'გპასუხობთ სერვისის ხელოსანი და არა ბოტი',
      waPreFill: 'გამარჯობა! მსურს მანქანის გამოსყიდვის ფასის გაგება ბათუმში.',
    },
    discount: {
      badge: 'გამჭვირვალე ბიზნეს-მოდელი',
      title: 'ჩვენ ვყიდულობთ საბაზრო ფასზე 15–25%-ით ნაკლებად. გულწრფელად გიხსნით რაში იხდით.',
      desc: 'თუ გაქვთ 1–2 თვე დრო, მზად ხართ უპასუხოთ ათობით ზარს და ევაჭროთ გადამყიდველებს MyAuto-ზე — იქ გაყიდვა უფრო მომგებიანია. ჩვენ ვართ მათთვის, ვისთვისაც დრო, უსაფრთხოება და თანხის მომენტალურად მიღება პრიორიტეტია.',
      card1Badge: 'სასწრაფო გამგზავრება',
      card1Title: 'გეჩქარებათ ფრენა',
      card1Desc: 'გაფრენამდე დარჩა 2 დღე. არ გსურთ მანქანის ქუჩაში დატოვება ან მინდობილობით გაურკვეველ პირზე გადაცემა.',
      card1Solution: '11:00-ზე სერვისში — 13:00-ზე გაქვთ ნაღდი USD/USDT და მანქანა გადაფორმებულია.',
      card2Badge: 'საბანკო ვალდებულება',
      card2Title: 'სესხი TBC-ში ან BOG-ში',
      card2Desc: 'MyAuto-ს მყიდველები ითხოვენ სესხის წინასწარ დაფარვას თქვენი ხარჯით, რაც ხშირად შეუძლებელია.',
      card2Solution: 'ჩვენ თვითონ ვფარავთ სესხს ბანკში, ვხსნით ყადაღას, სხვაობას კი გაძლევთ ხელზე.',
      card3Badge: 'სიმშვიდე და უსაფრთხოება',
      card3Title: 'გადაიღალეთ მყიდველებით',
      card3Desc: 'ღამის ზარები, განვადების მოთხოვნები, უაზრო ნახვები და ფასის უსაფუძვლო კლება ყოველ შეხვედრაზე.',
      card3Solution: 'მხოლოდ 1 ვიზიტი ჩვენს სუფთა ბოქსში. არანაირი უაზრო ზარები.',
      card4Badge: 'ტექნიკური დეფექტები',
      card4Title: 'რთული რემონტი / ავარია',
      card4Desc: 'ძრავის ან კოლოფის პრობლემა, დარტყმული ძარა. ათასობით დოლარის ჩადება გაყიდვამდე არ ღირს.',
      card4Solution: 'ვაფასებთ ჩვენი სერვისის საბითუმო ფასებით. თქვენ არ ხარჯავთ არცერთ ლარს.',
      solutionPrefix: 'გადაწყვეტა:',
    },
    service: {
      badge: 'დაცვა უსამართლო ვაჭრობისგან',
      title: 'დათვალიერება CheckPoint სერვისში: რატომ არის ეს გამყიდველისთვის მომგებიანი',
      desc: 'ჩვენ პრინციპულად არ ვამოწმებთ მანქანებს ბნელ პარკინგებზე და არ «ვუკლებთ ფასს თვალით». თქვენ მობრძანდებით თანამედროვე ავტოსერვისში მოსაცდელი სივრცით.',
      feat1Title: 'ამწე და Launch სკანერი 20 წუთში',
      feat1Desc: 'თუ პრობლემა არსებობს — გაჩვენებთ თქვენი თანდასწრებით, არ ვიგონებთ არარსებულ დეფექტებს.',
      feat2Title: 'არგუმენტირებული ხარჯთაღრიცხვა',
      feat2Desc: 'ნებისმიერი ფასდაკლება ემყარება ჩვენი სერვისის ნაწილების თვითღირებულებას და არა გადამყიდველის ფანტაზიას.',
      feat3Title: 'ფასის ფიქსაცია სააგენტოში წასვლამდე',
      feat3Desc: 'სერვისში შეთანხმებული თანხა მომსახურების სააგენტოში ერთი დოლარითაც არ შეიცვლება.',
      brokenBannerTitle: 'მანქანა არ იქოქება ან ავარიულია?',
      brokenBannerDesc: 'ოსტატის გასვლა სკანერით ან ჩვენი ევაკუატორი უფასოდ.',
      brokenBannerBtn: 'გამოძახება',
      brokenBannerMsg: 'გამარჯობა! მანქანა არ დადის, მჭირდება ოსტატის გასვლა/ევაკუატორი ბათუმში.',
      locationLabel: 'დათვალიერების ადგილი',
      stoTitle: 'СТО CheckPoint',
      boxLabel: 'ბოქსი 4',
      addrLabel: 'მისამართი:',
      addrValue: 'ბათუმი, მამია ვარშანიძის 154 (აპოლოს მოპირდაპირედ)',
      hoursLabel: 'სამუშაო საათები:',
      hoursValue: '10:00-დან 19:00-მდე ყოველდღე',
      clientsLabel: 'კლიენტებისთვის:',
      clientsValue: 'სუფთა მოსაცდელი, ყავა, Wi-Fi და კუპიურების მთვლელი აპარატი',
      btnGoogle: 'Google Maps-ში გახსნა',
      btnYandex: 'Yandex Maps-ში გახსნა',
    },
    steps: {
      badge: 'გამჭვირვალე პროცესი',
      title: 'WhatsApp-ში მოწერიდან თანხის მიღებამდე: 4 ნაბიჯი 2 საათში',
      desc: 'არ დაგჭირდებათ საბუთებში გარკვევა — ყველა ეტაპს ერთად გავდივართ.',
      step1Title: 'შეფასება ფოტოთი',
      step1Desc: 'გვიგზავნით მანქანის და ტექპასპორტის ფოტოს. ოსტატი აანალიზებს ბაზარს და გაწვდით მყარ ფასს.',
      step2Title: 'შემოწმება სერვისში',
      step2Desc: 'მოდიხართ ჩვენს ბათუმის სერვისში. დიაგნოსტიკა ამწეზე და საბოლოო ფასის დაფიქსირება.',
      step3Title: 'მომსახურების სააგენტო',
      step3Desc: 'მივდივართ ბათუმის სააგენტოში. ვხსნით გირავნობას, გადაფორმების ხარჯებს ჩვენ ვიხდით.',
      step4Title: '100% ანაზღაურება',
      step4Desc: 'ნაღდი დოლარი ($) / ლარი (₾) აპარატით გადათვლით, გადარიცხვა TBC/BOG-ზე ან USDT.',
    },
    carTypes: {
      badge: 'ყველა სიტუაცია',
      title: 'რა სახის ავტომობილებს ვიბარებთ',
      desc: 'ვიბარებთ როგორც იდეალურ უცხოურ მანქანებს, ასევე პრობლემურ და ავარიულებს ბათუმში.',
      sameDayPayout: 'თანხა მიმართვის დღესვე',
      items: [
        {
          badge: 'სტანდარტული',
          title: 'ქართული ნომრებით (GE)',
          desc: 'სედანები, ჯიპები, ჰიბრიდები, ელექტრომობილები 2015 წლიდან. გარიგება 1.5 საათში.',
        },
        {
          badge: 'სირთულეები',
          title: 'გირავნობაში და ავტოსესხში',
          desc: 'TBC, BOG, ლიზინგი ან მიკროსაფინანსოები. დავფარავთ სესხს გარიგების დღესვე.',
        },
        {
          badge: 'შესაკეთებელი',
          title: 'ტექნიკური გაუმართაობით',
          desc: 'ძრავის, გადაცემათა კოლოფის, ბატარეის პრობლემები. შეფასება სერვისის შეკეთების გათვალისწინებით.',
        },
        {
          badge: 'ავარიული',
          title: 'ავარიის შემდეგ',
          desc: 'ძარის დაზიანებები, გახსნილი აირბაგები. უფასო ევაკუატორი სერვისის ბოქსში.',
        },
        {
          badge: 'უცხოური ნომრები',
          title: 'უცხოური რეგისტრაციით',
          desc: 'ავტომობილები რუსეთის, სომხეთის, უკრაინის, ბელარუსის, ყაზახეთის ნომრებით. განბაჟების დახმარება.',
        },
        {
          badge: 'კომერციული',
          title: 'მინივენები და მიკროავტობუსები',
          desc: 'ტურისტული მინივენები (Toyota Alphard, Vito) და ფურგონები (Ford Transit, Sprinter).',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'პასუხები ხშირად დასმულ კითხვებზე',
      desc: 'ყველაფერი, რაც მნიშვნელოვანია იცოდეთ მანქანის ჩაბარებამდე.',
      customQuestionNote: 'გაქვთ ინდივიდუალური შეკითხვა ბანკთან ან დოკუმენტებთან დაკავშირებით?',
      askMasterBtn: 'დაუსვით კითხვა პირდაპირ WhatsApp-ში →',
      questions: [
        {
          q: 'რატომ არ გავყიდო მანქანა უფრო ძვირად MyAuto-ზე?',
          a: 'თუ გაქვთ 3 კვირიდან 2 თვემდე დრო, მზად ხართ უპასუხოთ ზარებს და ევაჭროთ უცნობებს — MyAuto-ზე შესაძლოა 10–20%-ით მეტი მიიღოთ. მაგრამ თუ თანხა დღესვე გჭირდებათ, გეჩქარებათ ან მანქანა არ დადის — ჩვენ საქმეს 2 საათში ვაგვარებთ.',
        },
        {
          q: 'რა ხდება თუ მანქანა TBC-ს ან Bank of Georgia-ს სესხშია?',
          a: 'ეს ჩვეულებრივი შემთხვევაა. ბანკიდან ვითხოვთ ნარჩენი თანხის ამონაწერს, ვფარავთ სესხს პირდაპირ ბანკში, ვხსნით ყადაღას სააგენტოში და დარჩენილ თანხას გაძლევთ ხელზე.',
        },
        {
          q: 'შეიცვლება თუ არა ფასი CheckPoint სერვისში მოსვლის შემდეგ?',
          a: 'თუ ფოტოები და მონაცემები შეესაბამება რეალობას — თანხა დარჩება ზუსტად წინასწარ ნათქვამ ფარგლებში. დაკლება შესაძლებელია მხოლოდ ისეთი ფარული კრიტიკული დეფექტის აღმოჩენისას, რომელსაც ოსტატი ამწეზე პირადად გაჩვენებთ.',
        },
        {
          q: 'რომელ ვალუტაში და როგორ მივიღებ თანხას?',
          a: 'თანხას იღებთ 100% საბუთების ხელმოწერისთანავე: 1) ნაღდი აშშ დოლარი ($ USD) ან ლარი (₾ GEL) აპარატით შემოწმებით; 2) საბანკო გადარიცხვა TBC-ში ან საქართველოს ბანკში; 3) USDT კრიპტოვალუტით საკომისიოს გარეშე.',
        },
        {
          q: 'როგორ გავყიდო მანქანა, თუ ის ავარიულია და არ დადის?',
          a: 'გამოგვიგზავნეთ დაზიანებების ფოტოები WhatsApp-ში. ჩვენ დაგითვლით ღირებულებას. შეთანხმების შემთხვევაში გამოვგზავნით ჩვენს ევაკუატორს ბათუმში სრულიად უფასოდ.',
        },
        {
          q: 'რა დოკუმენტებია საჭირო?',
          a: 'მხოლოდ ორი დოკუმენტი: თქვენი პირადობის მოწმობა / პასპორტი და ავტომობილის ტექპასპორტი. დანარჩენი ფორმდება სააგენტოში ადგილზე.',
        },
      ],
    },
    footer: {
      about: 'ბათუმში ავტომობილების ექსპრეს-გამოსყიდვის სპეციალიზებული ცენტრი საკუთარი CheckPoint დიაგნოსტიკური სერვისით. იურიდიული სისუფთავე, საბანკო გირავნობის დაფარვა და მომენტალური ანგარიშსწორება.',
      officialDeal: 'ოფიციალური გაფორმება შსს-ს მომსახურების სააგენტოში',
      contactsTitle: 'კონტაქტები და სერვისის მისამართი',
      boxText: 'ბოქსი 4 (СТО CheckPoint)',
      hoursText: 'სერვისი: ორშ–კვრ 10:00 - 19:00',
      contactMaster: 'კავშირი შემფასებელთან',
      masterNote: 'გამოგვიგზავნეთ მანქანის და ტექპასპორტის ფოტო — ოსტატი მოგწერთ ფასს 10 წუთში.',
      rights: '© 2026 SellPoint BATUMI. ყველა უფლება დაცულია.',
      cityService: 'ავტომობილების სასწრაფო გამოსყიდვა ბათუმში.',
    },
    floating: {
      btnWa: 'შეფასება WhatsApp-ში',
      btnTg: 'Telegram-ში',
    },
  },

  en: {
    header: {
      descriptor: 'Fast car buying service with our own workshop',
      onlineStatus: 'Online appraisal 10:00 – 19:00',
      boxAddress: '154 Mamiya Varshanidze St (CheckPoint Box)',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
    },
    hero: {
      badge: 'Batumi • Same-day car buyout',
      h1Title: 'Instant Car Buying in Batumi in 2 Hours.',
      h1Accent: 'Immediate Cash,',
      h1End: 'we handle all paperwork.',
      subtitle: 'Inspection at our CheckPoint auto service in 20 minutes on a car lift. No endless viewings or street dealers. Final payout in cash or USDT.',
      bullet1Title: 'Instant Payout',
      bullet1Desc: 'Cash USD / GEL or USDT the moment keys are handed over',
      bullet2Title: 'Our CheckPoint Service',
      bullet2Desc: 'Lift inspection. Honest price locked without roadside bargaining',
      bullet3Title: 'Service Agency MIA Covered',
      bullet3Desc: 'Deregistration and title transfer fees covered 100% by us',
      bullet4Title: 'Bank Liens Settled',
      bullet4Desc: 'We pay off car loans in TBC or Bank of Georgia on the same day',
    },
    quiz: {
      badge: 'Express quote in 10 mins',
      noSpam: 'No spam or cold calls',
      title: 'Get an estimated price range',
      desc: 'Enter 3 details and open the chat. Our technician will reply with a realistic quote.',
      modelLabel: 'Make and model',
      modelPlaceholder: 'e.g. Toyota Prius, BMW 3, Hyundai Elantra',
      yearLabel: 'Year of manufacture',
      yearSuffix: '',
      priceLabel: 'Target price ($)',
      pricePlaceholder: 'Desired amount in $',
      conditionLabel: 'Current condition',
      conditions: {
        good: 'In great running condition',
        needs_repair: 'Needs mechanical repair',
        accident: 'After accident / Damaged',
        pledged: 'Bank loan / Collateral',
      },
      btnWhatsapp: 'Get Price Quote via WhatsApp →',
      btnTelegram: 'Get Price Quote via Telegram',
      trustNote: 'Answered by real service mechanic, not a bot',
      waPreFill: 'Hello! I want to get an instant buyout quote for my car in Batumi.',
    },
    discount: {
      badge: 'Transparent Business Model',
      title: 'We buy cars at a 15–25% discount below market price. Here is honestly what you pay for.',
      desc: 'If you have 1–2 months to spare, patience to answer dozens of calls and bargain in parking lots — selling on MyAuto will yield more. We are the solution for those who value time, safety and immediate cash today.',
      card1Badge: 'Urgent departure / Relocation',
      card1Title: 'Flights or Visa Expiring',
      card1Desc: 'Your flight is in 2 days. You cannot leave the car unattended or entrust it to strangers with power of attorney.',
      card1Solution: '11:00 on the lift — 13:00 you have cash USD/USDT and car is officially deregistered.',
      card2Badge: 'Bank Loans & Debt',
      card2Title: 'Loan with TBC or BOG',
      card2Desc: 'Regular private buyers demand that you pay off the loan with your own savings first.',
      card2Solution: 'We pay off the remaining balance at the bank branch, clear the lien, and give you the rest in cash.',
      card3Badge: 'Peace of mind',
      card3Title: 'Tired of Flippers & Haggling',
      card3Desc: 'Midnight phone calls, lowball offers, time-wasting test drives and aggressive price chipping.',
      card3Solution: 'Just one visit to our clean service facility. Deal closed with dignity.',
      card4Badge: 'Mechanical issues',
      card4Title: 'Needs Major Repair or Crash',
      card4Desc: 'Knocking engine, failing transmission or body damage. Spending thousands on repair before selling makes no sense.',
      card4Solution: 'We calculate value based on our wholesale parts costs. You spend zero GEL on repairs.',
      solutionPrefix: 'Solution:',
    },
    service: {
      badge: 'Protection from unfair haggling',
      title: 'Inspection at CheckPoint Auto Service: Why it protects the seller',
      desc: 'We never inspect vehicles in supermarket parking lots or guess defects by sound. You arrive at an equipped stationary facility with a comfortable customer lounge.',
      feat1Title: 'Lift & Launch Diagnostic Scanner in 20 min',
      feat1Desc: 'If there is an issue, we show it clearly with our fingers on the lift instead of inventing hidden faults.',
      feat2Title: 'Fair repair estimate at wholesale rates',
      feat2Desc: 'Any price adjustment is calculated using our internal parts cost, not arbitrary broker discounts.',
      feat3Title: 'Price locked before heading to the Agency',
      feat3Desc: 'The final figure agreed upon at the workshop will not decrease by a single dollar at the Ministry agency.',
      brokenBannerTitle: 'Car does not run or wrecked after crash?',
      brokenBannerDesc: 'Technician on-site inspection or our tow truck provided free of charge.',
      brokenBannerBtn: 'Request Tow',
      brokenBannerMsg: 'Hello! My car is not running, I need mechanic inspection or tow truck in Batumi.',
      locationLabel: 'Inspection Location',
      stoTitle: 'CheckPoint Workshop',
      boxLabel: 'Box 4',
      addrLabel: 'Address:',
      addrValue: '154 Mamiya Varshanidze St, Batumi (opposite Apolo building)',
      hoursLabel: 'Working hours:',
      hoursValue: '10:00 to 19:00 daily without breaks',
      clientsLabel: 'For clients:',
      clientsValue: 'clean waiting lounge, coffee, Wi-Fi and currency counter machine',
      btnGoogle: 'Open in Google Maps',
      btnYandex: 'Open in Yandex Maps',
    },
    steps: {
      badge: 'Transparent Process',
      title: 'From WhatsApp message to cash in hand: 4 steps in 2 hours',
      desc: 'No need to navigate Georgian bureaucracy on your own — we guide you through every step.',
      step1Title: 'Photo Appraisal',
      step1Desc: 'Send car photos and registration certificate via messenger. Our valuer reviews the market and gives a firm range.',
      step2Title: 'CheckPoint Inspection',
      step2Desc: 'Drive to our Batumi garage. Lift diagnostic, final price confirmed with zero surprises.',
      step3Title: 'Service Agency MIA',
      step3Desc: 'We ride together to Batumi Service Agency. Liens cleared, ownership transferred. All government fees paid by us.',
      step4Title: '100% Instant Payout',
      step4Desc: 'Cash USD ($) or GEL (₾) verified on currency counter, bank transfer in TBC/BOG or instant USDT.',
    },
    carTypes: {
      badge: 'All Situations Covered',
      title: 'Types of vehicles we purchase',
      desc: 'From fresh foreign cars to non-running and accident-damaged vehicles in Batumi.',
      sameDayPayout: 'Same-day payout',
      items: [
        {
          badge: 'Standard',
          title: 'Georgian Registration (GE)',
          desc: 'Sedans, crossovers, hybrids, electric vehicles from 2015+. Deal completed in 1.5 hours.',
        },
        {
          badge: 'Complex',
          title: 'Under Loan or Collateral',
          desc: 'TBC Bank, Bank of Georgia, leasing or microfinance loans. Debt paid off on the deal day.',
        },
        {
          badge: 'Needs Work',
          title: 'Mechanical Defects',
          desc: 'Issues with engine, gearbox, hybrid battery or suspension. Fair evaluation based on our garage repairs.',
        },
        {
          badge: 'Accident',
          title: 'Crash & Collision Damaged',
          desc: 'Body damage, deployed airbags. Free flatbed tow truck to our workshop.',
        },
        {
          badge: 'Foreign Plates',
          title: 'Foreign Registered Vehicles',
          desc: 'Cars on RU, AM, UA, BY, KZ plates or expiring temporary import permits. Customs assistance.',
        },
        {
          badge: 'Commercial',
          title: 'Vans & Tour Minibuses',
          desc: 'Minivans used in tourism (Toyota Alphard, Vito) and cargo vans (Ford Transit, Sprinter).',
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Honest Answers to Hard Questions',
      desc: 'Everything you need to know before selling your car to our service.',
      customQuestionNote: 'Have a specific question regarding your documents or bank loan?',
      askMasterBtn: 'Ask the technician directly on WhatsApp →',
      questions: [
        {
          q: 'Why should I not sell it for more on MyAuto?',
          a: 'If you have 3 weeks to 2 months of spare time, are ready to answer calls and negotiate in parking lots — MyAuto may yield 10–20% more. But if you need money today, are moving abroad or the car is not running — we deliver a turnkey solution in 2 hours.',
        },
        {
          q: 'What if the car is under a bank loan with TBC or Bank of Georgia?',
          a: 'This is a standard process. We obtain an official loan balance statement, transfer funds to the bank to close the debt immediately, remove restrictions at the Service Agency and hand you the remaining balance.',
        },
        {
          q: 'Will the price change after I arrive at CheckPoint workshop?',
          a: 'If the photos and description match reality, the price remains strictly within the initial online estimate. Adjustments happen only if hidden critical defects (like engine block crack or frame deformity) are uncovered on the lift.',
        },
        {
          q: 'In which currency will I receive payment?',
          a: 'You get 100% of the funds upon contract signing: 1) Cash US Dollars ($ USD) or Georgian Lari (₾ GEL) checked on a banknote counter; 2) Direct transfer to TBC Bank or Bank of Georgia; 3) Cryptocurrency USDT (TRC-20 / BEP-20) with 0% fee.',
        },
        {
          q: 'How do I sell a non-running or crashed car?',
          a: 'Send photos of the damage via WhatsApp. We will calculate the salvage buyout value. If agreed, we send our own tow truck across Batumi free of charge.',
        },
        {
          q: 'What documents are required from me?',
          a: 'Only two documents: your passport (foreign passport for non-residents) and vehicle registration certificate (tech passport). Everything else is handled on-site at the Service Agency.',
        },
      ],
    },
    footer: {
      about: 'Specialized vehicle express buyout centre in Batumi with our own CheckPoint diagnostics facility. Clean legal titles, bank lien clearance and instant cashier payout.',
      officialDeal: 'Official procedure at MIA Service Agency Georgia',
      contactsTitle: 'Contacts & Workshop Address',
      boxText: 'Box 4 (CheckPoint Workshop)',
      hoursText: 'Workshop: Mon–Sun 10:00 to 19:00',
      contactMaster: 'Contact the Appraiser',
      masterNote: 'Send photos of the car and tech passport to WhatsApp — get an estimated quote in 10 minutes.',
      rights: '© 2026 SellPoint BATUMI. All rights reserved.',
      cityService: 'Express vehicle buyout in Batumi.',
    },
    floating: {
      btnWa: 'Get Quote in WhatsApp',
      btnTg: 'Via Telegram',
    },
  },
}
