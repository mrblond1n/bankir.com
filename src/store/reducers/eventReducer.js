import { ADD_EVENT, UPDATE_EVENT, ADD_TAG } from "../../constants/types";

const INITIAL_STATE = {
  events: [],
  tags: [
    { title: "Супермаркеты", method: "outcome" },
    { title: "Отдых и развлечения", method: "outcome" },
    { title: "Транспорт", method: "outcome" },
    { title: "Образование", method: "outcome" },
    { title: "Красота и здоровье", method: "outcome" },
    { title: "ЖКХ", method: "outcome" },
    { title: "Связь и коммуникации", method: "outcome" },
    { title: "Дом и ремонт", method: "outcome" },
    { title: "Рестораны и кафе", method: "outcome" },
    { title: "Госуслуги", method: "outcome" },
    { title: "Перевод и снятие наличных", method: "outcome" },
    { title: "Другое", method: "outcome" },
    { title: "Одежда и аксессуары", method: "outcome" },
    { title: 'Зарплата', method: 'income' },
    { title: 'Кэшбек', method: 'income' },
    { title: 'Подарок', method: 'income' }
  ]
}

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return state
    case UPDATE_EVENT:
      return state
    case ADD_TAG:
      return state
    default:
      return state
  }
}

export default projectReducer