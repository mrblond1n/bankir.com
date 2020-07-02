import authReducer from './authReducer'
import eventsReducer from './eventReducer'
import filterReducer from './filterReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  filter: filterReducer
})

export default rootReducer