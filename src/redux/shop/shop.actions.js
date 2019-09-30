import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = collectionsMap => ({
  type: "FETCH_COLLECTIONS_START"
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: "FETCH_COLLECTIONS_SUCCESS",
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: "FETCH_COLLECTIONS_FAILURE",
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection("collection");
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(err => dispatch(fetchCollectionsFailure(err.message)));
};
