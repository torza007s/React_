import React,{ useEffect } from 'react'

const Remind = ({ setSelectMenu, link }) => {

  useEffect(() => {
    setSelectMenu(link)
  }, [])

  return (
    <div>Remind</div>
  )
}

export default Remind