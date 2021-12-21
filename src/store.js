import { createStore } from "redux";
import { reducers } from "./Redux/Reducers";


//Reducers and then the state is provided and then a redux dev tool is added to see the store

const store = createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;