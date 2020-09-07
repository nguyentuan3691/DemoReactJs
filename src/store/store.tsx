import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
store.subscribe(function (){
    console.log(JSON.stringify(store.getState()));
})
export default store;