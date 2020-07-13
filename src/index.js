import React from "react";
import { render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import firebase from "firebase/app";
import { Backdrop, makeStyles, CircularProgress } from "@material-ui/core";

const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
    reduxFirestore(fbConfig, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users', // where profiles are stored in database
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions'
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function AuthIsLoaded({ children }) {
  const classes = useStyles();
  const auth = useSelector(state => state.firebase.auth)
  const backdrop = <Backdrop className={classes.backdrop} open> <CircularProgress color="inherit" /> </Backdrop>;
  if (!isLoaded(auth)) return backdrop
  return children
}

const app =
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>

render(app, document.getElementById("root"));
serviceWorker.unregister();