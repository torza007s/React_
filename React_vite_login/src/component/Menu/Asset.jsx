import React,{ useEffect } from 'react'

const Asset = ({ setSelectMenu, link }) => {

  useEffect(() => {
    setSelectMenu(link)
  }, [])
  return (
    <div>Asset</div>
  )
}

export default Asset

// today date
