import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";



const configureStore = (preloadedState = {} ) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore;