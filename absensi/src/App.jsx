import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login'
import {Routes,Route}from "react-router-dom"
import Dashboard from './pagesAdmin/dashboard'
import DaftarKaryawan from './pagesAdmin/DaftarKaryawan'
import PengajuanCuti from './pagesAdmin/PengajuanCuti'


function App() {
  const [count, setCount] = useState(0)

  return (
   <Routes>
    <Route element={<Login/>} path='/'/>
    <Route element={<Dashboard/>} path='/dashboard'/>
    <Route element={<DaftarKaryawan/>} path='/daftar-karyawan' />
    <Route element={<PengajuanCuti/>} path='/pengajuan-cuti' />
   </Routes>
  )
}

export default App
