import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Pastikan Anda mengimpor Row dan Col

const Navbar = () => {
    return (
        <div className="navbar bg-black justify-content-center align-items-center" style={{ height: "20%", width: "100%" }}>
            <div className=" h-100 " style={{ }}>
                <div >
                    <h1 className='text-white'>DashBoard</h1>
                </div>
                <Row className="d-flex bg-danger ">
                    <Col className="text-center ">
                       <div  className='bg-white'><h4>Daftar Karyawan</h4></div>
                       <div className='bg-white'><h4>absensi</h4></div>
                       <div className='bg-white'><h4>Product</h4></div>
                       
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Navbar;