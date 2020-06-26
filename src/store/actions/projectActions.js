import { ADD_PROJECT, CREATE_ERROR } from "../../constants/types"

export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile
  const authorId = getState().firebase.auth.uid
  firestore.collection('projects').add({
    ...project,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId: authorId,
    createAt: new Date()
  }).then(() => dispatch({ type: ADD_PROJECT, project }))
    .catch(error => dispatch({ type: CREATE_ERROR, error }))
}