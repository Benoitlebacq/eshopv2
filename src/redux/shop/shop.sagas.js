import { takeLatest, call, put, all } from "redux-saga/effects";
// put va déclancher une action (comme dispatch)
// call va prendre une fonction et ce qu'on lui passe en para en 2e val
// takeEvery va ecouter une action et va relancer (nouvelles créée) la fonction en 2e para a chq fois qu'elle se declenchera
// takeLatest fait comme take every mais ne se declenche qu'une seule fois , la derniere qui est appelée
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
