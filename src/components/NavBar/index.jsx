import React from 'react'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

import { Nav, Link } from './styles'

const SIZE = '32px'

export const NavBar = () => (
  <Nav>
    <Link to='/'>
      <MdHome size={SIZE} />
    </Link>
    <Link to='/favs'>
      <MdFavoriteBorder size={SIZE} />
    </Link>
    <Link to='/user'>
      <MdPersonOutline size={SIZE} />
    </Link>
  </Nav>
)
