import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import CreatePage from './Pages/CreatePage.jsx'
import UpdatePage from './Pages/UpdatePage.jsx'


const App = () => {
  return (
    <div >
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/update/:id' element={<UpdatePage />} />
      </Routes>
      
    </div>
  )
}

export default App