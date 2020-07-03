import moment from 'moment';

import { SET_DATE, SET_START_DATE, SET_END_DATE, SET_FILTER } from "../../constants/types";

const INITIAL_STATE = {
  date: moment(),
  startDate: null,
  endDate: null,
  activeFilter: { name: 'month', title: 'Месяц' },
}

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.date }
    case SET_START_DATE:
      return { ...state, startDate: action.date }
    case SET_END_DATE:
      return { ...state, endDate: action.date }
    case SET_FILTER:
      return { ...state, activeFilter: action.filter }
    default:
      return state
  }
}

export default projectReducer