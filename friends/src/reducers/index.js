import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  friends: [],
  isFetching: false,
  err: '',
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING: 
      return {
        ...state,
        isFetching: true,
      }
    case SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isFetching: false,
      }
    case FAILURE: 
      return {
        ...state,
        isFetching: false,
        err: action.payload
      }
    default: 
      return state
  }
}

export default reducer