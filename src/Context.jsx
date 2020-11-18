import React, { createContext, useContext, useReducer } from 'react'

const Context = createContext()

const initialState = {
  isAuth: window.sessionStorage.getItem('token')
}

const activateAuth = ({ token }) => {
  window.sessionStorage.setItem('token', token)
  return true
}

const removeAuth = () => {
  window.sessionStorage.removeItem('token')
  return false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'activateAuth':
      return {
        ...state,
        isAuth: activateAuth(action)
      }
    case 'removeAuth':
      return {
        ...state,
        isAuth: removeAuth()
      }
    default:
      return state
  }
}

export const StateProvider = ({ children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
)

export const useStateValue = () => useContext(Context)
