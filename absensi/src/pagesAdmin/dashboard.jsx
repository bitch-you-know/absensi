import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Pastikan Anda mengimpor Row dan Col
import NavbarAdmin from '../components/navbarAdmin';
import DaftarKaryawan from './DaftarKaryawan';

const Dashboard = () => {
    return (
        <div className='d-flex' style={{ height: "100vh", width: "100%" }}>
           
           
           
           <DaftarKaryawan/>
          
        </div>
    );
};

export default Dashboard;