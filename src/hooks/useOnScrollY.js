import { useState, useEffect } from 'react'

const useOnScrollY = (valueScrollY = 200) => {
  const [triggerAction, setTriggerAction] = useState(false)
  useEffect(() => {
    const onScroll = (e) => {
      const newTriggerAction = window.scrollY > valueScrollY
      triggerAction !== newTriggerAction && setTriggerAction(newTriggerAction)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [triggerAction])
  return [triggerAction]
}

export default useOnScrollY
