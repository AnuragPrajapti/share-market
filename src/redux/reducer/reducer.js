import * as type from '../action/type';

const initialState = {
  getData: [],
  loading : false,
  error : ""  
}

export default function getStock(state = initialState, action) {
  switch (action.type) {
    case type.LOADING:
      return {
        ...state,
        loading: true,
      }
    case type.SUCCESS:
      return {
        ...state,
        loading: false,
        getData: action.payload
      }
    case type.ERROR:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}