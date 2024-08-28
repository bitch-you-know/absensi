import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Pastikan Anda mengimpor Row dan Col
import { Link } from 'react-router-dom';


const NavbarAdmin = () => {
    return (
        <div className="navbar bg-black justify-content-center align-items-start" style={{ height: "100vh", width: "20%" }}>
            <div className=" " style={{paddingTop:"2px" }}>
                <div className='text-center'>
                    <h1 className='text-white'>Admin  DashBoard</h1>
                </div>
                <hr />
                <Row className="d-flex ">
                    <Col className="text-center ">
                       <div className='bg-white'><Link to={"/pengajuan-cuti"} className='text-decoration-none text-black'><h4>Dashboard Over Veew</h4></Link></div>
                       <div className='bg-white'><h4>Daftar Karyawan</h4></div>
                       <div className='bg-white'><h4>Pengajuan Cuti</h4></div>
                       
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default NavbarAdmin;