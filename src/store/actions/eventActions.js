import { ADD_EVENT, CREATE_ERROR, REMOVE_EVENT } from "../../constants/types"

export const createEvent = (event) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid
  firestore.collection('events').add({
    ...event,
    authorId
  }).then(() => dispatch({ type: ADD_EVENT, event }))
    .catch(error => dispatch({ type: CREATE_ERROR, error }))
}
export const removeEvent = (id) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('events').doc(id).delete().then(() => dispatch({ type: REMOVE_EVENT }))
    .catch(error => dispatch({ type: CREATE_ERROR, error }))
}