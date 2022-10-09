import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Cadastro } from '../components/Cadastro'
import { CreateTask } from '../components/CreateTask'
import { Deletar } from '../components/Delete'
import { EditTask } from '../components/EditTask'
import { Home } from '../components/Home'
import { Login } from '../components/Login'

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/edit/:idTask' element={<EditTask/>} />
            <Route path='/create' element={<CreateTask/>} />
            <Route path='/delete/:idTask' element={<Deletar/>}/>
        </Routes>
    </Router>
  )
}
