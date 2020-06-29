import { LOGIN_SUCCESS, LOGIN_FAILED, SIGNOUT_SUCCESS, SIGNOUT_FAILED, SIGNUP_SUCCESS, SIGNUP_FAILED } from "../../constants/types";

export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => dispatch({ type: LOGIN_SUCCESS }))
      .catch(error => dispatch({ type: LOGIN_FAILED, error }))
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => dispatch({ type: SIGNOUT_SUCCESS }))
      .catch(error => dispatch({ type: SIGNOUT_FAILED, error }))
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email, newUser.password
    ).then(response => {
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => dispatch({ type: SIGNUP_SUCCESS }))
      .catch(error => dispatch({ type: SIGNUP_FAILED, error }))
  }
}