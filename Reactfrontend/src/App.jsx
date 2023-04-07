import React from 'react'
import Header from './componect/dashboard/Header'
import Sidebar from './componect/dashboard/Sidebar'
export default function App() {
  return (
    <div>
      <Sidebar>
      <div className='bg-gray-600 min-h-screen' >
      <Header />
      </div>
      </Sidebar>

    </div>
  )
}
