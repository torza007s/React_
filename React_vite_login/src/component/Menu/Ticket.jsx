import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


const Ticket = ({ setSelectMenu, link }) => {
  useEffect(() => {
    setSelectMenu(link)
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Ticket