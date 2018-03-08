import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import healthRequestsReducer from "./healthRequestsReducer";

export default combineReducers({
    login: loginReducer,
    healthRequests: healthRequestsReducer
});