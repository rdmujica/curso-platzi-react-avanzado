import React from 'react'
import { Logo } from './components/Logo'
import { Home, Detail, Favs, User, NotRegisteredUser } from './pages'
import { GlobalStyles } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { NavBar } from './components/NavBar'
import { useStateValue } from './Context'

const App = () => {
  const [{ isAuth }] = useStateValue()
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      {isAuth
        ? (
          <Router>
            <Favs path='/favs' />
            <User path='/user' />
          </Router>
          )
        : (
          <Router>
            <NotRegisteredUser path='/favs' />
            <NotRegisteredUser path='/user' />
          </Router>
          )}
      <NavBar />
    </>
  )
}
export default App
