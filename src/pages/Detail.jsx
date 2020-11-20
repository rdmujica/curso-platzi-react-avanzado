import React from 'react'

import { Layout } from '../components/Layout'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery'

const Detail = ({ detailId }) => (
  <Layout title={`Fotografía ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
)

export default Detail
