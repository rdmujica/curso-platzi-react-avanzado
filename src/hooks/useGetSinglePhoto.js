import { gql, useQuery } from '@apollo/client'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const useGetSinglePhoto = (id) => {
  const parametersOfPhotos = {
    variables: { id }
  }
  const { loading, error, data } = useQuery(
    GET_SINGLE_PHOTO,
    parametersOfPhotos
  )
  return [loading, error, data]
}

export default useGetSinglePhoto
