import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";
// all prend un array de sagas et appelle (call) n'importe quel nombre de saga et les initialisent a des taches individuelles
export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
