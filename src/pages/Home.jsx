import React from 'react'

import { Layout } from '../components/Layout'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title='Tu app de fotos de mascotas'
      subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export default React.memo(
  HomePage,
  (prevProps, props) => prevProps.categoryId === props.categoryId
)
