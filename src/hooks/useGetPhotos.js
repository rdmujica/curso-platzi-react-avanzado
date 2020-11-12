import { gql, useQuery } from '@apollo/client'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const useGetPhotos = (categoryId) => {
  const parametersOfPhotos = {
    variables: { categoryId }
  }
  const { loading, error, data } = useQuery(GET_PHOTOS, parametersOfPhotos)
  return [loading, error, data]
}

export default useGetPhotos
