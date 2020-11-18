import { gql, useMutation } from '@apollo/client'

// const ANONIMOUS_LIKE_PHOTO = gql`
//   mutation likeAnonymousPhoto($input: LikePhoto!) {
//     likeAnonymousPhoto(input: $input) {
//       id
//       liked
//       likes
//     }
//   }
// `

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

const useToggleLikePhoto = () => {
  const [likePhoto, { loading, error, data }] = useMutation(LIKE_PHOTO)
  return [likePhoto, { loading, error, data }]
}

export default useToggleLikePhoto
