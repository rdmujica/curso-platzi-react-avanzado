import React from 'react'

import { Grid, Image, Link } from './styles'

export const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {favs.map(({ id, src }) => (
      <Link key={id} to={`/detail/${id}`}>
        <Image src={src} />
      </Link>
    ))}
  </Grid>
)
