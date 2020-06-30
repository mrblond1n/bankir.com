import { ADD_EVENT, CREATE_ERROR } from "../../constants/types"

export const createEvent = (event) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  // const profile = getState().firebase.profile
  const authorId = getState().firebase.auth.uid
  firestore.collection(authorId).add({
    ...event,
    createAt: new Date()
  }).then(() => dispatch({ type: ADD_EVENT, event }))
    .catch(error => dispatch({ type: CREATE_ERROR, error }))
}