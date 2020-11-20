import React, { Suspense } from 'react'
import { Redirect, Router } from '@reach/router'

import { useStateValue } from './Context'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'

const Favs = React.lazy(() =>
  import(/* webpackChunkName: "favs" */ './pages/Favs')
)
const User = React.lazy(() =>
  import(/* webpackChunkName: "user" */ './pages/User')
)
const Home = React.lazy(() =>
  import(/* webpackChunkName: "home" */ './pages/Home')
)
const Detail = React.lazy(() =>
  import(/* webpackChunkName: "detail" */ './pages/Detail')
)
const NotFound = React.lazy(() =>
  import(/* webpackChunkName: "notfound" */ './pages/NotFound')
)
const NotRegisteredUser = React.lazy(() =>
  import(
    /* webpackChunkName: "notregistereduser" */ './pages/NotRegisteredUser'
  )
)

const App = () => {
  const [{ isAuth }] = useStateValue()
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
export default App
