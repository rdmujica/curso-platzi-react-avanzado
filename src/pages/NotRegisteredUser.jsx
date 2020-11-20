import React from 'react'

import { LoginUserForm, RegisterUserForm } from '../components/UserForm'

const NotRegisteredUser = () => {
  return (
    <>
      <RegisterUserForm />
      <LoginUserForm />
    </>
  )
}

export default NotRegisteredUser
