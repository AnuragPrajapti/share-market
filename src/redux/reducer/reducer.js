import { GET_STOCKS } from "../reducerType"


const getStockData = (state = null, action) => {
    switch (action.type) {
      case 'GET_STOCKS':
        return action.payload
      default:
        return state
    }
  }
  
  export default getStockData