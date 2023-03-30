import React,{ useEffect } from 'react'
import CreateMemo from '../Memo/CreateMemo'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
const Memo = ({ setSelectMenu, link }) => {

  useEffect(() => {
    setSelectMenu(link)
  }, [])
  return (
    <div>
      <a href="/new" class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
        <svg width="20" height="20" fill="currentColor" class="mr-2" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New
      </a>
    < CreateMemo />
    </div>
  )
}

export default Memo