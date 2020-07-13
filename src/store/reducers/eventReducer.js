import { ADD_EVENT, CREATE_ERROR, UPDATE_EVENT } from "../../constants/types";

const INITIAL_STATE = {
  events: []
}

const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return state
    case UPDATE_EVENT:
      return state
    case CREATE_ERROR:
      return state
    default:
      return state
  }
}

export default projectReducer