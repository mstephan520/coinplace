import { combineReducers } from "redux";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    error: errorsReducer
})

export default rootReducer