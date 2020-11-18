import React from 'react'
import { useStateValue } from '../../Context'
import UserForm from './UserForm'
import { useRegisterMutation } from '../../hooks'

const RegisterUserForm = () => {
  const [, dispatch] = useStateValue()

  const [
    registerMutation,
    { loading: loadingRegister, error: errorRegister }
  ] = useRegisterMutation()

  const errorMsgRegistration =
    errorRegister && 'El usuario ya existe o algún problema'

  const handleSubmitRegistration = ({ email, password }) => {
    registerMutation({ variables: { input: { email, password } } }).then(
      ({ data }) => {
        const { signup: token } = data
        dispatch({ type: 'activateAuth', isAuth: true, token })
      }
    )
  }

  return (
    <UserForm
      disabled={loadingRegister}
      error={errorMsgRegistration}
      title='Registrarse'
      onSubmit={handleSubmitRegistration}
    />
  )
}

export default RegisterUserForm
