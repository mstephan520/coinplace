import { combineReducers } from "redux";
import coinsReducer from "./coins_reducer";
import portfolioReducer from "./portfolio_reducer";
import tradesReducer from "./trades_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    coins: coinsReducer,
    portfolio: portfolioReducer,
    trades: tradesReducer,
    users: usersReducer
})

export default entitiesReducer;