import React from 'react'
import { useStateValue } from '../Context'
import { UserForm } from '../components/UserForm'

const NotRegisteredUser = () => {
  const [, dispatch] = useStateValue()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'activateAuth', isAuth: true })
  }

  return <UserForm onSubmit={handleSubmit} />
}

export default NotRegisteredUser
