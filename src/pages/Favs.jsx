import React from 'react'

import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'
import useGetFavs from '../hooks/useGetFavs'

const Favs = () => {
  const [loading, error, data] = useGetFavs()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <Layout
      title='Tus favoritos'
      subtitle='Aquí puedes encontrar tus favoritos'
    >
      <ListOfFavs {...data} />
    </Layout>
  )
}

export default Favs
