import React from 'react'

import { useStateValue } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

const User = () => {
  const [, dispatch] = useStateValue()
  const handleOnClick = () => dispatch({ type: 'removeAuth' })
  return (
    <>
      <h1>User!!</h1>
      <SubmitButton onClick={handleOnClick}>Cerrar Sesión</SubmitButton>
    </>
  )
}

export default User
