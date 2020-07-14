import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT, ADD_TAG, SET_NOTIFY } from "../../constants/types"

export const createEvent = (event) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid
  firestore.collection('events').add({ ...event, authorId })
    .then(() => dispatch({ type: ADD_EVENT, event }))
    .catch(error => {
      const notify = { text: error?.message || 'Unknow error', theme: 'error' }
      dispatch({ type: SET_NOTIFY, notify })
    })
}
export const removeEvent = (id) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('events').doc(id).delete().then(() => dispatch({ type: REMOVE_EVENT }))
    .catch(error => {
      const notify = { text: error?.message || 'Unknow error', theme: 'error' }
      dispatch({ type: SET_NOTIFY, notify })
    })
}

export const updateEvent = (id, event) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('events').doc(id).update(event).then(() => dispatch({ type: UPDATE_EVENT }))
    .catch(error => {
      const notify = { text: error?.message || 'Unknow error', theme: 'error' }
      dispatch({ type: SET_NOTIFY, notify })
    })
}

export const addTag = tag => (dispatch, getState, { getFirebase, getFirestore }) => {
  // dispatch({ type: SET_NOTIFY })
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;
  firestore.collection('tags').add({
    ...tag,
    authorId
  }).then(() => dispatch({ type: ADD_TAG, tag }))
    .catch(error => {
      const notify = { text: error?.message || 'Unknow error', theme: 'error' }
      dispatch({ type: SET_NOTIFY, notify })
    })
}