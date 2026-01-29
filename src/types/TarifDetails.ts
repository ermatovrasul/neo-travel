export const TARIFF_DETAILS = {
  "no_refund_with_baggage": {
    title: "С багажом без возврата",
    price: '50000',
    features: [
      { label: "Багаж: 1 х 20 кг", status: true },
      { label: "Ручная кладь: 1 х 8 кг", status: true },
      { label: "Обмен: платный", status: true },
      { label: "Возврат: нет", status: false },
    ],
  },
  "refund_with_baggage": {
    title: "С багажом и с возвратом",
    price: '50000',
    features: [
      { label: "Багаж: 1 х 20 кг", status: true },
      { label: "Ручная кладь: 1 х 8 кг", status: true },
      { label: "Обмен: бесплатный", status: true },
      { label: "Возврат: есть", status: true },
    ]
  },
  "no_baggage_no_refund": {
    title: "Без багажа и без возврата",
    price: '50000',
    features: [
      { label: "Багаж: нет", status: false },
      { label: "Ручная кладь: 1 х 8 кг", status: true },
      { label: "Обмен: платный", status: true },
      { label: "Возврат: нет", status: false },
    ]
  }
};