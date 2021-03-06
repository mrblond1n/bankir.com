import { SET_DATE, SET_START_DATE, SET_END_DATE, SET_FILTER } from "../../constants/types";

export const setDate = date => dispatch => dispatch({ type: SET_DATE, date })

export const setStartDate = date => dispatch => dispatch({ type: SET_START_DATE, date })

export const setEndDate = date => dispatch => dispatch({ type: SET_END_DATE, date })

export const setFilter = filter => dispatch => dispatch({ type: SET_FILTER, filter })