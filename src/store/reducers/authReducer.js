import { LOGIN_FAILED, LOGIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_FAILED } from "../../constants/types";

const INITIAL_STATE = {
  authError: null
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_FAILED:
      return { ...state, authError: action.error.message }
    case LOGIN_SUCCESS:
      return { ...state, authError: null }
    case SIGNOUT_SUCCESS:
      return state
    case SIGNUP_SUCCESS:
      return { ...state, authError: null }
    case SIGNUP_FAILED:
      return { ...state, authError: action.error.message }
    default:
      return state
  }
}

export default authReducer