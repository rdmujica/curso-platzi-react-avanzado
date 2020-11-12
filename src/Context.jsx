import React, { createContext, useContext, useReducer } from 'react'

const Context = createContext()

const initialState = {
  isAuth: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'activateAuth':
      return {
        ...state,
        isAuth: action.isAuth
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
