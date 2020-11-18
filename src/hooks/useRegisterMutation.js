import { gql, useMutation } from '@apollo/client'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

const useRegisterMutation = () => useMutation(REGISTER)

export default useRegisterMutation
