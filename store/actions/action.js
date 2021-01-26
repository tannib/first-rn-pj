import * as actionTypes from './actionTypes'

export const signIn = (foundUser) => {
  let userToken
  let userName
  userToken = String(foundUser[0].userToken)
  userName = foundUser[0].email

  return {
    type: actionTypes.LOGIN,
    payload: { id: userName, token: userToken },
  }
}

export const signOut = () => {
  return {
    type: actionTypes.LOGOUT,
  }
}

export const signUp = () => {
  setUserToken('abcd'), setIsLoading(false)
}
