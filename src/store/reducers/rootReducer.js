import authReducer from './authReducer'
import eventsReducer from './eventReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer