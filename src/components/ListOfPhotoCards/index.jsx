import React from 'react'

import useGetPhotos from '../../hooks/useGetPhotos'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ categoryId }) => {
  const [loading, error, data] = useGetPhotos(categoryId)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
