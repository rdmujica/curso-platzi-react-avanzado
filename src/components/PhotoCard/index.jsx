import React from 'react'
import { Link } from '@reach/router'

import { Img, ImgWrapper, Article } from './styles'
import useToggleLikePhoto from '../../hooks/useToggleLikePhoto'
import useNearScreen from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const [toggleLike] = useToggleLikePhoto()

  const handleFavClick = () => {
    toggleLike({ variables: { input: { id } } })
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='' />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}
