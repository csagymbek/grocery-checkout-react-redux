import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./cart";

export const store = createStore(cartReducer, composeWithDevTools());
