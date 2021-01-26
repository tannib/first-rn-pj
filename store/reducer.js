import * as actionTypes from './actions/actionTypes'

const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RETRIEVE_TOKEN:
      return {
        ...state,
        isLoading: false,
        userToken: action.payload.token,
      }
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoading: false,
        userToken: action.payload.token,
        userName: action.payload.id,
      }
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoading: false,
        userToken: null,
        userName: null,
      }
    case actionTypes.REGISTER:
      return {
        ...state,
        isLoading: false,
        userToken: action.payload.token,
        userName: action.payload.id,
      }
  }
  return state
}

export default reducer
