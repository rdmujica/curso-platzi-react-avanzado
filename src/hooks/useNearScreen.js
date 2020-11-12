import { useState, useEffect, useRef } from 'react'

const useNearScreen = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const loadIntersectionObserver = async () => {
      try {
        /* eslint-disable no-unused-expressions */
        typeof window.IntersectionObserver !== 'undefined'
          ? window.IntersectionObserver
          : await import('intersection-observer')
        /* eslint-enable no-unused-expressions */
      } catch (error) {
        console.log(error.message)
      }
    }

    loadIntersectionObserver()

    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return [show, element]
}

export default useNearScreen
