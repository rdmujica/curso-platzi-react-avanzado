import React from 'react'
import { useStateValue } from '../../Context'
import UserForm from './UserForm'
import { useLoginMutation } from '../../hooks'

const LoginUserForm = () => {
  const [, dispatch] = useStateValue()

  const [
    loginMutation,
    { loading: loadingLogin, error: errorLogin }
  ] = useLoginMutation()

  const errorMsgLogin =
    errorLogin && 'El password no es correcto o el usuario no existe'

  const handleSubmitLogin = ({ email, password }) => {
    loginMutation({ variables: { input: { email, password } } }).then(
      ({ data }) => {
        const { login: token } = data
        dispatch({ type: 'activateAuth', token })
      }
    )
  }

  return (
    <UserForm
      disabled={loadingLogin}
      error={errorMsgLogin}
      title='Iniciar Sesión'
      onSubmit={handleSubmitLogin}
    />
  )
}

export default LoginUserForm
