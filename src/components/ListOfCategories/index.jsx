import React from 'react'

import { Category } from '../Category'
import { List, Item } from './styles'
import useGetCategories from '../../hooks/useGetCategories'
import useOnScrollY from '../../hooks/useOnScrollY'

const CATEGORIES_URL =
  'https://petgram-server-rdml-kli4u9ssf.vercel.app/categories'

const ListOfCategoriesComponent = () => {
  const [categories, loading] = useGetCategories(CATEGORIES_URL)
  const [showFixed] = useOnScrollY(200)

  const renderLoading = () => (
    <Item key='loading'>
      <Category />
    </Item>
  )

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? renderLoading()
        : categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
