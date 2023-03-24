import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournailPage } from '../pages/JournailPage'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<JournailPage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}
