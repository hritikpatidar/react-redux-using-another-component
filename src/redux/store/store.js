import { legacy_createStore } from "redux";
import rootReducer from "../reducer/Reducer";

let store = legacy_createStore(rootReducer)

console.log(store)
console.log(store.getState());
store.subscribe( ()=>{
  console.log(store.getState());
} );

export default store;