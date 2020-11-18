import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavs } from '../hooks'

const Favs = () => {
  const [loading, error, data] = useGetFavs()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <>
      <h1>Favs</h1>
      <ListOfFavs {...data} />
    </>
  )
}

export default Favs
