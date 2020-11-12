import React from 'react'
import { useSinglePhoto } from '../../hooks'
import { PhotoCard } from '../PhotoCard'

export const PhotoCardWithQuery = ({ id }) => {
  const [loading, error, data] = useSinglePhoto(id)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  const { photo } = data
  return <PhotoCard {...photo} />
}
