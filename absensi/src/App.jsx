import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login'
import {Routes,Route}from "react-router-dom"
import Dashboard from './pagesAdmin/dashboard'
import DaftarKaryawan from './pagesAdmin/DaftarKaryawan'
import PengajuanCuti from './pagesAdmin/PengajuanCuti'
import HomePage from './pagesUser/HomePage'
import Calendarku from './pagesUser/CalendarKu'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route element={<Login/>} path='/'/>
    <Route element={<Dashboard/>} path='/dashboard'/>
    <Route element={<DaftarKaryawan/>} path='/daftar-karyawan' />
    <Route element={<PengajuanCuti/>} path='/pengajuan-cuti' />
    <Route element={<HomePage/>} path='/home-page' /> 
    <Route element={<Calendarku/>} path='/calendarku' /> 
   </Routes>
  )
}

export default App
