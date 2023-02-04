import * as type from "../types";

const inistioalState = {
  IStockData: [],
};

export function IStock(state = inistioalState, action) {
  switch (action.type) {
    case type.GET_STOCKS:
      return {
        ...state,
        IStock: action.payload,
      };
    default:
      return state;
  }
}

export function getStockData(data){
     return {
        type : type.GET_STOCKS,
        payload : data,
     }
}
