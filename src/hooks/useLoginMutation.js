import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

const useLoginMutation = () => useMutation(LOGIN)

export default useLoginMutation
