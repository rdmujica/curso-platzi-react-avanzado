import { useState, useEffect } from 'react'

const useGetCategories = (url) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadCategories = async () => {
    await window
      .fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError('Ha ocurrido un error por favor intente mas tarde')
      })
  }

  useEffect(() => {
    setLoading(true)
    loadCategories()
  }, [])

  return [categories, loading, error]
}

export default useGetCategories
