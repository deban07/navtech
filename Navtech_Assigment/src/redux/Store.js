import { createStore } from "redux";
import shoeReducer from "./reducer/shoeReducer";


const store = createStore(shoeReducer);

export default store;