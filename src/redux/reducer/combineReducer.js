import { combineReducers } from "redux";
import { IStock } from "./stockReducer";

const CombineReducers = combineReducers({
    IStock : IStock
})

export default CombineReducers;